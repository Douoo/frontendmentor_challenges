const toggleBtns = document.querySelectorAll("input[type=radio]");

const preferredTheme = 'theme-preference';

const theme = {
  value: getThemePreference(),
}

function getThemePreference () {
  if(localStorage.getItem(preferredTheme))
    return localStorage.getItem(preferredTheme);
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
}

function setPreference () {
  localStorage.setItem(preferredTheme, theme.value)
  activateThemePreference()
}

function activateThemePreference() {
  document.firstElementChild.setAttribute("data-theme", theme.value);
  document.getElementById(theme.value).checked=true;
}
activateThemePreference();

window.onload = () => {
  activateThemePreference()
    
toggleBtns.forEach(button=>{
    button.addEventListener("change", (event) => {
        theme.value = event.target.value
        setPreference()
      })
  })
 
}
