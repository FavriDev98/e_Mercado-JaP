/* boton inicio sesion */

localStorage.removeItem('usuario');
localStorage.removeItem('password');

document.addEventListener('DOMContentLoaded', function() {
    let boton = document.getElementById('lginbttn');

    boton.addEventListener("click", function(){
        
        let user = document.getElementById('usuario').value;
        let password = document.getElementById('password').value;

        if (user.length < 5 || password.length < 5) {
            document.getElementById('alert').classList.remove('hide');
            document.getElementById('drkBk').classList.remove('hide');
        } else {
            if (document.getElementById('check-recordar').checked) {
                localStorage.setItem('usuario', user);
                localStorage.setItem('password', password);
            } else {
                sessionStorage.setItem('usuario', user);
                sessionStorage.setItem('password', password);
            }
            window.location.href = './index.html';
        }
    });
});

/* boton "x" para cerrar alerta */

document.addEventListener('DOMContentLoaded', function(){
    let xBtn = document.getElementById('x-btn');
    xBtn.addEventListener("click", function() {
        document.getElementById('alert').classList.add('hide');
        document.getElementById('drkBk').classList.add('hide');
    })
})

