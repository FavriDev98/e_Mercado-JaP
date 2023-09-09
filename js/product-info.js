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


let item_localS = localStorage.getItem('itemID');

const urlProduct = 'https://japceibal.github.io/emercado-api/products/' + item_localS + '.json';

fetch(urlProduct)
    .then(response => response.json())
    .then(data => {
        let product = data;
        const dataContainer = document.getElementById('informacion-shw')

            const div = document.createElement('div');
            div.classList.add('info-co')

            div.innerHTML = `
                <h1>${product.name}</h1>
                <hr>
                <h2 class="product-title" > </h2>
                <p>${product.currency} ${product.cost}</p>
                <div class="description-container" >
                <p>${product.description}</p>
                <div class='showimg';>
                <img src="${product.images}">
                </div>
                </div> `
            ;

            dataContainer.appendChild(div);

});

const urlComment = 'https://japceibal.github.io/emercado-api/products_comments/' + item_localS + '.json'

fetch(urlComment)
.then(response => response.json())
.then(data => {
    const arrayProductsCom = data;
    const dataContainer = document.getElementById('comentarios');

    arrayProductsCom.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('data-com')
        const value = item.score;

        div.innerHTML= `
            <div class="coment-container">
                <div class="coment"> 
                    <p>${item.user}</p>
                    <p>${item.dateTime}</p>`
                    const starCom = div.querySelector('.coment')
                    const comm = div.querySelector('.coment-container')

                    for (i = 0; i < value; i ++) {
                        starCom.innerHTML +=`<p><span class="fa fa-star checked" ></span></p>`;
                    }
                    let dif = 5 - value;
                    for( i = 0; i < dif; i++) {
                        starCom.innerHTML +=`<p><span class="fa fa-star"></span></p>`;
                    }
                    
        comm.innerHTML+= `
            <p>${item.description}</p>
        `;

        dataContainer.appendChild(div);

    });
})

.catch(error => {
    console.error('Error al obtener los datos:', error);
});
/* counting stars ♪♫ */
const star1 = document.getElementById('s1');
const star2 = document.getElementById('s2');
const star3 = document.getElementById('s3');
const star4 = document.getElementById('s4');
const star5 = document.getElementById('s5');
/* 1 estrella re malo le producto wachin */
star1.addEventListener('mouseenter', function() {
        star1.style.color='orange';
})

star1.addEventListener('mouseleave', function() {
    star1.style.color= '';
})

/* 2, malo pero puede mejorar */

star2.addEventListener('mouseenter', function() {
    star1.style.color='orange';
    star2.style.color='orange';
})

star2.addEventListener('mouseleave', function() {
    star1.style.color= '';
    star2.style.color= '';
})

/* y 3... ni fu ni fa */

star3.addEventListener('mouseenter', function() {
    star1.style.color='orange';
    star2.style.color='orange';
    star3.style.color='orange';
})

star3.addEventListener('mouseleave', function() {
    star1.style.color= '';
    star2.style.color= '';
    star3.style.color= '';
})

/* 4 es casi perfecto pa! */

star4.addEventListener('mouseenter', function() {
    star1.style.color='orange';
    star2.style.color='orange';
    star3.style.color='orange';
    star4.style.color='orange';
})

star4.addEventListener('mouseleave', function() {
    star1.style.color= '';
    star2.style.color= '';
    star3.style.color= '';
    star4.style.color= '';
})

/* 5, eres perfecto como eres Coraje */

star5.addEventListener('mouseenter', function() {
    star1.style.color='orange';
    star2.style.color='orange';
    star3.style.color='orange';
    star4.style.color='orange';
    star5.style.color='orange';
})

star5.addEventListener('mouseleave', function() {
    star1.style.color= '';
    star2.style.color= '';
    star3.style.color= '';
    star4.style.color= '';
    star5.style.color= '';
})

/* dejar marcadas las estrellas */

/* 1 */

