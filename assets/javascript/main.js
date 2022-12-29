const checkBox = document.querySelector('input#pwd_display');
let passwordField  = document.querySelector('#password_field');

checkBox.addEventListener('click', event => {
    checkBox.classList.toggle('check');
    passwordField.classList.toggle('check');
    if(passwordField.classList.contains('check')){
          passwordField.type = 'text';
    }else{
          passwordField.type = 'password';
    }
});