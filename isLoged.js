token = localStorage.getItem("token");

if (!token) {
    url = window.location;
    console.log(url);
    const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
    location.href = path + 'index.html';
}

const btnusers = document.querySelector("#btnusers");
btnusers.addEventListener('click', () => {
    fetch('http://localhost:8080/users/', {
        method: 'GET',
        headers: {
            "Authorization": token,
            "Content-Type":"application/json"
        }
    })
    .then(resp => resp.json()).then(data => {
        console.log(data);
    });
});