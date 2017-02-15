
import { getRequest } from '../request/get';
export class ValidatedGet {
    constructor(method: string, param?: JSON, query?: JSON, body?: JSON) {

    }
    public async get(url: string, headers: { [key: string]: string }): Promise<{ response: any, body?: any, error?: any }> {
        // @TODO validate the headers against the protocol
        return await getRequest(url, { headers });
    }
}