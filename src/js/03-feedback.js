const throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const feedbackEmail = document.querySelector('.feedback-form input');
const feedbackMessage = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";

// version #1 (arrow functions)

const onFeedbackFormInput = event => {
    const formData = {
        email: feedbackEmail.value,
        message: feedbackMessage.value
    };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

const onFeedbackFormSubmit = event => {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

const populateInputs = event => {
    const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);

    if (savedFormData) {
        feedbackEmail.value = JSON.parse(savedFormData).email;
        feedbackMessage.value = JSON.parse(savedFormData).message;
    }
}

feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

populateInputs();


// version #2 (default function declaration)

// feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));
// feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

// populateInputs();

// function onFeedbackFormInput (event) {
//     const formData = {
//         email: feedbackEmail.value,
//         message: feedbackMessage.value
//     };

//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
// }

// function onFeedbackFormSubmit (event) {
//     event.preventDefault();
//     console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
//     event.currentTarget.reset();
//     localStorage.removeItem(LOCALSTORAGE_KEY);
// }

// function populateInputs (event) {
//     const savedFormData = localStorage.getItem(LOCALSTORAGE_KEY);

//     if (savedFormData) {
//         feedbackEmail.value = JSON.parse(savedFormData).email;
//         feedbackMessage.value = JSON.parse(savedFormData).message;
//     }
// }