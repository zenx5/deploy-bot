import dotenv from 'dotenv'
dotenv.config()
import { Bot } from "grammy";
import { getPull, installDependencies, build, restartServer } from "./actions/command.js";


const bot = new Bot(process.env.NODE_BOT_TOKEN)

bot.command("deploy", async (ctx) => {
    const {error:errorpull } = await getPull()
    if( errorpull ) return ctx.reply("Error pulling from git")
    const {error:errorinstall } = await installDependencies()
    if( errorinstall ) return ctx.reply("Error installing dependencies")
    const {error:errorbuild } = await build()
    if( errorbuild ) return ctx.reply("Error building the project")
    const {error:errorrestar } = await restartServer()
    if( errorrestar ) return ctx.reply("Error restarting the server")
    ctx.reply("Update successful")
})


bot.start()