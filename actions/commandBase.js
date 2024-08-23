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

export const command = async () => {
    try {
        const response = await execute(`cd ${process.env.DIRPATH} && git pull`);
        return { error: false, message: response }
    }catch (error) {
        return { error: true, message: error };
    }
}