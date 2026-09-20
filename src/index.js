/* 
index.js 
Description: Entry point for project. Appends all components to #app in index.html. 
*/

// components 
import { About } from "./components/About.js";
import { NavBar } from "./components/NavBar.js";
import { Legend } from "./components/Legend.js";
import { LMap } from "./components/LMap.js";

document.getElementById("app").innerHTML = /*html*/ 
`
    <div id="nav-bar"></div>
    <div id="map"></div>
    <div id="info"></div>
    <div id="side-panel"></div>
    <div id="legend"></div>
`

NavBar(document.getElementById("nav-bar"));
About(document.getElementById("info"));
Legend(document.getElementById("legend"));
LMap(document.getElementById("map"));