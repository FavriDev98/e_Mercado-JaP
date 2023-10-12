document.addEventListener("DOMContentLoaded", function(){
    if ((sessionStorage.getItem('usuario') != null || (sessionStorage.getItem('password') != null))) {
        return;
    } else { if ((localStorage.getItem('usuario') != null || (localStorage.getItem('password') != null))){
        return;
        }
    }
    window.location.href = './login.html';
})

document.addEventListener("DOMContentLoaded", function(){
    let userShow = document.getElementById('user-name');
    let userData = localStorage.getItem('usuario');
    let userSession = sessionStorage.getItem('usuario');
    if (userData != null) {
        userShow.innerHTML = `
            <p>${userData}<p>
    `
    } else {
        userShow.innerHTML = `
            <p>${userSession}<p>
    `    
    }
})



const urlUserCart = 'https://japceibal.github.io/emercado-api/user_cart/25801.json';

let currency;

fetch(urlUserCart)
.then(response => response.json())
.then(data => {

    currency = data.articles[0].currency;

    document.getElementById('name-cart').innerText = data.articles[0].name
    document.getElementById('cost-cart').innerText = data.articles[0].unitCost
    document.getElementById('cant-cart').value = data.articles[0].count
    document.getElementById('img-cart').src = data.articles[0].image
    document.getElementById('subtotal-cart').innerText = currency + " " + data.articles[0].unitCost
});

function sumaParcial(){
let arraySumItem = document.getElementsByClassName('sum-item').value;

let arrayCountBox = document.getElementsByClassName('count-box');

let arrayCostData = document.getElementsByClassName('data-cost')
arraySumItem.forEach(element =>{
    arrayCountBox.forEach(item => {
    let i = element.indexSuma

    if(element.indexSuma == item.index) {
        element.value = arrayCountBox[i] * arrayCostData[i]
    } 

    
    
    })
    




 /*   if(element.indexSuma == 0) {

        element.indexSuma = 0;
    }
    else {

        let cantBox = document.getElementById('cant-cart').value;

        let valor = parseInt(document.getElementById('cost-cart').innerText)

        let boxValue = parseInt(document.getElementById('subtotal-cart').innerText);
        boxValue = valor * cantBox;
        document.getElementById('subtotal-cart').innerText = currency + " " + boxValue;

    };
*/
});
};
let countBox = document.getElementById('cant-cart');

    countBox.addEventListener("change", sumaParcial());

let addProduct = localStorage.getItem('carritoProducts');
let arrAddProduct = JSON.parse(addProduct)
let i = 0
arrAddProduct.forEach(item => {
const urlCarrito = 'https://japceibal.github.io/emercado-api/products/' + item + '.json';

    fetch(urlCarrito)
    .then(response => response.json())
    .then(data => {
        let div = document.createElement('div');
        div.classList.add('row');
            div.classList.add('list-item');
            div.setAttribute('data-index', i);

        div.innerHTML = `
            <img src="${data.images[0]}" class="col-md-2"> 
            <div class="col-md-2"><p>${data.name}</p> </div>
            <div class="col-md-2 data-cost" indexCost='${i}'><p>${data.cost}</p> </div>
            <div  class="col-md-2"> <input index='${i}' onchange="sumaParcial()" class="form-control form-control-square sum-item" type="number"></div>
            <div class="col-md-2 count-box" indexSuma='${i}'> </div>
            <hr class="mt-3">
    `
        document.getElementById('grid-cart').appendChild(div)
        i++
    });
})
/* 

let addProduct = localStorage.getItem('itemID');
const urlCarrito = 'https://japceibal.github.io/emercado-api/products/' + addProduct + '.json';

fetch(urlCarrito)
.then(response => response.json())
.then(data => {
        let product = data; 
        const carrito = document.getElementById('newProduct')

        carrito.innerHTML = `
            <h1>${product.name}</h1>
        `
    })

    let productoAgregado = localStorage.getItem('item_localS');
const urlProduct = 'https://japceibal.github.io/emercado-api/products/' + item_localS + '.json';

fetch(urlProduct)
.then(response => response.json())
.then(data => {
        let product = data; 
        const carrito = document.getElementById('newProduct')
        const agregado = document.createElement('div');

        agregado.innerHTML = `
            <h1>${product.name}</h1>
        `
        carrito.appendChild(agregado);
    })

    */
