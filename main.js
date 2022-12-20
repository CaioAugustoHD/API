const url = "http://localhost:5500/api"

// MÉTODO GET
function getUsers() {
    axios.get(url)
        .then(response => apiResult.innerHTML = JSON.stringify(response.data))
        .catch(error => apiResult.innerHTML = JSON.stringify(error.message))
}

// MÉTODO POST
// O id é passado automaticamente pela API
const newUser = {
    name: "Caio Augusto",
    avatar: "https://avatars.githubusercontent.com/u/102879123?v=4",
    city: "São Bento do Sapucaí"
}

function addNewUser(newUser) {
    axios.post(url, newUser)
        .then(response => console.log(response))
        .catch(error => alert(error.message))
}

// addNewUser(newUser);
getUsers();