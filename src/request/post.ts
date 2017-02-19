import { post, Headers, RequestResponse} from 'request';

export function postRequest(url, options: { headers: Headers, body: JSON }): 
Promise<{ error: any, response: RequestResponse, body: any }> {

    return new Promise((resolve, reject) => {
        return post(
        url, options,
        (error: any, response: RequestResponse, body: any) => {
            if(!error) {
                return resolve({ body, response });
            }
            return reject({ error, response })
        });
    });

}