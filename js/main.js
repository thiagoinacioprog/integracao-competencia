import {getAllProducts, createProduct, updateProduct, deleteProduct} from "./services.js";

window.onload = () => {
    loadProducts();
  };
  
  const loadProducts = () => {
    const dataContainer = document.getElementById("data-container");
    getAllProducts().then((resp) => {
      resp.forEach((produto) => {
        const productsElement = document.createElement("div");
        productsElement.innerHTML = `
       
        <div class="elemento">
        <p class="descricao">${produto.descricao}</p> 
    
        <hr>
       
      <p class="und">${produto.und}</p> 
      
      <hr>
    
      <p class="ncm">${produto.ncm}</p>

      <hr>

      <p class="preco">${produto.preco}</p>
      
        </div>
        `;

        dataContainer.appendChild(productsElement);
    });
  });
};

document.getElementById('btn-salvar').addEventListener('click', () => {
    const produto = {
        descricao: descricao,
        und: und,
        ncm: ncm,
        preco: preco,
    };
      


    const dataToSend = {
    descricao: descricao,
    und: und,
    ncm: ncm,
    preco: preco

    };

    createProduct(produto);

});

    // alert(JSON.stringify(dataToSend))

    document.getElementById("btn-atualizar").addEventListener("click", () => {
        const produto = {
          descricao: "ALFAJOR RECHEADO",
          und: "UN",
          ncm: "21069090",
          preco: "25",
          id: 3,
        };

        updateProduct(produto);

    });

    document.getElementById("btn-excluir").addEventListener("click", () => {
        const produto = {
            descricao: "ALFAJOR RECHEADO",
            und: "UN",
            ncm: "21069090",
            preco: "25",
            id: 3,
        };
        
        deleteProduct(produto)

});