async function fetchPost(url, body = {}, headers = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPost }
async function fetchPost2(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPost2 }

async function fetchPostSendFile(url, body = {}, headers = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPostSendFile }

async function fetchPutSendFile(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                "Content-Type": "application/json"
            },
            body: body
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPutSendFile }

async function fetchPut(url, body = {}) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchPut }

async function fetchDelete(url) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchDelete }

async function fetchGet(url) {
    return new Promise((res) => {
        let status
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            },
        })
            .then((response) => {
                status = response.status
                return response.json()
            })
            .then((responseJSON) => {
                res({ responseJSON, status })
            })
            .catch(() => {
                res({ responseJSON: [], status: 500 })
            })
    })
}
export { fetchGet }

