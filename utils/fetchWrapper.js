class FetchWrapper {
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async get({endpoint}){
        try {
            const response = await fetch(`${this.baseUrl}/${endpoint}`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async post({endpoint, body}){
        try {
            console.log(body)
            const response = await fetch(`${this.baseUrl}/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

export const solicitud = new FetchWrapper('https://backendsmtp.onrender.com');