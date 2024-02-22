import {options, Puppet} from "@d-lab/discord-puppet";
import {OptionsInterface} from "./types/options.interface";

export default class PuppetEnhance extends Puppet {

	constructor(option: OptionsInterface) {
		super(options(option.username, option.password));
	}

	async loginByToken(token: string): Promise<boolean> {
		if (await this.isLoggedIn()) {
			return true
		}
		try {
			// insert token to localStorage
			await this.page.evaluate((token) => {
				setInterval(() => {
					const iframe = document.createElement("iframe")
					document.body.appendChild(iframe)
					// @ts-ignore
					const localStorage = iframe.contentWindow.localStorage;
					localStorage.setItem('token', `"${token}"`);
				})
				setTimeout(() => {
					location.reload()
				}, 2500);
			}, token)
			// await this.page.waitForNavigation({waitUntil: 'load'})
			await this.waitExecution(5)
		} catch (e) {
			console.log("[login]: fail > ", e)
		}
		const isLogin = await this.waitLogin()
		if (isLogin) {
			console.log("[login] successful!")
		} else {
			console.log("[login] failed!")
		}
		return isLogin
	}


}
