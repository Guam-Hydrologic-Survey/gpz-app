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
    // const tr_btn = document.createElement("a");
    // tr_btn.className = "btn btn-primary";
    // tr_btn.setAttribute("title", "Coming soon!"); // update to tr.title when available 
    // tr_btn.setAttribute("href", tr.url);
    // tr_btn.setAttribute("target", "_blank");
    // tr_btn.setAttribute("rel", "noreferrer noopener");
    // tr_btn.setAttribute("role", "button");
    // tr_btn.textContent = "WERI Technical Report"; // update with num when available 
    
    // // dropdown btn for assoc. technical reports 
    // const toggle_dropdown = document.createElement("button");
    // toggle_dropdown.className = "btn btn-primary dropdown-toggle dropdown-toggle-split";
    // toggle_dropdown.setAttribute("role", "button");
    // toggle_dropdown.setAttribute("data-bs-toggle", "dropdown");
    // toggle_dropdown.setAttribute("aria-expanded", "false");
    // toggle_dropdown.setAttribute("title", "View associated technical reports");

    // toggle_dropdown.innerHTML = /*html*/ `
    // <span class="visually-hidden">Toggle Dropdown</span>
    // `;

    // const dropdown_menu = document.createElement("ul");
    // dropdown_menu.className = "dropdown-menu";

    // // create first list item in dropdown menu
    // dropdown_menu.innerHTML = /*html*/ `
    // <li class="dropdown-item">Associated Technical Reports</li>
    // <li><hr class="dropdown-divider"></li>
    // `;

    // // iterate through assoc_trs list to populate dropdown menu 
    // assoc_trs.forEach(tr => {
    //   const li = document.createElement("li"); // wrapper for a tag
    //   const a = document.createElement("a"); 

    //   // a tag contents 
    //   a.className = "dropdown-item";
    //   a.setAttribute("href", tr.url);
    //   a.setAttribute("target", "_blank");
    //   a.setAttribute("rel", "noreferrer noopener");
    //   a.setAttribute("title", tr.title);
    //   a.textContent = `WERI TR ${tr.num} (${tr.author}, ${tr.year})`;

    //   li.append(a);
    //   dropdown_menu.append(li);
    // });

    // tr_btn_grp.append(tr_btn, toggle_dropdown, dropdown_menu);

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
        <li><a class="dropdown-item" target="_blank" rel="noreferrer noopener" href="https://guamhydrologicsurvey.uog.edu/maps-posters-library/" title="Maps & Posters Library on GHS">Maps & Posters Library</a></li>
      </ul>
    </div>
    `;
    
    // first, add dropdown menu for assoc. technical reports 
    // footer.append(tr_btn_grp);

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

    return modal;
}