import type { PageServerLoad } from './$types';

export const load = (() => {
	return {
		message: 'Hello, world!'
	};
}) satisfies PageServerLoad;
