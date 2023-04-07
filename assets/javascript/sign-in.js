// //this block of code function to show the password written down by the user
// signInCheckBox.addEventListener('click', action =>{
//     // action.preventDefault();
//     signInCheckBox.classList.toggle('reveal_password');
//     signInPasswordField.classList.toggle('reveal_password');
//       if(signInPasswordField.classList.contains('reveal_password')){
//           signInPasswordField.type = 'text';
//       }else{
//         signInPasswordField.type = 'password';
//       }
//   });
//   // End of show password

//   // start of authentication script

  const emailField = document.querySelector('#email');
  const signInBtn = document.querySelector('.signin_btn');

//   signInBtn.addEventListener('click', function(e){
//     e.preventDefault();
//  let obtainedUser =  JSON.parse(localStorage.getItem('User'));

//  if(emailField.value == '' && signInPasswordField.value == ''){
//   alert(`Email and password required`);
//   emailField.focus();
//   return
//  }
//  if(emailField.value == ''){
//   alert(`Email required`);
//   emailField.focus();
//   return
//  }
//  if(signInPasswordField.value == ''){
//   alert(`password required`);
//   signInPasswordField.focus();
//   return
//  }

//  for(const user of obtainedUser){
//     if(user.Email == emailField.value && user.password == signInPasswordField.value){
//         alert(`${user.Name} logged in with success`);
//         window.location.replace('../pages/userProfile.html');
//         return
//     }else{
//       // alert(`password or email do not match`);
//       // return
//       continue
//     }
//     return
//  }

//   });
