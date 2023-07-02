"use strict"

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const openModal = document.querySelector('#open-modal-btn')
const modal = document.querySelector('#my-modal');
const closeModal = document.querySelectorAll("#close-my-modal-btn");
// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
// document.getElementById("close-my-modal-btn").addEventListener("click", function() {
//     document.getElementById("my-modal").classList.remove("open")
// })
closeModal.forEach(el => {
	el.addEventListener("click", function() {
		modal.classList.remove("open")
	})
});

// Закрыть модальное окно при нажатии на Esc

window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		modal.classList.remove("open")
	}
});


// Закрыть модальное окно при клике вне его
modal.querySelector(".modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});
modal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

//!----------------------
const formModal = document.querySelector(".modal-form");

formModal.addEventListener("submit", handleSubmitModal);

function handleSubmitModal(event) {
  	event.preventDefault();
  	const {
    	elements: { name, tel, email, message }
  	} = event.currentTarget;

	const checkbox = document.querySelector('#formAgreement')

	if (name.value === "" || tel.value === "" || email.value === "") {
		return alert("Заповніть усі поля");
	} else if (!checkbox.checked){
		return alert("Погодьтесь з умовами компанії");
	} else{
		modal.classList.remove("open");
		console.log(`
			name: ${name.value}, 
			Number: ${tel.value}, 
			Email: ${email.value}, 
			Message: ${message.value}, 
			Agreement: ${checkbox.checked}, 
		`);
		alert(`${name.value} чекайте на дзвінок`);
  		event.currentTarget.reset();
	}
}

//!----------------------
const formFooter = document.querySelector(".footer-form-email");

formFooter.addEventListener("submit", handleSubmitFooter);

function handleSubmitFooter(event) {
  	event.preventDefault();
  	const {
    	elements: {email}
  	} = event.currentTarget;

	if (email.value === "") {
		return alert("Заповніть поле пошти");
	} else{
		console.log(`
			Email: ${email.value}, 
		`);
		alert(`Перевірте пошту ${email.value}`);
  		event.currentTarget.reset();
	}
}

// document.addEventListener('DOMContentLoaded', function () {
// 	const form = document.getElementById("modal-form")
// 	form.addEventListener('submit', formSend);

// 	async function formSend(e){
// 		e.preventDefault();	

// 		let error = formValidate(form);

// 		let formData = new FormData(form);

// 		if(error === 0){
// 			console.log('formData :>> ', formData);
// 		} else{
// 			alert("Заповніть обов'язкові поля")
// 		}

// 	}

// 	function formValidate(form){
// 		let error = 0;
// 		let formReq = document.querySelectorAll('._req');

// 		for (let index = 0; index < formReq.length; index++) {
// 			const input = formReq[index];
// 			formRemoveError(input);

// 			if(input.classList.contains('_email')){
// 				if(emailTest(input)){
// 					formAddError(input);
// 					error++;
// 				}
// 			} else if (input.getAttribute("type") === "checkbox" && input.checked === false){
// 				formAddError(input);
// 				error++;
// 			} else { 
// 				if(input.value === ''){
// 					formAddError(input);
// 					error++;
// 				}
// 			}
// 		}
// 	}

// 	function formAddError(input){
// 		input.parentElement.classList.add("_error");
// 		input.classList.add("_error");
// 	}

// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove("_error");
// 		input.classList.remove("_error");
// 	}

// 	function emailTest(input){
// 		return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value);
// 	}

//!-----------

// })
// const modalLinks = document.querySelectorAll('.modal-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

// let unlock = true;

// const timeout = 800;

// if(modalLinks.length > 0){
// 	for(let i = 0; i < modalLinks.length; i += 1){
// 		const modalLink = modalLinks[i];
// 		modalLink.addEventListener('click', function (e) {
// 			const modal = document.querySelector('#modal');
// 			modalOpen(modal);
// 			e.preventDefault();	
// 		})
// 	}
// }

// const modalCloseIcon = document.querySelectorAll('.close-popup');

// if(modalCloseIcon.length > 0){
// 	for(let i = 0; i < modalCloseIcon.length; i += 1){
// 		const el = modalCloseIcon[index];
// 		el.addEventListener('click', function(e){
// 			modalClose(el.closest('.modal'));
// 			e.preventDefault();
// 		})
// 	}
// 	function modalOpen(currentModal){
// 		if(currentModal && unlock){
// 			const modalActive = document.querySelector('.modal.open');
// 			if(modalActive){
// 				modalClose(modalActive, false);
// 			} else{
// 				bodylock();
// 			}

// 			currentModal.classlist.add('open');
// 			currentModal.addEventListener('click', function (e){
// 				if(!e.targer.closest('.popup-content')){
// 					popupClose(e.target.closest('.modal'));
// 				}
// 			})
// 		}
// 	}
// }