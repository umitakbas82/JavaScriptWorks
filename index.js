var users = [
    { email: "user@user.com", pass: "12345" },
    { email: "user1@user.com", pass: "12345" }
]

var teweets = [
    { email: "user@user.com", tweet: "hello World!" },
    { email: "user@user.com", tweet: "hello World again!" },
    { email: "user1@user.com", tweet: "hello World! too" }
]

var email = prompt("e-mail")
var pass = prompt("password")

function giris() {
    if ((email == users[0].email && pass == users[0].pass) || (email == users[1].email && pass == users[1].pass)) {
console.log(teweets)
    }else{
        console.log("Username or password wrong");
    }
}

giris(email,pass)