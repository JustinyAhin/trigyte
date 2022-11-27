import type { PageServerLoad } from './$types';
import { xata } from '$lib/xata/client';

export const load: PageServerLoad = async () => {
	const talents = await xata.db.talents.getMany({
		pagination: {
			size: 10
		}
	});
	return {
        talents
    };
};
