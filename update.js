import { exec } from 'node:child_process';

exec("node -v", (error, stdout, stderr) => {

    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    console.log(`Node version: ${stdout}`);
});