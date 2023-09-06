document.addEventListener("DOMContentLoaded", function(){
    if ((sessionStorage.getItem('usuario') != null || (sessionStorage.getItem('password') != null))) {
        return;
    } else { if ((localStorage.getItem('usuario') != null || (localStorage.getItem('password') != null))){
        return;
        }
    }
    window.location.href = './login.html';
})


let item_localS = localStorage.getItem('itemID');

const urlProduct = 'https://japceibal.github.io/emercado-api/products/' + item_localS + '.json';

fetch(urlProduct)
    .then(response => response.json())
    .then(data => {
        console.log(data)
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
    console.log(data)
    const arrayProductsCom = data;
    const dataContainer = document.getElementById('comentarios');

    arrayProductsCom.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('data-com')

        div.innerHTML= `
            <div class="coment-container">
                <div class="coment"> 
                    <p>${item.user}</p>
                    <p>${item.dateTime}</p>
                    <p>${item.score}</p>
                </div> 
                <p>${item.description}</p>
            </div>
            `;

        dataContainer.appendChild(div);

    });
})

.catch(error => {
    console.error('Error al obtener los datos:', error);
});