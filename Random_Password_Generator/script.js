const passwordBox = document.querySelector("#password");
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
const numbers = "0123456789";
const symbols = "@#$%^&*()_+|}{[]><-=!";

const allChars = upperCase + lowerCase + numbers + symbols;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

const copyPassword = () => {
  passwordBox.select();
  document.execCommand("copy");
};
