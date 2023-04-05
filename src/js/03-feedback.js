const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');

form.addEventListener('submit', onFormWrite);
textarea.addEventListener('input', onMessageWrite);
email.addEventListener('input', onEmailWrite);

onTexareaReset();

function onFormWrite(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    
}

function onMessageWrite(e) { 
    const message = e.currentTarget.value;
    
    localStorage.setItem('message', message);
    
    
}

function onEmailWrite(e) {
    const email = e.currentTarget.value;
    
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