/* eslint-disable no-param-reassign */
const text = document.getElementById('marquee__text');

function slide(element) {
  // offsetWidth devuelve el ancho del layout del elemento y es una propiedad de solo lectura.
  const elementWidth = element.offsetWidth;
  const parentWidth = element.parentElement.offsetWidth;
  let i = 0;
  setInterval(() => {
    element.style.marginLeft = `${--i}px`;
    if (elementWidth === -i) {
      i = parentWidth;
    }
  }, 10);
}

slide(text);
