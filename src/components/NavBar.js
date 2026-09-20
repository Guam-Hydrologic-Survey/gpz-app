/* 
NavBar.js
Description: Creates the Navigation Bar component. 
*/

export function NavBar() {

    const title = "MAppFx: Groundwater Protection Zones (GPZ)";

    const navbar = document.createElement("nav");
    navbar.id = "navbar";
    navbar.className = "navbar navbar-dark bg-dark px-3 fixed-top custom-navbar";

    // create header container projec title and logo   
    const brand = document.createElement("a");
    brand.className = "navbar-brand mb-0";
    brand.href = "#";

    const logo = document.createElement("img");
    logo.src = "./src/assets/WERI-Logo.png";
    logo.alt = "WERI Logo";
    logo.width = 28;
    logo.height = 36;
    logo.className = "d-inline-block align-text-top";

    brand.appendChild(logo);
    brand.appendChild(document.createTextNode(title));

    const controls =  document.createElement("div");
    controls.className = "d-flex align-items-center gap-2";

    const aboutBtn = document.createElement("button");
    aboutBtn.type = "button";
    aboutBtn.className = "";
    // aboutBtn.className = "btn btn-outline-light btn-sm";
    aboutBtn.setAttribute("data-bs-toggle", "modal");
    aboutBtn.setAttribute("data-bs-target", "#about");
    aboutBtn.setAttribute("aria-controls", "about");
    aboutBtn.setAttribute("title", "About");
    // aboutBtn.textContent = "About";
    aboutBtn.innerHTML = /*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
    <span class="navbar-icon-tooltip">About</span>
    `;

    const lengendBtn = document.createElement("button");
    lengendBtn.type = "button";
    // lengendBtn.className = "btn btn-outline-light btn-sm";
    lengendBtn.textContent = "Legend";
    lengendBtn.setAttribute("data-bs-toggle", "offcanvas");
    lengendBtn.setAttribute("data-bs-target", "#legend-offcanvas");
    lengendBtn.setAttribute("aria-controls", "legend");
    // lengendBtn.setAttribute("title", "Legend");
    lengendBtn.innerHTML = /*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-icon lucide-list"><path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/></svg>
    <span class="navbar-icon-tooltip">Legend</span>
    `;

    const dropdown = createDropdownLinks();

    controls.append(aboutBtn, lengendBtn, dropdown);
    navbar.append(brand, controls);
    return navbar;
}

function createDropdownLinks() {
    const container = document.createElement("div");
    container.className = "dropdown";

    const toggle = document.createElement("button");
    toggle.type = "button";
    // toggle.className = "btn btn-outline-light btn-sm dropdown-toggle";
    // toggle.className = "dropdown-toggle";
    toggle.setAttribute("data-bs-toggle", "dropdown");
    toggle.setAttribute("aria-expanded", "false");
    // toggle.setAttribute("title", "Links");
    // toggle.textContent = "Links";
    toggle.innerHTML = /*html*/ `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    <span class="navbar-icon-tooltip">Links</span>
    `;

    const menu = document.createElement("ul");
    menu.className = "dropdown-menu dropdown-menu-end";

    const links = [
        { 
            label: "Water & Environmental Research Institute of the Western Pacific",
            href: "https://weri.uog.edu/"
        },
        {
            label: "Guam Hydrologic Survey",
            href: "https://guamhydrologicsurvey.uog.edu"
        }
    ];

    links.forEach(({ label, href }) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.className = "dropdown-item";
        a.href = href;
        a.textContent = label;

        li.appendChild(a);
        menu.appendChild(li);
    });

    container.append(toggle, menu);
    return container;
}
