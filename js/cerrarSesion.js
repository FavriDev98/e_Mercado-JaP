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

    localStorage.clear();
    sessionStorage.clear();
    window.location.href = './login.html';

});