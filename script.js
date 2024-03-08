const genBtn = document.querySelector("#gen-pass");
const diaplay = document.querySelector("#password");
let length = 12;
const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
const number = `0123456789`;
const symbol = `~!@#$%^&*_+:;<.>,/|[]{}()`;
const allChars = upperCase + lowerCase + number + symbol;
// copy pass
function copyPass() {
  diaplay.select();
  document.execCommand("copy");
  alert("Password copied!");
}

function genPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  diaplay.value = password;
}
genBtn.addEventListener("click", genPassword);
