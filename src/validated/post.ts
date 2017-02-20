
import { postRequest } from '../request/post';
export class ValidatedPost {
    constructor(method: string, param?: JSON, query?: JSON, body?: JSON) {

    }
    public async post(url: string, headers: { [key: string]: string }, body: JSON): Promise<{ response: any, body?: any, error?: any }> {
        // @TODO validate the headers against the protocol
        return await postRequest(url, { headers, body, json: true });
    }
}