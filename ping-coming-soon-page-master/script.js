const form=document.getElementById('subscribeFormEl');
const subscribeForm = document.querySelector('.subscribe-form');
const emailController=document.querySelector('.form-control');


const input=emailController.querySelector('input');
const errorText=emailController.querySelector('.input-msg');


form.addEventListener('submit', (event)=>{
    subscribeForm.innerHTML=`
    <h3>Thank you for signing up!</h3>
        <p>Check your email to confirm your signup.</p>
        `;
})

input.addEventListener('invalid', (event)=>{
    event.preventDefault();
    input.classList.add('error')
    if(event.target.validity.valueMissing){
        errorText.textContent="Whoops! It looks like you forgot to add your email"
    }else if(event.target.validity.patternMismatch){
        errorText.textContent="Please provide a valid email address";
    }else if(event.target.validity.tooShort){
        errorText.textContent="Too short for an email";
    }
})

input.removeEventListener('valid', ()=>{
    emailController.classList.remove('is-invalid');
})