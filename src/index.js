import _ from "lodash";
import { Nijo } from "./utilities";

console.log(Nijo(3));

const component = () => {
  const element = document.createElement("div");
  const array = ["Hello", "webpack", "!!"];
  element.innerHTML = array.join(" ");
  return element;
};

document.body.appendChild(component());
