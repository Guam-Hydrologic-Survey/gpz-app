/* 
index.js 
Description: Entry point for project. Appends all components to #app in index.html. 
*/

// components 
import { About } from "./components/About_v2.js";
import { NavBar } from "./components/NavBar_v2.js";
import { Legend } from "./components/Legend_v2.js";
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