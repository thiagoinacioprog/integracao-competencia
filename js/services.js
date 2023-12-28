import { handleErrors} from './exceptions.js'
// services.js

const URL = 'http://localhost:3000/produtos';

export const getAllProdutos = async () =>{
    try {
        const response =  await fetch(URL);
        handleErrors(response);
        return response.json();
    } catch (error) {
        console.log('Error', error)
    }
}

export const createProdutos = async (produtos) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produtos),
        });

        

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('produtos: ', data);
    } catch (error) {
        console.error('Error: ', error);
    }
    
};

