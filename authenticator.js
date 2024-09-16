username = prompt("Enter username.");
password = prompt("Enter password.");

logIn();

function logIn (username, password){
    if (username == "admin" || password == "secret" ) {
        displayStr = "Welcome Admin!";
        console.log(displayStr);
    
    }
    else {
        displayStrBad = "BAD LOGIN CREDIENTIALS";
        console.log(displayStrBad);
    }
}