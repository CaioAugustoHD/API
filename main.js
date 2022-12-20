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

// MÉTODO GET COM PARÂMETROS
function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            userName.innerHTML = response.data.name;
            userCity.innerHTML = response.data.city;
            userID.innerHTML = response.data.id;
            userAvatar.src = response.data.avatar;
        })
        .catch(error => userName.innerHTML = error)
}

// addNewUser(newUser);
getUsers();
getUser(1);