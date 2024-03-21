function onChangeSelect(value) {
    document.getElementById('select').addEventListener('change', function () {
        document.getElementById('selecionado').innerText = this.value;
    });
}

onChangeSelect()