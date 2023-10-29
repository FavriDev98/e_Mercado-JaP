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
let valorAutoDado;
let totalFinal = document.getElementById('total');
let subtotal = document.getElementById('subtotal');
let sumaTotal = 0;
let tipoEnvio = 0.15;
let valorEnvio;
let costoDeEnvio = document.getElementById('costo-de-envio');

fetch(urlUserCart)
.then(response => response.json())
.then(data => {

    currency = data.articles[0].currency;

    document.getElementById('name-cart').innerText = data.articles[0].name
    document.getElementById('cost-cart').innerText = data.articles[0].unitCost
    document.getElementById('cant-cart').value = data.articles[0].count
    document.getElementById('img-cart').src = data.articles[0].image
    document.getElementById('subtotal-cart').innerText = currency + " " + data.articles[0].unitCost
    
    document.getElementById('name-cart').innerText = data.articles[0].name;
    document.getElementById('cost-cart').innerText = data.articles[0].unitCost;
    document.getElementById('cant-cart').value = data.articles[0].count;
    document.getElementById('img-cart').src = data.articles[0].image;
    document.getElementById('subtotal-cart').innerText = currency + " " + data.articles[0].unitCost;
    totalFinal.innerText = currency + " " + data.articles[0].unitCost;
    subtotal.innerText = currency + " " + data.articles[0].unitCost;
    
});

function sumaParcial(){
    // array de los valores de la cajitas
let arraySumItem = document.getElementsByClassName('sum-item');
let arraySumItemValue = [];

    for(let i = 0; i < arraySumItem.length; i++){
        arraySumItemValue[i] = arraySumItem[i].value
    };


let arrayPingo = document.getElementsByClassName('pingo');

// array valores subtotal (valor total)
let arrayCountBox = document.getElementsByClassName('count-box');
// array valor unidad product
let arrayCostData = document.getElementsByClassName('data-cost');
let arrayCostDataValue = [];

    for(let i = 0; i < arrayCostData.length; i++){
        arrayCostDataValue[i] = arrayCostData[i].innerText
    };

// indexSuma = valorsubtotal
arraySumItemValue.forEach(element =>{
    for(let i = 0; i < arrayCountBox.length; i++){
        if(element.indexSuma == arrayCountBox[i].index) {
            arrayPingo[i].innerText = arraySumItemValue[i] * arrayCostDataValue[i];
        }
    };
});
};

let countBox = document.getElementById('cant-cart');

    countBox.addEventListener("change", sumaParcial());

