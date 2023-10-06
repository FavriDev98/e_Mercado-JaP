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

    let countBox = document.getElementById('cant-cart');

    countBox.addEventListener("change", function(){

    if(countBox.value < 0) {

        countBox.value = 0;
    }
    else {

        let cantBox = document.getElementById('cant-cart').value;

        let valor = parseInt(document.getElementById('cost-cart').innerText)

        let boxValue = parseInt(document.getElementById('subtotal-cart').innerText);
        boxValue = valor * cantBox;
        document.getElementById('subtotal-cart').innerText = currency + " " + boxValue;

    };

    
});






