import dotenv from 'dotenv'
dotenv.config()
import { Bot } from "grammy";
import { getPull, installDependencies, build, restartServer } from "./actions/command.js";


const bot = new Bot(process.env.NODE_BOT_TOKEN)

bot.command("deploy", async (ctx) => {
    const {error:errorpull, message:messagepull } = await getPull()
    if( errorpull ) return ctx.reply("Error pulling from git \n "+messagepull)

    const {error:errorinstall, message:messageinstall } = await installDependencies()
    if( errorinstall ) return ctx.reply("Error installing dependencies\n"+messageinstall)

    const {error:errorbuild, message:messagebuild } = await build()
    if( errorbuild ) return ctx.reply("Error building the project\n"+messagebuild)

    const {error:errorrestar, message:messagerestar } = await restartServer()
    if( errorrestar ) return ctx.reply("Error restarting the server\n"+messagerestar)

    ctx.reply("Update successful")
})


bot.start()