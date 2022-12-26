const checkBox = document.querySelector('input#pwd_display');
const passwordField  = document.querySelector('input.password_field');

checkBox.addEventListener('click', event => {
    checkBox.classList.add('check');
    passwordField.classList.add('check');
});
if(passwordField.classList.contains('.check')){
    passwordField.style.type = 'text';
}