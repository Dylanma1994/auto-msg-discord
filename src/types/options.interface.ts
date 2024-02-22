import {Option} from "@d-lab/discord-puppet";

// @ts-ignore
export interface OptionsInterface extends Option{
	username?: string;
	password?: string;
	headless?: boolean;
	server: string;
	channel: string;
	cycle: number,
	token?: string;
	type: string;
	flag: string;
	msg: string;
}
