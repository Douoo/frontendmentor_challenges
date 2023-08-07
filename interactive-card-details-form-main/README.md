# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Desktop screenshot](screenshot/desktop_screenshot.png)

![Mobile screenshot](screenshot/mobile_screenshot.png)

### Links

- Solution URL: [SRC Code](https://github.com/Douoo/frontendmentor_challenges/tree/main/interactive-card-details-form-main)
- Live Site URL: [Live Demo](https://douoo.github.io/frontendmentor_challenges/interactive-card-details-form-main)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
I learned input masking to achieve the credit card format and to be honest I couldn't find a good way of achieving it plus I didn't want to use jQuery or any other additional frameworks. So, I came up with my own input mask format - I wouldn't say its is the most efficient and practical way to do it but it gets the job done. The code goes as follow: 
```
function formatCardNumber(value) {
  // Remove any non-numeric characters from the input
  const sanitizedValue = value.replace(/[^0-9]/g, "");

  // Add spacing after every 4 characters
  let formattedValue = "";
  for (let i = 0; i < sanitizedValue.length; i += 4) {
    formattedValue += sanitizedValue.slice(i, i + 4) + " ";
  }

  // Remove the extra space at the end (if any)
  formattedValue = formattedValue.trim();

  return formattedValue;
}
```
Let me know if there is more efficient way to get around this 🙂.

### Continued development

I started this project with ReactJS but I was a bit frustrated with the number of input fields I had to manage. I didn't want to use useState for validation purpose therefore I reverted back to vanilla JS. It was not much different using VanillaJS but I was able to use one method for all the invalid events. But I hope to complete this project in ReactJS with a form validation where I don't have to use multiple useState or may be make one state that can manage each form state. I perfer to use useRef but still useState plays a key role to achieve this. I didn't want to re-render each and related components on every form submission. I will look into this in more detail and see if there are is efficient way to achieve this and if not I guess I will go ahead and use useState. 


## Author

- Frontend Mentor - [@Douoo](https://www.frontendmentor.io/profile/Douoo)
- Twitter - [@Douoo_B](https://twitter.com/Douoo_B)
- Instagram - [@Douoo](https://www.instagram.com/douooo/)



