/* 
index.js 
Description: Entry point for project. Appends all components to #app in index.html. 
*/

// components 
import { About } from "./components/About.js";
import { NavBar } from "./components/NavBar.js";
import { Legend } from "./components/Legend.js";
import { MapContainer } from "./components/MapContainer.js";
import { LMap } from "./components/LMap.js";

// initialize and add components to #app
const app = document.getElementById("app");

app.append(NavBar(), MapContainer());

document.body.append(About(), Legend());

// NavBar(document.getElementById("nav-bar"));
// About(document.getElementById("info"));
// Legend(document.getElementById("legend"));
LMap(document.getElementById("map"));