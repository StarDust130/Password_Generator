const passwordBox = document.getElementById("password");
const button = document.getElementById("Btn")

  const length = 12





const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

const all = upperCase + lowerCase + numbers + symbols

// Copy The Password
function copyPassword() {
    const passwordBox = document.getElementById("password");
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
  }

// On Click Generate Password
  button.addEventListener("click" ,function()  {
    let password = ""

    while (length > password.length) {
        password += all[Math.floor(Math.random() * all.length)]
        
    }
    passwordBox.value = password;
   
})
const darkColors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
    "#ff8000",
    "#8000ff",
    "#00ff80",
    "#ff0080"
  ];


  button.addEventListener("click", function() {
  const randomBg = darkColors[Math.floor(Math.random() * darkColors.length)];
  button.style.backgroundColor = randomBg
  });



    

  





