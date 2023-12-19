document.getElementById('btn-salvar').addEventListener('click', () => {
    
    const descricao = document.getElementById('descricao').value;
    const und = document.getElementById('und').value;
    const ncm = document.getElementById('ncm').value;
    const preco = document.getElementById('preco').value;

    const dataToSend = {
        descricao: descricao,
        und: und,
        ncm: ncm,
        preco: preco

    };

    alert(JSON.stringify(dataToSend))

});