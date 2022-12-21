import { App } from "./src/js/app.js";
import "./src/public/css/style.css";

const app = App();

document.querySelector("#app").innerHTML = app;
