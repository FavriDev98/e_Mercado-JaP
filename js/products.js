document.addEventListener("DOMContentLoaded", function(){
    if ((localStorage.getItem('usuario') != "" && localStorage.getItem('password') != "")) {
        window.location.href = './login.html';
    }    
})