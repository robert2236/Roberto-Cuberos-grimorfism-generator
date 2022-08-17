const box = document.querySelector(".box");
const color = document.querySelector(".color");
const opacity = document.querySelector(".opacity");
const opacityOut = document.querySelector(".opacity-output");
const blur = document.querySelector(".blur");
const blurOut = document.querySelector(".blur-output");
const size = document.querySelector(".size");
const sizeOut = document.querySelector(".size-output");
const radius = document.querySelector(".radius");
const radiusOut = document.querySelector(".radius-output");
const contrasting = document.querySelector(".contrasting");
const contrastingOut = document.querySelector(".contrasting-output");
const saturation = document.querySelector(".saturation");
const saturationOut = document.querySelector(".saturation-output");
const boxContainer = document.querySelector(".box-container");
const code = document.querySelector(".code");

let colorRgb = [];
let inRgb;
const hexToRgb = function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
let opacidad = 1;
let difuminado = 0;
let saturacion = 100;
let contraste = 100;
opacity.addEventListener("input", (e) => {
  let actualOpacity = [];
  box.style.background = `rgba(255, 255, 255, ${0.01 * e.target.value})`;
  actualOpacity.push(0.01 * e.target.value);
  opacityOut.value = `${e.target.value}%`;
  opacidad = actualOpacity;
  code.innerHTML = `<div>
    background: rgba(${colorRgb}, ${0.01 * e.target.value});
    </div>
    `;
});
console.log(opacidad);
color.addEventListener("input", (e) => {
  let actualOpacity = opacidad.join("");
  //console.log(actualOpacity);
  let actualColor = hexToRgb(e.target.value);
  //console.log(hexToRgb(color.value));
  colorRgb = Object.values(actualColor).join(", ");
  let colores = `rgba(${colorRgb}, ${actualOpacity})`;
  box.style.background = colores; //`${e.target.value}`
  code.innerHTML = `  
  <div>
  background: rgba(${colorRgb}, ${opacidad});
  <br>
  backdrop-filter: blur(${difuminado}px);
  <br>
  backdrop-filter: contrast(${contraste}%);
  <br>
  backdrop-filter: saturate(${saturacion}%);
  </div>
  `;
  //console.log(colores);
});
opacity.addEventListener("input", (e) => {
  box.style.background = `rgba(${colorRgb}, ${0.01 * e.target.value})`;
  opacityOut.value = `${e.target.value}%`;
});

blur.addEventListener("input", (e) => {
  box.style.backdropFilter = `Blur(${e.target.value}px)`;
  box.style.webkitBackdropFilter = `Blur(${e.target.value}px)`;
  blurOut.value = `${e.target.value}px`;
  code.innerHTML = `  
  <div>
  background: rgba(${colorRgb}, ${opacidad});
  <br>
  backdrop-filter: blur(${difuminado}px);
  <br>
  backdrop-filter: contrast(${contraste}%);
  <br>
  backdrop-filter: saturate(${saturacion}%);
  </div>
  `;
});
size.addEventListener("input", (e) => {
  box.style.width = `${e.target.value}px`;
  box.style.height = `${e.target.value}px`;
  sizeOut.value = `${e.target.value}px`;
});
radius.addEventListener("input", (e) => {
  box.style.borderRadius = `${e.target.value}px`;
  radiusOut.value = `${e.target.value}px`;
});

contrasting.addEventListener("input", (e) => {
  contrast = e.target.value;
  box.style.cssText += `backdrop-filter: contrast(${contrast}%)`;
  contrastingOut.value = `${e.target.value}px`;
  code.innerHTML = `  
    <div>s
    background: rgba(${colorRgb}, ${opacidad});
    <br>
    backdrop-filter: blur(${difuminado}px);
    <br>
    backdrop-filter: contrast(${contraste}%);
    <br>
    backdrop-filter: saturate(${saturacion}%);
    </div>
    `;
});

saturation.addEventListener("input", (e) => {
  saturate = e.target.value;
  box.style.cssText += `backdrop-filter: saturate(${saturate}%)`;
  saturationOut.value = `${e.target.value}px`;
  code.innerHTML = `  
  <div>
  background: rgba(${colorRgb}, ${opacidad});
  <br>
  backdrop-filter: blur(${difuminado}px);
  <br>
  backdrop-filter: contrast(${contraste}%);
  <br>
  backdrop-filter: saturate(${saturacion}%);
  </div>
  `;
});
