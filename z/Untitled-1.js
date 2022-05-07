var form = document.getElementById("register-form");
form.addEventListener('click',e =>{
    e.preventDefault();
    var username = document.getElementById("name");
var login = document.getElementById("login");
var pass = document.getElementById("pass");
var re_pass = document.getElementById("re_pass");
console.log(form);
const nameValue = username.value.trim();
const loginValue = login.value.trim();
const passValue = pass.value.trim();
const re_passValue = re_pass.value.trim();

if(nameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
} else {
    setSuccessFor(username);
}

if(loginValue === '') {
    setErrorFor(login, 'Login cannot be blank');
} else {
    setSuccessFor(login);
}

if(passValue === '') {
    setErrorFor(pass, 'Password cannot be blank');
} else {
    setSuccessFor(pass);
}

if(re_passValue === '') {
    setErrorFor(re_pass, 'Password2 cannot be blank');
} else if(re_passValue !== re_passValue) {
    setErrorFor(re_pass, 'Passwords does not match');
} else{
    setSuccessFor(re_pass);
}
} )

        // ---------------------------------

// api.post("/api/user/signup",
        //     {
        //         name:username,
        //         login:login,
        //         password:pass,
        //         re_password:re_pass,
        //     }
        // ).then(response => {
        //     setPage("connexion");
        //     console.log(response);
        // }
            
        // ).catch(error => {
        //     alert(error.response.data.message);
        //     console.log(error.response)
        // });


        // ---------------------------------