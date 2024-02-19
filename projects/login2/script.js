let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");


// 
let login_email = document.getElementById("email_login");
let login_password = document.getElementById('password_login');


let res = document.getElementById('result')

let users = []


const signUpHandler = () => {
    let user = {
        name:username.value,
        email:email.value,
        password:password.value
    }
    // console.log(user)
    
    users.push(user);
    console.log(users)
}


const LoginHandler = () =>{
if(login_email.value == users[0].email && login_password.value == users[0].password) {
    res.innerHTML = `welcome ${users[0].name}`
}else {
    res.innerHTML = `Invalid username or password`
}

console.log(login_email.value)
console.log(login_password.value)

}