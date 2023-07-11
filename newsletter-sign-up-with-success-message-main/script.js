const newsLetterForm = document.getElementById('subscribeFormEl');
const container = document.querySelector('.container');
const emailFieldController = document.querySelector('.form-control');

const input = emailFieldController.querySelector('input');
const errorMsg = emailFieldController.querySelector('small');

newsLetterForm.addEventListener('submit', (event)=>{
    container.innerHTML = `
        <div class="card" id="success">
            <div class="success__content">
            <svg
                class="icon-success"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
            >
                <defs>
                <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stop-color="#FF6A3A" />
                    <stop offset="100%" stop-color="#FF527B" />
                </linearGradient>
                </defs>
                <g fill="none">
                <circle cx="32" cy="32" r="32" fill="url(#a)" />
                <path
                    stroke="#FFF"
                    stroke-width="4"
                    d="m18.286 34.686 8.334 7.98 19.094-18.285"
                />
                </g>
            </svg>
            <h1 class="title">Thanks for subscribing!</h1>
            <p>
                A confirmation email has been sent to ${input.value}. Please open it
                and click the button inside to confirm your subscription.
            </p>
            </div>

            <button class="btn-primary" style="margin-top: auto;">Dismiss message</button>
        </div>
    `
})

input.addEventListener('invalid', (event)=>{
    const {validity} = event.target;

    event.preventDefault();
    input.classList.add('error');
    
    if(validity.valueMissing){
        errorMsg.textContent = "Email address is required"
    }else if( validity.typeMismatch || validity.patternMismatch){

        errorMsg.textContent = "Valid email required "
     }else if(validity.tooShort){

         errorMsg.textContent = "Too short for an email"
     }
    
});

input.removeEventListener('valid', ()=>{
    emailFieldController.classList.remove('error');
})

