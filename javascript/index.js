// import Swal from 'sweetalert2'

const button = document.getElementById('buttonSubmit');
const email = document.getElementById('email');
const heroInput = document.getElementById('contenedorInput');
const icon = document.getElementById('confirmation_icon');
const message = document.getElementById('message__error');

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

button.addEventListener('click',()=>{
    email.classList = ['input_email'];
    icon.classList = ['input__icon__good'];
    message.classList = ['message__error'];
    if((email.value).match(pattern)){
        // email.classList.add("correct");
        icon.classList.add('delete');
        message.classList.add('delete');
        email.classList.remove('bad_input');
        Swal.fire({
            title: 'Succes',
            text: 'Your email was registered',
            icon: 'success'
          })
        
    }else{
        email.classList.add("bad_input");
        icon.classList.add("error_icon");
        message.classList.add("activate");
    }
});