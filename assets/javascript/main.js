const signInCheckBox = document.querySelector('input.sign_in_show');
const signUpCheckBox = document.querySelector('input.sign_up_show');
let signUpPasswordField  = document.querySelector('.sign_up_passwordField');
let signInPasswordField  = document.querySelector('.sign_in_passwordField');
let userName = document.querySelector('.name_holder');

let email = document.querySelector('.email_holder');
// let passWord = document.querySelector('.password_holder');
let signupButton = document.querySelector('.signup_btn');
let formElement = document.querySelector('form');

// checkBoxes.forEach(checkbox => {
//       checkbox.addEventListener('click', event => {
//             checkbox.classList.toggle('check');
//             signInPasswordField.classList.toggle('check');
//             signUpPasswordField.classList.toggle('check');
//       });
//       if(signInPasswordField.classList.contains('check') && signUpPasswordField.classList.contains('check')){
//             signInPasswordField.type  = 'text';
//             signUpPasswordField.type = 'text';
//       }else{
//             signInPasswordField.type  = 'password';
//             signUpPasswordField.type = 'password';
//       }
// });

// signUpCheckBox.addEventListener('click', event => {
//       signUpCheckBox.classList.toggle('check');
//       signUpPasswordField.classList.toggle('check');
//     if(signUpPasswordField.classList.contains('check')){
//       signUpPasswordField.type = 'text';
//     }else{
//       signUpPasswordField.type = 'password';
//     }
// });




let arrayObject = [];
signupButton.addEventListener('click', event =>{
      event.preventDefault();
      const createdAccount = {
            Name:userName.value,
            Email: email.value,
            password :signUpPasswordField.value
      };
      arrayObject.push(createdAccount);
      window.localStorage.setItem('User',JSON.stringify(arrayObject));
      formElement.reset();
});

signInCheckBox.addEventListener('click', event => {
      signInCheckBox.classList.toggle('check');
      signInPasswordField.classList.toggle('check');
    if(signInPasswordField.classList.contains('check')){
      signInPasswordField.type = 'text';
    }else{
      signInPasswordField.type = 'password';
    }
});