star1.addEventListener('click', function() {
    if (star1.classList.contains("checked")) {
        star1.classList.remove("checked");
        star2.classList.remove("checked");
        star3.classList.remove("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    } else {
        star1.classList.add("checked");
    }
    
})

/* 2 */

star2.addEventListener('click', function() {
    if (star2.classList.contains("checked")) {
        star1.classList.remove("checked");
        star2.classList.remove("checked");
        star3.classList.remove("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    } else {
        star1.classList.add("checked");
        star2.classList.add("checked");
    }
    
})

/* 3 */

star3.addEventListener('click', function() {
    if (star2.classList.contains("checked")) {
        star1.classList.remove("checked");
        star2.classList.remove("checked");
        star3.classList.remove("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    } else {
        star1.classList.add("checked");
        star2.classList.add("checked");
        star3.classList.add("checked");
    }
    
})

/* 4 */

star4.addEventListener('click', function() {
    if (star2.classList.contains("checked")) {
        star1.classList.remove("checked");
        star2.classList.remove("checked");
        star3.classList.remove("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    } else {
        star1.classList.add("checked");
        star2.classList.add("checked");
        star3.classList.add("checked");
        star4.classList.add("checked");
    }
    
})

/* 5 */

star5.addEventListener('click', function() {
    if (star2.classList.contains("checked")) {
        star1.classList.remove("checked");
        star2.classList.remove("checked");
        star3.classList.remove("checked");
        star4.classList.remove("checked");
        star5.classList.remove("checked");
    } else {
        star1.classList.add("checked");
        star2.classList.add("checked");
        star3.classList.add("checked");
        star4.classList.add("checked");
        star5.classList.add("checked");
    }
    
})

/* conseguir hora actual */

var fechaHoraActual = new Date();
var hora = fechaHoraActual.getHours();
var minutos = fechaHoraActual.getMinutes();
var segundos = fechaHoraActual.getSeconds();

if (hora < 10) {
    hora = "0" + hora;
}

if (minutos < 10) {
    minutos = "0" + minutos;
}

if (segundos < 10) {
    segundos = "0" + segundos;
}

var horaActual = hora + ":" + minutos + ":" + segundos;

/* conseguir fecha actual */


var fechaHoraActual = new Date();
var año = fechaHoraActual.getFullYear();
var mes = fechaHoraActual.getMonth() + 1;
var dia = fechaHoraActual.getDate();

if (mes < 10) {
    mes = "0" + mes;
}

if (dia < 10) {
    dia = "0" + dia;
}

var fechaActual = año + "-" + mes + "-" + dia;

/* "Posteo" en comentarios */

const btnPost = document.getElementById('boton_enviar');

btnPost.addEventListener('click', function() {

    const containerStar = document.getElementsByClassName('cont-stars')[0];
    let starsToScore = containerStar.getElementsByClassName('checked').length;
    let commToPost = document.getElementById('comentario').value;
    const dataContainer = document.getElementById('comentarios');
    const div = document.createElement('div')
    div.classList.add('data-com')
    let user 
    
    if (localStorage.getItem('usuario') === null) {
        user = sessionStorage.getItem('usuario');
    }else {
        user = localStorage.getItem('usuario');
    }
        

    div.innerHTML= `
            <div class="coment-container">
                <div class="coment"> 
                    <p>${user}</p>
                    <p>${fechaActual} ${horaActual}</p>`
                    const starCom = div.querySelector('.coment')
                    const comm = div.querySelector('.coment-container')

                    for (i = 0; i < starsToScore; i ++) {
                        starCom.innerHTML +=`<p><span class="fa fa-star checked" ></span></p>`;
                    }
                    let dif = 5 - starsToScore;
                    for( i = 0; i < dif; i++) {
                        starCom.innerHTML +=`<p><span class="fa fa-star"></span></p>`;
                    }
                    
        comm.innerHTML+= `
            <p>${commToPost}</p>
        `;
    
    dataContainer.appendChild(div);
})
