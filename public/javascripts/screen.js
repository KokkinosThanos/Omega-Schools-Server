
let x = window.innerWidth;
console.log(x);

let y = window.innerHeight;
console.log(y);

let container;
container = document.getElementById('container');
container.style.width = x + "px";
container.style.height = y + "px";

let header;
header = document.getElementsByTagName('header')[0];
header.style.width = x + "px";

let main;
main = document.getElementsByTagName('main')[0];
main.style.width = x + "px";
main.style.height = y - 90 + "px";

let footer;
footer = document.getElementsByTagName('footer')[0];
footer.style.width = x + "px";
