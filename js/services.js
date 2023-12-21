import {handleErrors } from "./exception.js";
var URL = 'http://localhost:3000/produtos';



export const createProduto = async (produto) => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(response => response.json())
    .then(data => console.log('success: ', data))
    .catch((erro) => console.log('Error: ', error));

};