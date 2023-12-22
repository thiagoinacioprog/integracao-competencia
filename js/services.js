import {handleErrors } from "./exceptions.js";
var URL = 'http://localhost:3000/produtos';

export const getAllProducts = async () => {
    try {
        const response = await fetch(URL);

        // lidando com os erros na resposta
        handleErrors(response);

        // converter os dados para json
       return await response.json();

    
    } catch (error) {
        console.log('Error >>>', error);
    }
};

export const createProduct = async (produto) => {
    fetch(URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch((error) => console.log('Error: ', error));

};

export const deleteProduct = async (produto) => {
    fetch(URL+`/${produto.id}`, { method: 'DELETE'})
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch((error) => console.log('Error: ', error));
};

export const updateProduct = async (produto) => {
    fetch(URL+`/${produto.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(produto)
    })
    .then(response => response.json())
    .then(data => console.log('Success: ', data))
    .catch((error) => console.log('Error: ', error));
};