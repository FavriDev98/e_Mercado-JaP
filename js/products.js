document.addEventListener("DOMContentLoaded", function(){
    if ((sessionStorage.getItem('usuario') != null || (sessionStorage.getItem('password') != null))) {
        return;
    } else { if ((localStorage.getItem('usuario') != null || (localStorage.getItem('password') != null))){
        return;
        }
    }
    window.location.href = './login.html';
})

const url = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

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
                <h2>${item.name}</h2>
                <p>${item.description}</p>
            `;

            dataContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });