import { reactiveFunctions } from "./formExports.js";
let departures =  document.querySelectorAll('option.departure');
let destinations =  document.querySelectorAll('option.destination');
const regions = ['Yaounde','Douala','Bamenda','Buea','Baffousam','Maroua','Garoua','Ngoundere','Bertoua','Ebolowa'];

const signInCheckBox = document.querySelector('.check_me');// Getting the checkbox as an object
let signUpPasswordField  = document.querySelector('.sign_up_passwordField');// Getting password field for signup as object
let signInPasswordField  = document.querySelector('.sign_in_passwordField');// getting password for sign in as object
let userName = document.querySelector('.name_holder');
const mainBody =  document.getElementsByTagName('body');
let email = document.querySelector('.email_holder');
let signupButton = document.querySelector('button.signup_btn');
let formElement = document.querySelector('form');
let agencyBold = document.querySelectorAll('.agency');
let firstLetter = document.querySelector('.first-letter');
let userProfileSection = document.querySelector('section.user-profile');
let availableAgencies = document.querySelector('section.available-agencies');
const mobileElement = document.querySelectorAll('.mobile');
const hamburgerButton = document.querySelectorAll('.hamburger');
const emailField = document.querySelector('#email');
const signInBtn = document.querySelector('.signin_btn');
const reserveBtn = document.querySelector('.reserve-button');
const reservationName = document.querySelector('#client-name');
const reservationId = document.querySelector('#client-id');
const departureZone = document.querySelector('select#select-from');
const destinationZone = document.querySelector('select#select-to');
let greenHolder = document.querySelector('.green-holder');


if(reserveBtn !=null){
	reserveBtn.addEventListener('click',function(event){
		event.preventDefault();
		const clientReservation = {
			Name: reservationName.value,
			reserveId : reservationId.value,
			departure : departureZone.value,
			destination : destinationZone.value,
		};
		let reservationsInLocalStorage = localStorage.getItem('Reservations');
        if (reservationsInLocalStorage) {
            reservationsInLocalStorage = JSON.parse(reservationsInLocalStorage);
        } else {
            reservationsInLocalStorage = [];
        }

        //This block of code checks if the user has input values into input fields

        if (reservationName.value == '') {
            reservationName.focus();
            reservationName.style.outline = '1px solid red';
            alert('put in your  name');
            reservationName.focus();
            if (reservationName.length <= 1) {
                reservationName.style.outline = '1px solid red';
            } else if (reservationName.length > 1) {
                reservationName.style.outline = '1px solid green';
            }
            return
        }
		if (reservationId.value == '') {
			reservationId.focus();
            reservationId.style.outline = '1px solid red';
			if(reservationId.value.length > 3){
				reservationId.style.outline = '1px solid green';

			}
            alert('put in your Id');
            return;
        }
        // if (typeof(reservationId.value) == 'string') {
        //     alert('put in a valid Id');
        //     return
        // }
		// if (departureZone.value == 'Select Departure' || departureZone.value == 'choose') {
        //     alert('choose departure');
        //     return
        // }
		// console.log(departureZone);
		// if (destinationZone.value == 'Select Destination' ||destinationZone.value == 'choose') {
        //     alert('choose Destination');
		// 	destinationZone.focus();
        //     return
        // }

       const inScope = regions.includes(departureZone.value)
	   if(!inScope){
		alert(`Error with departure Zone`);
	   }
		// for(const region of regions){
		// 	if(departureZone.value !== region){
		// 		alert(`Error with departure Zone`);
		// 	}else{
		// 		alert(`departure is from ${region}`);
		// 		continue
		// 	}
		// 	console.log(region);
		// }
		// for(const departPoint of departures){
		// 	if(departPoint.value != region){
		// 		alert(`incorrect`);
		// 		return
		// 	}
		// 	// return
		// }
		// if (destinationZone.value === destinationZone.value) {
        //     alert('Destination cannot be same to Departure Please review your Destination or departure');
		// 	destinationZone.focus();
        //     return
        // }

        reservationsInLocalStorage.push(clientReservation);
        localStorage.setItem('Reservations', JSON.stringify(reservationsInLocalStorage));
        alert(`${reservationName.value} has made a reservation successfully`);
        formElement.reset();
	});
}
if (firstLetter) {
firstLetter.addEventListener('click', () => {
	if(userProfileSection.style.display == 'none'){
		userProfileSection.style.display = 'block';
		availableAgencies.style.width = 70 + '%';
		availableAgencies.style.marginLeft = 2.5 + '%';
	}else{
		userProfileSection.style.display = 'none';
		availableAgencies.style.width = 80 + '%';
		availableAgencies.style.marginLeft = 10 + '%';
	}
})
}
agencyBold.forEach(elementClicked => {
	elementClicked.addEventListener('click',e =>{
		window.location.href = '../pages/reservation.html';
	})
});

if (signupButton) {
	signupButton.addEventListener('click', reactiveFunctions.signUp);
	
}
if (signInBtn) {
	signInBtn.addEventListener('click', reactiveFunctions.signIn);
	

}
if (signInCheckBox) {
	signInCheckBox.addEventListener('click', reactiveFunctions.checkPassword);
}
const reserveButton = document.querySelector('.reserve');
if (reserveButton) {
		
	reserveButton.addEventListener('click', function(e){
		createElement('p', {class:'toSignIn'});
		createElement('button', {class:'toSignInBtn'});
	});
}

if (hamburgerButton) {
	
hamburgerButton.forEach(button => {
	button.addEventListener('click', (event) =>{
		mobileElement.forEach(mobile =>{
			mobile.classList.toggle('show-me');
		});
		mainBody.forEach(body =>{
			body.classList.toggle('show-me');
		});
		button.classList.toggle('show-me');
		console.log(`you clicked hamburger`);
	});
});

}
const nameHolder = document.querySelector('p.signin');
const userInitial = document.querySelector('p.user-name-initial');
const userLogged = document.querySelector('h1.name');
//session storage
let nameInitial = JSON.parse(sessionStorage.getItem('loggedUser'));
nameHolder.textContent = nameInitial.nameInitial;
userInitial.textContent = nameInitial.nameInitial;
userLogged.textContent = nameInitial.userName;
 function createElement(tagName, attribute = {}) {
	if(tagName){
		tagName = tagName;
	}else{
		tagName = 'div';
	}
	const elementToCreate = document.createElement(tagName);

	for(const [key,value] of Object.entries(attribute)){
		if(key == 'class'){
			elementToCreate.classList.add(value);
		}else{
			elementToCreate.setAttribute(key,value);
		}
	}
}
