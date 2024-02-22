import {OptionsInterface} from "./types/options.interface";
import PuppetEnhance from "./PuppetEnhance";

export const run = async (option: OptionsInterface) => {
	if (option.type == '' || option.server == '' || option.channel == '' || option.flag == '' || option.cycle == undefined)
		throw new Error("Discord args [type/server/channel/flag/cycle] not set")
	if (option.token == '' && (option.username == '' || option.password == ''))
		throw new Error("Discord token or username+password, choose one way to login, and fill them field")

	const puppet = new PuppetEnhance(option)
	if (option.token != '') await puppet.loginByToken(option.token)
	else await puppet.login()

	await puppet.gotToChannel(option.server, option.channel)
	if (option.type === 'msg') {
		await puppet.sendMessage(option.flag + (option.flag == '' ? '' : ' ') + option.msg)
		setInterval(() => {
			puppet.sendMessage(option.flag + (option.flag == '' ? '' : ' ') + option.msg)
		}, option.cycle * 1000)
	} else if (option.type === 'cmd') {
		await puppet.sendCommand(option.flag, option.msg)
		setInterval(() => {
			puppet.sendCommand(option.flag, option.msg)
		}, option.cycle * 1000)
	} else throw new Error("Not support msg type ${option.type}")
}
