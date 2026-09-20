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

    // legend contents 
    const contents = document.createElement("div");
    contents.className = "offcanvas-body";
    contents.id = "legend-contents";

    contents.innerHTML = /*html*/ `
    `;

    legend.append(header, contents);

    return legend; 
}
