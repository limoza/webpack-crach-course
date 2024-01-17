import _ from "lodash";
import "./style.css";
import nasa from "./nasa.png";

const component = () => {
  const element = document.createElement("div");
  const array = ["Hello", "webpack", "!!"];
  element.innerHTML = array.join(" ");
  return element;
};

document.body.appendChild(component());
document.body.classList.add("haikei");

const image = new Image();
image.src = nasa;
document.body.appendChild(image);
