function checkIt(resp) {
    if ( parseInt(resp.status / 100, 10) === 2) {
        return resp;
    } else {
        throw resp;
    }
}

function catchIt(err) {
    if ( parseInt(err.status / 100, 10) === 5 ){
        return err;
    } else {
        throw err;
    }
}

function parseJSON(resp) {
    if ( resp.headers.get('Content-Type') && resp.headers.get('Content-Type').includes('application/json')){
        return resp.json();
    }
    return resp;
}

class Net {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(url) {
        return window.fetch(this.baseURL + url, {
            method: 'GET',
            headers:{
                "token": this.getToken() || ''
            }
        }).then(checkIt).then(parseJSON).catch(catchIt);
    }

    post(url, body) {
        return window.fetch(this.baseURL + url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'token' : this.getToken() || ''
            },
            body: JSON.stringify(body)
        }).then(checkIt).then(parseJSON).catch(catchIt);
    }
    getToken() {
        return localStorage.getItem('token');
    }
}

export default new Net('/api');