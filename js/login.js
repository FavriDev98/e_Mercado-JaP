/* boton inicio sesion */

localStorage.removeItem('usuario');
localStorage.removeItem('password');

function validarEmail(user) {
   
    var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(user);
  }

document.addEventListener('DOMContentLoaded', function() {
    let boton = document.getElementById('lginbttn');

    boton.addEventListener("click", function(){
        
        let user = document.getElementById('usuario').value;
        let password = document.getElementById('password').value;

        if (!validarEmail(user) || (user.length < 5 || password.length < 5)) {
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
            let data = {
                username: user,
                password: password,
              };
              fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  // Agrega cualquier otra cabecera necesaria aquí
                },
                body: JSON.stringify(data),
              })
                .then(response => response.json())
                .then(data => {
                  localStorage.setItem('token', data.token);
                  window.location.href = './index.html';
                })
                .catch(error => {
                  console.error('Error en la solicitud:', error);
                });
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

function validarEmail(user) {
   
    var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(user);
  }
