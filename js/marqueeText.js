const text = document.getElementById('marquee__text');

slide(text);

function slide(element) {
  // offsetWidth devuelve el ancho del layout del elemento y es una propiedad de solo lectura.
  const elementWidth = element.offsetWidth;
  const parentWidth = element.parentElement.offsetWidth;
  let flag = 0;
  setInterval(() => {
    element.style.marginLeft = --flag + "px";
    if (elementWidth === -flag) {
      flag = parentWidth;
    }
  }, 10);
}
