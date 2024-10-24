function selectOption(selectedLi) {
    const options = document.querySelectorAll('.lista-precios-grid');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    selectedLi.classList.add('selected');

    const selectedText = selectedLi.querySelector('.opcion-precios').innerText;
    document.getElementById('selected_option').value = selectedText;
}