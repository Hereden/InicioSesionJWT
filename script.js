const formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", (e) => {

    e.preventDefault();
    const email = document.querySelector("#username");
    const password = document.querySelector("#password");

    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");
    emailError.textContent = "";
    passwordError.textContent = "";
    if (email.value == "") {
        emailError.textContent = "Error, favor de ingresar un email";
    }

    if (password.value == "") {
        passwordError.textContent = "Error, favor de ingresar un password";
    }
    if (email.value != "" && password.value != "") {
        let req = fetch("http://localhost:8080/login", {
            method: 'POST',
            body: JSON.stringify({
                username: email.value,
                password: password.value
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
            .then(resp => {
                console.log(resp.status);
                token = resp.headers.get("Authorization");
                console.log(token);

                if (token && token.includes('Bearer')) {
                    console.log(token);
                    localStorage.setItem("token", token);
                    url = window.location;
                    console.log(url);

                    const path = url.pathname.substring(0, url.pathname.lastIndexOf("/") + 1)
                    location.href = path + 'success.html';
                } 
            })

        }else {
            localStorage.removeItem("token");
            emailError.textContent = "Usuario o contraseña incorrecto";
        }        




        /* if(email.value !="" && password.value!=""){
            const api = 'http://localhost:8080/login'; 
            const token = JSON.parse(sessionStorage.getItem('data'));
            const token = user.data.id; 
            axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
            .then(res => {
            console.log(res.data);
            });
        } */

        /*.then((response) => response.text()).then(token =>{
                    if(token.search('Bearer'));
                    console.log(token);
                    localStorage.setItem("token",token);
                    url= window.location;
                    console.log(url);
    
                    const path= url.pathname.substring(0, url.pathname.lastIndexOf("/")+ 1)
                    location.href=path + 'success.html'
    
                });*/

    });


