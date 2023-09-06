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

const url = 'https://japceibal.github.io/emercado-api/products_comments/' + item_localS + '.json'

fetch(url)
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
