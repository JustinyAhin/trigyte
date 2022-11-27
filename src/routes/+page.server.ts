import type { Actions } from './$types';
import { invalid, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { xata } from '$lib/xata/client';

const talentSchema = z.object({
	name: z.string().trim().min(1),
	role: z.number().int().min(0).max(3),
	email: z.string().trim().email().min(1)
});

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());

		const name = formData.name;
		const role = Number(formData.role);
		const email = formData.email;

		const talentData = talentSchema.safeParse({ name, role, email });

		if (!talentData.success) {
			const errors = talentData.error.errors.map((error) => {
				return {
					field: error.path[0],
					message: error.message
				};
			});

			return invalid(400, { error: true, errors });
		}

		// Save the data to the database
		await xata.db.talents.create(talentData.data);

		// Redirect to the talents page
		throw redirect(303, '/talents');
	}
};
