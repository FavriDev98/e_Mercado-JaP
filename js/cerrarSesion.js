let logOut = document.getElementById('log-out');

logOut.addEventListener("click", function() {

    document.getElementById('alert').classList.remove('hide');
    document.getElementById('drkBk').classList.remove('hide');

});

/* boton "x" para cerrar alerta */

document.addEventListener('DOMContentLoaded', function(){
    let xBtn = document.getElementById('x-btn');
    xBtn.addEventListener("click", function() {
        document.getElementById('alert').classList.add('hide');
        document.getElementById('drkBk').classList.add('hide');
    })
})

/*boton confirmar */

let confirmBtn = document.getElementById('logOutConf');

confirmBtn.addEventListener("click", function() {

    localStorage.removeItem('usuario');
    localStorage.removeItem('password');
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('password');
    window.location.href = './login.html';

});