const form = document.getElementById('form');
const firstName=document.getElementById('firstname');
const lastName=document.getElementById('lastname');
const email=document.getElementById('email');
const password=document.getElementById('password');

const inputs = document.querySelectorAll('.form-control')
const btn=document.querySelector('.btn');
const signupForm=document.querySelector('.signup-form')

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    signupForm.innerHTML =`
        <h3 class="submit__title">Thank you for signing up!</h3>
        <p class="submit__text">Check your email to confirm your signup</p>
    `;
})

inputs.forEach(formControl=>{
    const input = formControl.querySelector('input')
    const label=formControl.querySelector('label')
    const errorText = formControl.querySelector('.error-text')

    input.addEventListener('invalid', (event)=>{
        event.preventDefault();
        formControl.classList.add('error');
        input.placeholder='';
        if(event.target.validity.valueMissing){
            errorText.textContent=`${label.textContent} cannot be empty`
        }else if(event.target.validity.patternMismatch){
            errorText.textContent='Looks like this is not an email'
        }else if(event.target.validity.tooShort){
            errorText.textContent=`${label.textContent} needs to be longer than ${input.minLength} character`
        }
    })

     input.addEventListener("input", (event) => {
        formControl.classList.remove("error");
  })

})