/**
 * @lisence
 * Copyright 2017 Clearonline, Org.
 * 
 * @Author: mars
 * @Date:   2017-02-15T01:19:14-05:00
 * @Last modified by:   mars
 * @Last modified time: 2017-02-15T01:40:57-05:00
*/

import { ValidatedGet } from './validated/get';
import { ValidatedPost } from './validated/post';

export class ValidatedRequest {

    private validatedGet: any;
    private validatedPost: any;

    public static staticGet(url: string, headers: { [key: string]: string }): Promise<any> {
        return Promise.reject({ message: 'NOT Implemented' });
    }
    public static staticPost(url: string, headers: { [key: string]: string }): Promise<any> {
        return Promise.reject({ message: 'NOT Implemented' });
    }
        public static staticPut(url: string, headers: { [key: string]: string }): Promise<any> {
        return Promise.reject({ message: 'NOT Implemented' });
    }

    constructor(
        private protocol: Array<{ method: string, param?: JSON, query?: JSON, body?: JSON }>
    ) {

        protocol.forEach(({ method, param, query, body }) => {
            switch (method) {
                case 'GET':
                    this.validatedGet = new ValidatedGet(method, param, query, body);
                    break;
                case 'POST':
                    this.validatedPost = new ValidatedPost(method, param, query, body);
                    break;
            
                default:
                    break;
            }
        });

    }

    public get(url: string, headers: { [key: string]: string }): 
        Promise<{ response: any, body?: any, error?: any }> {
        return this.validatedGet.get(url, headers);
    }


    public post(url: string, headers: { [key: string]: string }, body: JSON): 
        Promise<{ response: any, body?: any, error?: any }> {
        return this.validatedPost.post(url, headers, body);
    }

}
