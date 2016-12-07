import 'whatwg-fetch';
import Cookies from 'js-cookie';

class Api {

    constructor(baseUrl, delay = 0) {
        this.baseUrl = baseUrl;
        this.delay = delay;
    }

    arrayToURL(array) {
        var pairs = [];
        for (var key in array)
            if (array.hasOwnProperty(key))
                pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(array[key]));
        return pairs.join('&');
    }

    get(url, params = {}) {
        let queryParams = this.arrayToURL(params);
        let urlWithQueryParams = `${this.baseUrl}${url}` + (queryParams ? '?' + queryParams : '');
        return this.request(urlWithQueryParams);
    }

    post(url, body) {
        return this.request(`${this.baseUrl}${url}`, {
            method: 'POST',
            body: JSON.stringify(body)
        });
    }

    put(url, body) {
        return this.request(`${this.baseUrl}${url}`, {
            method: 'PUT',
            body: JSON.stringify(body)
        });
    }

    delete(url) {
        return this.request(`${this.baseUrl}${url}`, {
            method: 'DELETE'
        });
    }

    redirect(url) {
        window.location = url;
    }

    request(url, config = {}, checkFor401 = true) {

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let token = Cookies.get('token');
        if(token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        config = Object.assign({
            headers: headers,
            mode: "cors"
        }, config);

        return fetch(url, config)
            .then(response => {

                if(!token){
                    let token = response.headers.get('Authorization');
                    Cookies.set("token", token.split(' ')[1]);
                }

                if(checkFor401) {
                    if(response.status === 401) {
                        Cookies.remove('token');
                        window.location.href = '/';
                    }
                }

                if (response.ok) {
                    return response.json();
                } else {
                    let error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
            })
            .catch(error => {
                 throw error;
            })
            .then(json => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(json);
                    }, this.delay);
                });
            });
    }
}

export default new Api('http://localhost:8080/service');