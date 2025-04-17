'use strict'

 async function getContatos(){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function getContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function postContato(contato){
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos'
    const options = {
        method: 'POST', //precisa falar o metodo do fetch, pois o padrao é get
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato) //falando transforma isso em 
    }
    const response = await fetch(url, options) //faz um requisição com essa url, com essas opcoes
    return response.ok
}

async function putContato(id, contato){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos${id}`
    const options = {
        method: 'PUT', //precisa falar o metodo do fetch, pois o padrao é get
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato) //falando transforma isso em 
    }
    const response = await fetch(url, options) //faz um requisição com essa url, com essas opcoes
    return response.ok
}

async function deleteContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    return response.ok
}

const novoContato = {
    "nome": "Ana Macedo",
    "celular": "11 9 2222-4545",
    "foto": "../img/ana-macedo.png",
    "email": "anamacedo@gmail.com",
    "endereco": "Av. Rua Rua, 123",
    "cidade": "Barueri"
    }