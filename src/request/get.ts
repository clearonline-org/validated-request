import { get, Headers, RequestResponse} from 'request';

export function getRequest(url, options: { headers: Headers }): 
Promise<{ error: any, response: RequestResponse, body: any }> {

    return new Promise((resolve, reject) => {
        return get(
        url, options,
        (error: any, response: RequestResponse, body: any) => {
            if(error || response.statusCode !== 200) {
                error = error || body; // some api's send error message in the body
                return reject({ error, response })
            }
            return resolve({ body, response });
        });
    });

}