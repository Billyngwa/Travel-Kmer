// const checkBox = document.querySelector('input#pwd_display');
// let passwordField  = document.querySelector('#password_field');

// checkBox.addEventListener('click', event => {
//     checkBox.classList.toggle('check');
//     passwordField.classList.toggle('check');
//     if(passwordField.classList.contains('check')){
//           passwordField.type = 'text';
//     }else{
//           passwordField.type = 'password';
//     }
// });
let userName = document.querySelector('.name_holder');
let email = document.querySelector('.email_holder');
let passWord = document.querySelector('.password_holder');
let signupButton = document.querySelector('.signup_btn');
let formElement = document.querySelector('form');
let arrayObject = [];


signupButton.addEventListener('click', event =>{
      event.preventDefault();
      const createdAccount = {
            Name:userName.value,
            Email: email.value,
            password :passWord.value
      };
      arrayObject.push(createdAccount);
      window.localStorage.setItem('User',JSON.stringify(arrayObject));
      formElement.reset();
});