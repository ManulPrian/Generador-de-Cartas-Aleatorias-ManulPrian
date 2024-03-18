/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const arrayPalos = ["corazones", "picas", "treboles", "diamante"];
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

window.onload = function() {
  //write your code here
  console.log(arrayPalos[Math.floor(Math.random() * 4)]);
};
