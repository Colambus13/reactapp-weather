export enum RequestMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
};

const objectToQueryString = (obj: object) => {
    return (Object.keys(obj) as Array<keyof typeof obj>)
        .map(key => key + '=' + obj[key])
        .join('&');
}

export const request = (method: RequestMethods, baseUrl: string, data?: object) => {
    let url: string = baseUrl;
    let options: RequestInit = {
        method
    };

    if (data) {
        if (method === RequestMethods.GET) {
            url += '?' + objectToQueryString(data);
        } else {
            options.body = JSON.stringify(data);
        }
    }

    return fetch(url, {...options}).then(response => response.json());
};