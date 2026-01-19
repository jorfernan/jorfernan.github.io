
// 1. Guardamos en variables los dos elementos que necesitamos
const slider = document.getElementById('price-range');
const indicador = document.getElementById('valor-seleccionado');

// 2. Escuchamos el evento 'input' (se activa al mover el slider)
slider.addEventListener('input', function () {
    // 3. Actualizamos el texto del span con el valor actual del slider
    indicador.textContent = slider.value;
});
