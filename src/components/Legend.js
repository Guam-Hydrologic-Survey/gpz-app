/* 
Legend.js
Description: Creates the Legend component
*/

export function Legend() {

    const legend = document.createElement("div");

    legend.className = "offcanvas offcanvas-start";
    legend.tabIndex = -1;
    legend.id = "legend-offcanvas";

    legend.setAttribute("data-bs-scroll", "true");
    legend.setAttribute("data-bs-backdrop", "false");

    // legend header 
    const header = document.createElement("div");
    header.className = "offcanvas-header";
    header.innerHTML = /*html*/ `
    <h2 class="offcanvas-title text-font-style-roboto-slab" id="offcanvasScrollingLabel">Legend</h2>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    `;

    const HEIGHT = 50;
    const WIDTH = 50;

    // legend contents 
    const contents = document.createElement("div");
    contents.className = "offcanvas-body";
    contents.id = "legend-contents";

    contents.innerHTML = /*html*/ `
    <hr>
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <rect 
            width="${WIDTH}" 
            height="${HEIGHT}" 
            fill="#ffea00" 
            rx="5"
            ></rect>
    </svg>
    <a 
        href="https://ghs-cdn.uog.edu/wp-content/databases/MAppFx/gpz-app/CDM82%20-%20Fig8%20GWPZ.pdf" 
        target="_blank" 
        rel="noreferrer noopener" 
        title="GPZ CDM 1982"
        >GPZ CDM 1982</a>
    <hr>
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <rect 
            width="${WIDTH}" 
            height="${HEIGHT}" 
            fill="#c77dff" 
            rx="5"
            ></rect>
    </svg>
    <a 
        href="https://ghs-cdn.uog.edu/wp-content/databases/MAppFx/gpz-app/1997-DLM-GPZ-Overlay-Map.pdf" 
        target="_blank" 
        rel="noreferrer noopener" 
        title="GPZ DLM 1997"
        >GPZ DLM 1997</a>
    <hr>
    `;

    legend.append(header, contents);

    return legend; 
}
