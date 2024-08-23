import { command, execute } from "./commandBase.js";

export const getPull = async () => {
    return await command(`cd ${process.env.DIRPATH} && git pull -S`);
}

export const installDependencies = async () => {
    return await command(`cd ${process.env.DIRPATH} && pnpm install`);
}

export const build = async () => {
    return await execute(`cd ${process.env.DIRPATH} && pnpm run build`);
}

export const restartServer = async () => {
    return await execute(`echo "${process.env.SUDO_PASSWORD}" | sudo -S nginx -t && echo "${process.env.SUDO_PASSWORD}" | sudo -S systemctl restart nginx`);
}

