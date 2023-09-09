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

let cat_localS = localStorage.getItem('catID');

function setItemID(id) {
    localStorage.setItem("itemID", id);
    window.location = "product-info.html"
}

const url = 'https://japceibal.github.io/emercado-api/cats_products/' + cat_localS + '.json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        let arrayProducts = data.products;
        const dataContainer = document.getElementById('data-container');

        arrayProducts.sort(function(a,b) {
            return a.id - b.id;
        })
        
        arrayProducts.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('data-item');
            let id = item.id; 
            
            div.innerHTML = `
                <div style="background-image: url(${item.image}); background-size: cover; background-position: center; width: 100%; height: 150px;">
                </div>
                <div class="title">
                    <h2 class="name" >${item.name}</h2> <h2 class="price">${item.cost} ${item.currency}</h2>
                </div>
                <p class="description">${item.description}</p>
            `;
            
            div.addEventListener('click', function() {
                setItemID(id);
            });

            dataContainer.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });

/* buscador */ 

const searchInput = document.getElementById('searchInput');
const articleList = document.getElementById('data-container').getElementsByClassName('data-item');

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
            
     for (const article of articleList) {
        const title = article.querySelector('h2').textContent.toLowerCase();
        const description = article.querySelector('p').textContent.toLowerCase();
                
        if (title.includes(searchText) || description.includes(searchText)) {
             article.style.display = 'grid';
        } else {
             article.style.display = 'none';
        }
    }
});

/* filtro */ 
let costMin = document.getElementById('rangeFilterCountMin');
let costMax = document.getElementById('rangeFilterCountMax');
const filtBtn = document.getElementById('rangeFilterCount');

filtBtn.addEventListener('click', () => {
    if (costMax.value == "" || costMin.value == "") {
        document.getElementById('alert').classList.remove('hide');
    } else {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const arrayProducts = data.products;
    
            for (let i = 0; i < arrayProducts.length; i++) {
                let cost = arrayProducts[i].cost;
                let numericCostMin = parseFloat(costMin.value);
                let numericCostMax = parseFloat(costMax.value);

                if(numericCostMax > numericCostMin) {
                    if (cost >= numericCostMin && cost <= numericCostMax) {
                        articleList[i].style.display = 'grid';
                    } else {
                        articleList[i].style.display = 'none';
                    }
                } else {
                    document.getElementById('alert').classList.remove('hide');
                }
            }
        });
    }
});

/* orden precio */
/*asc*/
let BtnSortAsc = document.getElementById('sortAsc');

BtnSortAsc.addEventListener('click', function() {
    document.getElementById('data-container').innerHTML=``;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let arrayProducts = data.products;
            arrayProducts.sort(function(a,b) {
                return a.cost - b.cost;
            })
            arrayProducts.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('data-item'); 
                
                div.innerHTML = `
                    <img src="${item.image}">
                    <h2 class="product-title" >${item.name} <p>${item.cost} ${item.currency}</p></h2>
                    <div class="description-container" >
                    <p>${item.description}</p>
                    </div>
                `;

                document.getElementById('data-container').appendChild(div);
            });
        })
})

/*desc*/
let BtnSortDesc = document.getElementById('sortDesc');

BtnSortDesc.addEventListener('click', function() {
    document.getElementById('data-container').innerHTML=``;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let arrayProducts = data.products;
            arrayProducts.sort(function(a,b) {
                return b.cost - a.cost;
            })
            arrayProducts.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('data-item'); 
                
                div.innerHTML = `
                    <img src="${item.image}">
                    <h2 class="product-title" >${item.name} <p>${item.cost} ${item.currency}</p></h2>
                    <div class="description-container" >
                    <p>${item.description}</p>
                    </div>
                `;

                document.getElementById('data-container').appendChild(div);
            });
        })
})

/* rel */

let BtnSortCount = document.getElementById('sortByCount');

BtnSortCount.addEventListener('click', function() {
    document.getElementById('data-container').innerHTML=``;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let arrayProducts = data.products;
            arrayProducts.sort(function(a,b) {
                return b.soldCount - a.soldCount;
            })
            arrayProducts.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('data-item'); 
                
                div.innerHTML = `
                    <img src="${item.image}">
                    <h2 class="product-title" >${item.name} <p>${item.cost} ${item.currency}</p></h2>
                    <div class="description-container" >
                    <p>${item.description}</p>
                    </div>
                `;

                document.getElementById('data-container').appendChild(div);
            });
        })
})


/* limpiar filtro */

const clear = document.getElementById('clearRangeFilter');

clear.addEventListener('click', function() {
    document.getElementById('data-container').innerHTML=``;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let arrayProducts = data.products;
            arrayProducts.sort(function(a,b) {
                return a.id - b.id;
            })
            arrayProducts.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('data-item'); 
                
                div.innerHTML = `
                    <img src="${item.image}">
                    <h2 class="product-title" >${item.name} <p>${item.cost} ${item.currency}</p></h2>
                    <div class="description-container" >
                    <p>${item.description}</p>
                    </div>
                `;

                document.getElementById('data-container').appendChild(div);
            });
        })
    costMax.value = "";
    costMin.value = "";
})

/* boton "x" para cerrar alerta */

document.addEventListener('DOMContentLoaded', function(){
    let xBtn = document.getElementById('x-btn');
    xBtn.addEventListener("click", function() {
        document.getElementById('alert').classList.add('hide');
    })
})
