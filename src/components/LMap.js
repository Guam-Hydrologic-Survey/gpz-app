/* 
LMap.js 
Parameters: "element" - HTML element with ID containing Leaflet map
Return: none
*/

// components 
import { BaseLayers } from "./Baselayers.js";

// constants 
import { gpz_maps } from "../constants/paths.js";

// map settings 
const center = [13.54487489195821, 144.81662750244143];
const defaultZoom = 12;
const maxZoom = 19; 

// set map as global variable 
let map;

export function LMap(element) {

    // create leaflet map 
    map = L.map(element, {
        center: center,
        zoom: defaultZoom,
        zoomControl: false,
        attributionControl: false,
    });

    const baseLayers = BaseLayers(map, maxZoom);

    const layerControl = L.control.layers(baseLayers, null, { position: "bottomright" });
    layerControl.addTo(map);

    const zoomControl = L.control.zoom({
        position: 'bottomright'
    });
    zoomControl.addTo(map);

    const resetZoomBtn = L.easyButton('<img src="./src/assets/arrow-clockwise.svg">', function() {
        map.setView(center, defaultZoom);
    }, "Reset map view");

    const controlBar = L.easyBar([
        resetZoomBtn,
    ], { position: "bottomright" });

    controlBar.addTo(map);

    // draw control bar
    var drawnFeatures = new L.FeatureGroup();
    map.addLayer(drawnFeatures);

    var drawControl = new L.Control.Draw({
        position: "bottomright",
        draw: {
            polyline: {
                allowIntersection: true,
                shapeOptions: {
                    color: "red"
                }
            },
            polygon: {
                allowIntersection: false,
                showArea: true,
                showLength: true,
                shapeOptions: {
                    color: "white",
                    clickable: true
                }
            },
            circle: {
                shapeOptions: {
                    shapeOptions: {
                        color: "blue",
                        clickable: true
                    }
                }
            },
            circlemarker: false,
            rectangle: {
                showArea: true,
                showLength: true,
                shapeOptions: {
                    color: "green",
                    clickable: true
                }
            },
            marker: false
        },
        edit: {
            featureGroup: drawnFeatures,
            remove: true,
        }
    });

    map.addControl(drawControl);

    // draw control events
    map.on(L.Draw.Event.CREATED, function(event) {
        var layer = event.layer;
        drawnFeatures.addLayer(layer);
    });

    if (map.hasLayer(drawnFeatures)) {
        layerControl.addOverlay(drawnFeatures, "Drawings");
    };

    // loop to retrieve data --> calls getData() 
    for (const item of gpz_maps) {
        getData(item.map, layerControl);
    }
}

// retrieves json and adds to leaflet map 
// param: path - string containing filepath 
function getData(gpz_map, layerControl) {
    fetch(gpz_map.path)
    .then(response => response.json())
    .then(geojson => {

        const HEIGHT = 20;
        const WIDTH = 20;
        const FILL = gpz_map.color;

        const layer = L.geoJSON(geojson, {
            pointToLayer: (feature, latlng) => {
                return L.circleMarker(latlng, {
                    radius: 8, 
                    fillColor: FILL,
                    color: "black",
                    weight: 2,
                    fillOpacity: 0.9
                });
            },
            style: (feature) => {
                const type = feature.geometry.type;

                if (type === "Polygon" || type === "MultiPolygon") {
                    return { color: FILL }
                } 
            },
            onEachFeature: (feature, layer) => {
                const type = feature.geometry?.type;

                let html; 

                if (/Polygon$/.test(type)) {
                    html = `
                    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
                        <rect 
                            width="${WIDTH}" 
                            height="${HEIGHT}" 
                            fill="${FILL}" 
                            rx="5"
                            ></rect>
                    </svg>
                    <a 
                        href="${gpz_map.pdf}" 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        title="View PDF of ${gpz_map.name}"
                        >${gpz_map.name}</a>
                    `;
                } else {
                    html = `
                    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="10" cy="10" r="8" fill="${FILL}" stroke="black" stroke-width="2"
                        />
                    </svg>
                    <p><strong>Reference point:</strong><br>Intersection between Route 1 & Route 16</p>
                    `;
                }

                layer.bindPopup(html);
            }
        });

        // add to map and layer control 
        layer.addTo(map);
        layerControl.addOverlay(layer, `${gpz_map.name}`);
    });
};
