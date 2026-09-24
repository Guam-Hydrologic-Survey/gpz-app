/* 
NavBar.js
Description: Creates the About component 
*/

export function About() {
    const modal = document.createElement("div");

    modal.className = "modal fade";
    modal.tabIndex = -1;
    modal.id = "about";

    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("data-bs-backdrop", "true");

    // technical report
    const tr = {
      url: "",
      title: "",
      num: 0,
      author: "",
      year: 0,
    }

    // list associated technical reports
    const assoc_trs = [
      {
        url: "",
        title: "",
        num: 0,
        author: "",
        year: 0,
      }
    ];

    const tr_btn_grp = document.createElement("div");
    tr_btn_grp.className = "btn-group";

    // btn for technical report 
    const tr_btn = document.createElement("a");
    tr_btn.className = "btn btn-primary";
    tr_btn.setAttribute("title", "PDFs of GPZ Maps"); // update to tr.title when available 
    tr_btn.setAttribute("href", tr.url);
    tr_btn.setAttribute("target", "_blank");
    tr_btn.setAttribute("rel", "noreferrer noopener");
    tr_btn.setAttribute("role", "button");
    tr_btn.textContent = "Groundwater Protection Zones Maps (CDM 1982 & DLM 1997)"; // update with num when available 
    
    // dropdown btn for assoc. technical reports 
    const toggle_dropdown = document.createElement("button");
    toggle_dropdown.className = "btn btn-primary dropdown-toggle dropdown-toggle-split";
    toggle_dropdown.setAttribute("role", "button");
    toggle_dropdown.setAttribute("data-bs-toggle", "dropdown");
    toggle_dropdown.setAttribute("aria-expanded", "false");
    toggle_dropdown.setAttribute("title", "View PDFs of GPZ Maps");

    toggle_dropdown.innerHTML = /*html*/ `
    <span class="visually-hidden">Toggle Dropdown</span>
    `;

    const dropdown_menu = document.createElement("ul");
    dropdown_menu.className = "dropdown-menu";

    // create first list item in dropdown menu
    dropdown_menu.innerHTML = /*html*/ `
    <li class="dropdown-item">View PDFs of GPZ Maps</li>
    <li><hr class="dropdown-divider"></li>
    `;

    const li_cdm = document.createElement("li"); // wrapper for a tag
    const li_dlm = document.createElement("li"); 
    const a_cdm = document.createElement("a"); 
    const a_dlm = document.createElement("a"); 

    // a tag contents 
    a_cdm.className = "dropdown-item";
    a_cdm.setAttribute("href", "https://ghs-cdn.uog.edu/wp-content/databases/MAppFx/gpz-app/CDM82%20-%20Fig8%20GWPZ.pdf");
    a_cdm.setAttribute("target", "_blank");
    a_cdm.setAttribute("rel", "noreferrer noopener");
    a_cdm.setAttribute("title", "GPZ CDM 1982");
    a_cdm.textContent = "GPZ CDM 1982";

    // a tag contents 
    a_dlm.className = "dropdown-item";
    a_dlm.setAttribute("href", "https://ghs-cdn.uog.edu/wp-content/databases/MAppFx/gpz-app/1997-DLM-GPZ-Overlay-Map.pdf");
    a_dlm.setAttribute("target", "_blank");
    a_dlm.setAttribute("rel", "noreferrer noopener");
    a_dlm.setAttribute("title", "GPZ DLM 1997");
    a_dlm.textContent = "GPZ DLM 1997";

    li_cdm.append(a_cdm);
    li_dlm.append(a_dlm);

    dropdown_menu.append(li_cdm);
    dropdown_menu.append(li_dlm);

    tr_btn_grp.append(tr_btn, toggle_dropdown, dropdown_menu);

    // modal header 
    const header = document.createElement("div");
    header.className = "modal-header";
    header.innerHTML = /*html*/ `
    <h1 class="modal-title fs-4" id="about-modal-title">About</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `;

    // modal body 
    const body = document.createElement("div");
    body.className = "modal-body";
    body.innerHTML = /*html*/ `
    <p>
    The groundwater protection zone (GPZ) is an inland area that limits certain activities and potential discharges that may be detrimental to freshwater source. Some of these are the development plan of facilities where operations near high recharge areas such as surface depressions or sinkholes. The Northern Guam Lens Study (<a title="View CDN 1982 (PDF)" href="https://ghs-cdn.uog.edu/wp-content/databases/Library/Northern-Guam-Lens-Study/NGLS%205_BranchMinkBHA%2CCDM82-SummaryReportNGLSGEPA.pdf" target="_blank" rel="noreferrer noopener">CDM 1982</a>) first mapped the <a title="View GPZ map (PDF)" href="https://ghs-cdn.uog.edu/wp-content/databases/MAppFx/gpz-app/CDM82%20-%20Fig8%20GWPZ.pdf" target="_blank" rel="noreferrer noopener">GPZ</a>. The determination was based on production well performance analysis, terrain analysis, areas, roads, and ridgelines. A 4,000 feet buffer is delineated from the coast, north of Tumon Bay along the coast, all the way around clockwise to Route 4 and Route 10 intersection, except on the south flank of Mount Santa Rosa ridge. South of Tumon Bay is a further inland setback around the Guam International Airport and Harmon Industrial Park, which is along Route 16 and Route 10; municipal boundaries: Leyang and Balaku Streets, the road around the Guam Memorial Park, and along the ridgeline and edges by the Hagåtña Swamp. The delineation continues to cut over the Hagåtña Swamp, down the hill of Route 4 before Cost-U-Less, uphill to Route 24A west, then along Chalan Palasyo past Fort Santa Agueda, and towards the cliff edge around the Naval Hospital, and down to Marine Dr. in front of the Governor's Office (Adelup). South of the Pågu-Adilok Fault includes the ridgeline of the Ma'ina Watershed, and along the ridge of Alutom, before the Pågu Watershed. In 1997, Department of Land Management mapped an update to the <a title="View GPZ map (PDF)" href="https://ghs-cdn.uog.edu/wp-content/databases/MAppFx/gpz-app/CDM82%20-%20Fig8%20GWPZ.pdf" target="_blank" rel="noreferrer noopener">GPZ</a> with practical survey points. A referenced point is provided at the intersection of Route 1 and Route 16.
    <br><br>
    Both maps were made using a 4,000 ft buffer and georeferenced overlays for approximate delineation. The GPZ layers and basemaps may be selected with the <i><span class="term" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-html="true" data-bs-title="Layer Toggle" data-bs-content='Hover over this icon <i class="bi bi-stack"></i> to open the layer widget.'>layer widget</span></i> located on the bottom right corner of the map. The other widgets are basic map controls, zoom, recenter, and drawing tools. The original maps in PDFs are available through the <i>information widget</i> (the first button on the top right corner of the map).
    <br><br>
    <strong>Link to CDM 1982:</strong>
    <br>
    <a title="View CDM 1982 (PDF)" href="https://ghs-cdn.uog.edu/wp-content/databases/Library/Northern-Guam-Lens-Study/NGLS%205_BranchMinkBHA%2CCDM82-SummaryReportNGLSGEPA.pdf" target="_blank" rel="noreferrer noopener">Barrett, Harris & Assoc., & Camp, Dresser, & McKee (CDM). (1982) Northern Guam Lens Study, Summary Report, Guam Environmental Protection Agency.</a>
    </p>
    `;

    // modal footer 
    const footer = document.createElement("div");
    footer.className = "modal-footer about-btns";

    // ghs map libraries
    const map_libs = /*html*/ `
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        WERI Map Series
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://guamhydrologicsurvey.uog.edu/mappfx-library/" title="MAppFx Library on GHS">MAppFx Library</a></li>
        <li><a class="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://guamhydrologicsurvey.uog.edu/web-mapps-library/" title="Web MApps Library on GHS">Web MApps</a></li>
        <li><a class="dropdown-item" target="_blank" guamgurel="noreferrer noopener" href="https://guamhydrologicsurvey.uog.edu/maps-posters-library/" title="Maps & Posters Library on GHS">Maps & Posters Library</a></li>
      </ul>
    </div>
    `;
    
    // first, add dropdown menu for assoc. technical reports 
    footer.append(tr_btn_grp);

    // lastly, add map libraries 
    footer.insertAdjacentHTML("beforeend", map_libs);

    // modal content - wrapper for everything (incl. header, body, footer)
    const content = document.createElement("div");
    content.className = "modal-content";
    content.append(header, body, footer); // add modal elements to content

    const content_wrapper = document.createElement("div");
    content_wrapper.className = "modal-dialog modal-dialog-centered modal-xl";
    content_wrapper.append(content);

    modal.append(content_wrapper);

    // extend bootstrap's default sanitizer allowList so svg markup isn't stripped 
    const allowList = bootstrap.Tooltip.Default.allowList;
    allowList.svg = ["xmlns", "width", "height", "viewbox", "fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "class"];
    allowList.path = ["d"];
    allowList.rect = ["width", "height", "x", "y", "rx", "ry"];
    allowList.circle = ["cx", "cy", "r"];
    allowList.line = ["x1", "y1", "x2", "y2"];
    allowList.polyline = ["points"];
    allowList.polygon = ["points"];
    allowList.use = ["href", "xlink:href"];

    document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
      new bootstrap.Popover(el, { allowList });
    });

    return modal;
}