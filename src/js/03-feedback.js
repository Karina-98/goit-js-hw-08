import throttle from 'lodash.throttle'

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

form.addEventListener('submit', onFormWrite);
textarea.addEventListener('input',  throttle(onMessageWrite, 500));
email.addEventListener('input', throttle(onEmailWrite, 500));

onTexareaReset();

function onFormWrite(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    
}

function onMessageWrite(e) { 
    const message = e.target.value;
    
    localStorage.setItem('message', message);
    
    
}

function onEmailWrite(e) {
    const email = e.target.value;
    
    localStorage.setItem('email', email);
 }

function onTexareaReset() { 
   
    const sevMessage = localStorage.getItem('message');
    const sevEmail = localStorage.getItem('email'); 
    if (sevMessage) {
        textarea.value = sevMessage
    } if (sevEmail) { 
        email.value = sevEmail;
    }
}