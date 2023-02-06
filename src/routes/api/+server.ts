import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';

export const config: Config = {
	memory: 512,
	split: true
};

export const GET = (() => {
	return json({ message: 'Hello, world!' });
}) satisfies RequestHandler;
