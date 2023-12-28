import { createProdutos, getAllProdutos } from "./services.js";

window.onload = ()=>{
    getProdutos();
}

const getProdutos = () => {
    const ul = document.getElementById('ul');
    
    getAllProdutos().then(response=>{
        response.forEach(produto=>{
            const li = document.createElement('li');
            li.innerHTML = `
                <p>${produto.descricao} - ${produto.und} - ${produto.ncm} - ${produto.preco} </p>
            `;

            ul.appendChild(li);

        })

    })
}

document.getElementById('btn-salvar').addEventListener('click', async () => {
    try {
        
        const descricao = document.getElementById('descricao').value;
        const und = document.getElementById('und').value;
        const ncm = document.getElementById('ncm').value;
        const preco = document.getElementById('preco').value;

        const produtos = {
            descricao,
            und,
            ncm,
            preco
        };

        
        await createProdutos(produtos);
    } catch (error) {
        console.error('Error: ', error);
    }
});
