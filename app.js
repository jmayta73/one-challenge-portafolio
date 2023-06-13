import {valida} from "./validacion.js";
import { validatext } from "./validacion.js";
const inputs = document.querySelectorAll("input");

inputs.forEach((input)=>{
    input.addEventListener("blur",(input) =>{
        valida(input.target);
    });
}

);


const texts = document.querySelectorAll("textarea");

texts.forEach((textarea)=>{
    textarea.addEventListener("blur",(textarea) =>{
        validatext(textarea.target);
    });
}

);