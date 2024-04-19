let loggedIn = false;
let userName;
let password;
while(!loggedIn){
    userName = window.prompt(`Enter your username:`);
    password = window.prompt(`Enter your password:`);
    if(userName==="myUserName"&& password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in!");
    }
    else {
        console.log("Invalid credentials! please try again");
    }
}