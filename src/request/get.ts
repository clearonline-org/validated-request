import { get, Headers, RequestResponse} from 'request';

export function getRequest(url, options: { headers: Headers }): 
Promise<{ error: any, response: RequestResponse, body: any }> {

    return new Promise((resolve, reject) => {
        return get(
        url, options,
        (error: any, response: RequestResponse, body: any) => {
            if(!error) {
                return resolve({ body, response });
            }
            return reject({ error, response })
        });
    });

}