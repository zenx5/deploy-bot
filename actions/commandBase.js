import { exec } from 'node:child_process';

export const execute = async (command) => {
    return new Promise( (resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error.message);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    })
}