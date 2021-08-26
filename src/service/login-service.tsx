import { rejects } from "assert";
import { resolve } from "url";

export const LoginService = async (
    username: string, 
    password: string
    // {username}: {username: string}, 
    // {password}: {password: string}
    ) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'mark' && password === 'password') {
                resolve('success');
            } else {
                reject('error');
            }
        }, 1000);
    })
};