document.addEventListener("DOMContentLoaded", function(){
    if ((localStorage.getItem('usuario') = null && (localStorage.getItem('password') = null))) {
        window.location.href = './login.html';
    }    
})