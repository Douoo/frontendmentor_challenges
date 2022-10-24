const emailInput = document.getElementById('emailEl');
const emailError=document.querySelector('.invalid-email-error');
const errorIcon=document.querySelector('.icon-error')
const submitBtn=document.querySelector('.btn');


submitBtn.addEventListener('click', (event)=>{
    const email=emailInput.value;
    event.preventDefault();
    if(!email){
        showError('Please insert your email to proceed');
    }else if(!isValidEmail(email)){
        showError('Please provide a valid email');
    }else{
        emailError.classList.add('hidden');
    }
})

function isValidEmail(email){
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function showError(errorText){
    emailError.textContent=errorText;
    emailError.classList.remove('hidden');
    errorIcon.classList.remove('hidden')
    emailInput.classList.add('input-error');
}