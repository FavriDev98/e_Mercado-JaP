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

/*
const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
let currentCategoriesArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;

    function sortCategories(criteria, array){
        let result = [];
        if (criteria === ORDER_ASC_BY_NAME)
        {
            result = array.sort(function(a, b) {
                if ( a.cost < b.cost ){ return -1; }
                if ( a.cost > b.cost ){ return 1; }
                return 0;
            });
        }else if (criteria === ORDER_DESC_BY_NAME){
            result = array.sort(function(a, b) {
                if ( a.cost > b.cost ){ return -1; }
                if ( a.cost < b.cost ){ return 1; }
                return 0;
            });
        }else if (criteria === ORDER_BY_PROD_COUNT){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.productCount);
                let bCount = parseInt(b.productCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
        }
    
        return result;
    }

    function showCategoriesList(){

        let htmlContentToAppend = "";
        for(let i = 0; i < currentCategoriesArray.length; i++){
            let category = currentCategoriesArray[i];
    
            if (((minCount == undefined) || (minCount != undefined && parseInt(category.productCount) >= minCount)) &&
                ((maxCount == undefined) || (maxCount != undefined && parseInt(category.productCount) <= maxCount))){
    
                htmlContentToAppend += `
                <div onclick="setCatID(${category.id})" class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${category.imgSrc}" alt="${category.description}" class="img-thumbnail">
                        </div>
                        <div class="col">
                            <div class="d-flex w-100 justify-content-between">
                                <h4 class="mb-1">${category.name}</h4>
                                <small class="text-muted">${category.productCount} artículos</small>
                            </div>
                            <p class="mb-1">${category.description}</p>
                        </div>
                    </div>
                </div>
                `
            }
    
            document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
        }
    }
    */


/* buscador */ 

const searchInput = document.getElementById('searchInput');
const articleList = document.getElementById('data-container').getElementsByTagName('h2');

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