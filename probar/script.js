document.addEventListener('DOMContentLoaded', () => {
    initializeDimensionClickEvents();
});

function initializeDimensionClickEvents() {
    document.querySelectorAll('.dimension-paquete').forEach(dimension => {
        dimension.addEventListener('click', () => {
            document.querySelectorAll('.dimension-paquete').forEach(opt => {
                opt.classList.remove('seleccionado');
                opt.nextElementSibling.style.opacity = '1';
            });

            dimension.classList.add('seleccionado');
            dimension.nextElementSibling.style.opacity = '0';

            const valorSeleccionado = dimension.getAttribute('data-value');
            document.getElementById('dimension-seleccionada').value = valorSeleccionado;
        });
    });
}


function selectOption(selectedLi) {
    const options = document.querySelectorAll('.lista-precios-grid');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    selectedLi.classList.add('selected');

    const selectedText = selectedLi.querySelector('.opcion-precios').innerText;
    document.getElementById('selected_option').value = selectedText;
}