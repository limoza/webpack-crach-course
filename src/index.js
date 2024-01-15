import _ from "lodash";

const component = () => {
  const element = document.createElement("div");
  const array = ["Hello", "webpack"];
  element.innerHTML = array.join(" ");
  return element;
};

document.body.appendChild(component());
