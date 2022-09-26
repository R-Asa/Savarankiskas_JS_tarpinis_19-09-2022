//2.1 Sukurti su JS pagalbą elemneta div. 
let divElement = document.createElement("div");
document.body.append(divElement);

/*2.2 Naudojant js div elementui priskirti css stilius, 
kurie jau turi buti css faile. (pltotis 200px, aukštis 200px, fono spalva žalia)*/
divElement.classList.add("element");

//2.3 Po 3sek. div fono spalva turi pasikisti į raudona.

setTimeout(() => {
  document.querySelector("div").style.backgroundColor = "red", 3000;
}, 3000)