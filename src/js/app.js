import { Section } from "./section.js";
import { Main } from "./main.js";

import "../public/css/style.css";

const section = Section();
const main = Main();

export function App() {
  return `${section} ${main}`;
}
