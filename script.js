const usuario = document.getElementById('usuario')
const correo = document.getElementById('correo')
const clave = document.getElementById('clave')
const addpostform =document.getElementById('registro') 

const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});


const url = 'http://localhost:3000/usuarios'

registro.addEventListener('click',(e) => {
    e.preventDefault();
    fetch(url,{
        method: 'POST',
        headers:{
            headers: new Headers()
        },
        body: JSON.stringify({
            name : usuario.value,
            mail : correo.value,
            password: clave.value
        })
    })
    .then(res => res.json())
    .then(data => {
        const dataArr = [];
        dataArr.push(data);
    })
    .then(console.log('todo fino'))
})


