/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let randomPalo = numeroAleatorio(arrayPalos.length);
  console.log(randomPalo);
  let color;
  if (randomPalo <= 1) {
    color = "red";
  } else {
    color = "black";
  }

  palos[0].classList.add(color);
  palos[1].classList.add(color);
  palos[0].innerHTML = arrayPalos[randomPalo];
  palos[1].innerHTML = palos[0].innerHTML;
  numero[0].innerHTML = arrayNumeros[numeroAleatorio(arrayNumeros.length)];
};
const arrayPalos = ["♥", "♠", "♦", "♣"];
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
const COLORES = ["red", "black"];

let palos = document.getElementsByClassName("palos");
let numero = document.getElementsByClassName("numero");

function numeroAleatorio(length) {
  return Math.floor(Math.random() * length);
}
