import { XATA_API_KEY } from '$env/static/private';
import { XataClient } from '$lib/xata/xata';

const xata = new XataClient({
	apiKey: XATA_API_KEY
});

export { xata };