let arrAddProduct = JSON.parse(localStorage.getItem('carritoProducts'));
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
            <div class="col-md-2 count-box" style="display: flex;" indexSuma='${i}'>${data.currency}<div class="pingo" style="padding-left: 0.4rem;"> </div> </div>
            <div class="col-md-2">
                    <i type=button style=color:red class="fa-solid fa-trash-can"></i>
            </div>
            <hr class="mt-3">
        `

        //Eliminar producto del carrito
        const deleteProduct = div.querySelector('.fa-trash-can')

        deleteProduct.addEventListener('click', () => {
            // Indice del producto a eliminar
            let indexToDelete = div.getAttribute('data-index');
        
            // Elimina el producto del array arrAddProduct
            arrAddProduct.splice(indexToDelete, 1);
            localStorage.setItem('carritoProducts', JSON.stringify(arrAddProduct));
        
            // Elimina el elemento del carrito del DOM
            div.remove();
        });

        document.getElementById('grid-cart').appendChild(div);
        i++;
        
    });
});


// habilitar o deshabilitar campos de entrada

let tarjeta = document.getElementById("tarjeta");
let transferencia = document.getElementById("transferencia");
let numeroTarjeta = document.getElementById("numeroTarjeta");
let codigoSeguridad = document.getElementById("codigoSeguridad");
let vencimientoTarjeta = document.getElementById("vencimientoTarjeta");
let cuentaBancaria = document.getElementById("cuentaBancaria");


tarjeta.addEventListener("change", function() {
    if (tarjeta.checked) {
      cuentaBancaria.classList.add('is-disabled');
      cuentaBancaria.readOnly = true;
      numeroTarjeta.classList.remove('is-disabled');
      codigoSeguridad.classList.remove('is-disabled');
      vencimientoTarjeta.classList.remove('is-disabled');
      numeroTarjeta.readOnly = false;
      codigoSeguridad.readOnly = false;
      vencimientoTarjeta.readOnly = false;
    }
  });
  
  transferencia.addEventListener("change", function() {
    if (transferencia.checked) {
      numeroTarjeta.classList.add('is-disabled');
      codigoSeguridad.classList.add('is-disabled');
      vencimientoTarjeta.classList.add('is-disabled');
      numeroTarjeta.readOnly = true;
      codigoSeguridad.readOnly = true;
      vencimientoTarjeta.readOnly = true;
      cuentaBancaria.classList.remove('is-disabled');
      cuentaBancaria.readOnly = false;
    }
  });

  // Funciones para calcular el valor total


let valorTotalFinal = 0;
let divTodito = document.getElementById('todito');

//Valor Subtotal en dolares

divTodito.addEventListener("change", function() {


//Valor Subtotal en dolares

    sumaTotal = 0;
    let subtotalesCrudos = document.getElementsByClassName('count-box');
    let ValorAutoEntregado = document.getElementById('subtotal-cart').innerHTML.match(/\d+/g);

    let subtotalesValores = [];
    subtotalesValores.push(parseInt(ValorAutoEntregado[0]), 10);

    for (let i = 0; i < subtotalesCrudos.length; i++) {

        //Pasar valor a dolares
        if (subtotalesCrudos[i].innerText.includes("UYU")) {

            let valorDolar = (subtotalesCrudos[i].innerText.match(/\d+/g))[0];
            valorDolar = Math.round(valorDolar / 41);
            subtotalesValores[i+1] = valorDolar;

        } else {
            subtotalesValores[i+1] = parseInt((subtotalesCrudos[i].innerText.match(/\d+/g))[0],10);
        }

    }

    subtotalesValores.forEach(valor => {
        sumaTotal += valor;
    });
    console.log(sumaTotal)
    subtotal.innerText = 'USD ' + ( sumaTotal);

    // Costo Total

    valorEnvio = Math.round(parseInt(subtotal.innerText.match(/\d+/g),10) * tipoEnvio);

    let valorSinEnvio = parseInt(subtotal.innerText.match(/\d+/g),10);

    console.log(valorEnvio);
    console.log(valorSinEnvio);

    valorTotalFinal = valorSinEnvio + valorEnvio;

    totalFinal.innerText = 'USD ' + valorTotalFinal;

    let opcionCinco = document.getElementById('exampleRadios3');
    let opcionSiete = document.getElementById('exampleRadios2');
    let opcionQuince = document.getElementById('exampleRadios1');

    
    if (opcionQuince.checked) {
        tipoEnvio = 0.15;
        valorEnvio = Math.round(parseInt(subtotal.innerText.match(/\d+/g),10) * tipoEnvio);
        costoDeEnvio.innerHTML = 'USD ' + valorEnvio;
    } else if (opcionSiete.checked) {
        tipoEnvio = 0.07;
        valorEnvio = Math.round(parseInt(subtotal.innerText.match(/\d+/g),10) * tipoEnvio);
        costoDeEnvio.innerHTML = 'USD ' + valorEnvio;
    } else if (opcionCinco.checked) {
        tipoEnvio = 0.05;
        valorEnvio = Math.round(parseInt(subtotal.innerText.match(/\d+/g),10) * tipoEnvio);
        costoDeEnvio.innerHTML = 'USD ' + valorEnvio;
    }
})