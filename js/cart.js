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

const urlUserCart = 'https://japceibal.github.io/user_cart/25801.json';
document.addEventListener("DOMContentLoaded", function(){

    let countBox = document.getElementById(/*id caja de cantidades*/);

    countBox.value = urlUserCart.articles.count;
})

let countBox = document.getElementById(/*id caja de cantidades*/);
countBox.addEventListener("change", function(){

    let boxValue = document.getElementById(/*id de la caja de balor total*/);
    boxValue.value = urlUserCart.articles.unitCost * countBox.value;

})