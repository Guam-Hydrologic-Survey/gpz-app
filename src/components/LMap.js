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
const center = [13.5435056,144.7478083];
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
        // options: topleft, topright, bottomleft, bottomright
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
                    color: "orange"
                }
            },
            polygon: {
                allowIntersection: false,
                showArea: true,
                showLength: true,
                shapeOptions: {
                    color: "purple",
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

    map.on(L.Draw.Event.CREATED, function(event) {
        var layer = event.layer;
        drawnFeatures.addLayer(layer);
    });

    if (map.hasLayer(drawnFeatures)) {
        layerControl.addOverlay(drawnFeatures, "Drawings");
    };

    for (const item of gpz_maps) {
        console.log(item.map);
        getData(item.map);
    }
}

// retrieves json and adds to leaflet map 
// param: path - string containing filepath 
function getData(gpz_map) {
    fetch(gpz_map.path)
    .then(response => response.json())
    .then(geojson => {
        const polygon = L.geoJSON(geojson, {
            style: {
                color: gpz_map.color
            }
        });

        const HEIGHT = 20;
        const WIDTH = 20;
        const FILL = gpz_map.color;

        polygon.bindPopup(`
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
            `);

        polygon.addTo(map);
    });
};

function darkenHex(hex, pct) {
    hex = hex.replace("#", ""); // clean string, remove #

    // parse rgb 
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // reduce each channel by pct
    r = Math.max(0, Math.floor( r * (1 - pct / 100)));
    g = Math.max(0, Math.floor( r * (1 - pct / 100)));
    b = Math.max(0, Math.floor( r * (1 - pct / 100)));

    // convert back to hex, padding with 0 if needed 
    const DARK_HEX = (n) => n.toString(16).padStart(2, "0");
    return `#${DARK_HEX(r)}${DARK_HEX(g)}${DARK_HEX(b)}`;
}