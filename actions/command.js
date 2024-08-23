import { execute } from "./commandBase.js";

export const getPull = async () => {
    try {
        const response = await execute(`cd ${process.env.DIRPATH} && git pull`);
        return { error: false, message: response }
    }catch (error) {
        console.log( error );
        return { error: true, message: error };
    }
}

export const installDependencies = async () => {
    try {
        const response = await execute(`cd ${process.env.DIRPATH} && pnpm install`);
        return { error: false, message: response }
    }catch (error) {
        console.log( error );
        return { error: true, message: error };
    }
}

export const build = async () => {
    try {
        const response = await execute(`cd ${process.env.DIRPATH} && pnpm build`);
        return { error: false, message: response }
    }catch (error) {
        console.log( error );
        return { error: true, message: error };
    }
}

export const restartServer = async () => {
    try {
        const response = await execute(`echo "${process.env.SUDO_PASSWORD}" | sudo -S nginx -t && echo "${process.env.SUDO_PASSWORD}" | sudo -S systemctl restart nginx`);
        return { error: false, message: response }
    }catch (error) {
        console.log( error );
        return error;
    }
}

