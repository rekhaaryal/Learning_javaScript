let userName = window.prompt("enter your username");
userName = userName.trim().charAt(0).toUpperCase + userName.trim().slice(1).toLowerCase;
console.log(userName);