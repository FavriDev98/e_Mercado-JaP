document.addEventListener("DOMContentLoaded", function(){
    if ((sessionStorage.getItem('usuario') != null || (sessionStorage.getItem('password') != null))) {
        return;
    } else { if ((localStorage.getItem('usuario') != null || (localStorage.getItem('password') != null))){
        return;
        }
    }
    window.location.href = './login.html';
})


let product_localS = localStorage.getItem('prodID');

const url = 'https://japceibal.github.io/emercado-api/products_comments/' + product_localS + '.json'

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
    const arrayProductsCom = data.products_comments;
    const dataContainer = document.getElementById('');

    arrayProductsCom.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('data-com')

        div.innerHTML= `
            <p>${item.user}</p>
            <p>${item.dataTime}</p>
            <p>${item.score}</p> `;

        dataContainer.appendChild(div);

    });
})

.catch(error => {
    console.error('Error al obtener los datos:', error);
});