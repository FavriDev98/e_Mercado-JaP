document.addEventListener("DOMContentLoaded", function(){
    if ((sessionStorage.getItem('usuario') != null || (sessionStorage.getItem('password') != null))) {
        return;
    } else { if ((localStorage.getItem('usuario') != null || (localStorage.getItem('password') != null))){
        return;
        }
    }
    window.location.href = './login.html';
})

let cat_localS = localStorage.getItem('catID');

const url = 'https://japceibal.github.io/emercado-api/cats_products/' + cat_localS + '.json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const arrayProducts = data.products;
        const dataContainer = document.getElementById('data-container');
        
        arrayProducts.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('data-item'); 
            
            div.innerHTML = `
                <img src="${item.image}">
                <h2 class="product-title" >${item.name} - ${item.cost} ${item.currency}</h2>
                <div class="description-container" >
                <p>${item.description}</p>
                </div>
            `;

            dataContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });