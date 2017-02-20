import { post, Headers, RequestResponse} from 'request';

export function postRequest(url, options: { headers: Headers, body: JSON, json?: boolean }): 
Promise<{ error: any, response: RequestResponse, body: any }> {

    return new Promise((resolve, reject) => {
        return post(
        url, options,
        (error: any, response: RequestResponse, body: any) => {
            // console.log(' START post ');
            // console.log(error, response.statusCode);
            // console.log(' END post ');
            if(error || response.statusCode !== 200) {
                error = error || body; // some api's send error message in the body
                return reject({ error, response })
            }
            return resolve({ body, response });
        });
    });

}