const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
        .then(response => apiResult.innerHTML = JSON.stringify(response.data))
        .catch(error => apiResult.innerHTML = JSON.stringify(error.message))
}

getUsers();