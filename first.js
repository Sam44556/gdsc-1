"use strict";
const ps=require("prompt-sync");
const prompt=ps();
const h=+prompt("what is ur height")
const m=+prompt("what is ur mass  ")

const bmi=m/(h*h);
console.log("BMI= "+bmi)

