let boton = document.querySelector('#btn')

boton.addEventListener('click', (event)=>{
    event.preventDefault
    location.href = '/auth/login'
})