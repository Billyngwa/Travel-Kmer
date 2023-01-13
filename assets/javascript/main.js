const signInCheckBox = document.querySelector('.check_me');// Getting the checkbox as an object
let signUpPasswordField  = document.querySelector('.sign_up_passwordField');// Getting password field for signup as object
let signInPasswordField  = document.querySelector('.sign_in_passwordField');// getting password for sign in as object
let userName = document.querySelector('.name_holder');

let email = document.querySelector('.email_holder');
let signupButton = document.querySelector('.signup_btn');
let formElement = document.querySelector('form');

//this block of code function to show the password written down by the user
signInCheckBox.addEventListener('click', action =>{
  // action.preventDefault();
  signInCheckBox.classList.toggle('reveal_password');
  signInPasswordField.classList.toggle('reveal_password');
    if(signInPasswordField.classList.contains('reveal_password')){
        signInPasswordField.type = 'text';
    }else{
      signInPasswordField.type = 'password';
    }
});
// End of show password

let arrayObject = [];
signupButton.addEventListener('click', event =>{
      event.preventDefault();
      const usersInLocalStorage = JSON.parse(localStorage.getItem(arrayObject));
      const createdAccount = {
            Name:userName.value,
            Email: email.value,
            password :signUpPasswordField.value
      };
      arrayObject.push(createdAccount);
      arrayObject.concat(usersInLocalStorage);
      window.localStorage.setItem('User',JSON.stringify(arrayObject));
      formElement.reset();
      console.log(usersInLocalStorage);
});

