let divElement = document.createElement("div");
document.body.append(divElement);
divElement.classList.add("element");

setTimeout(() => {
  document.querySelector("div").style.backgroundColor = "red", 3000;
}, 3000)