// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
        .then(resp => resp.json())
        .then(data => document.querySelector('body').append(data['id']))
        .catch(error => document.querySelector('body').append(error.message))

}
