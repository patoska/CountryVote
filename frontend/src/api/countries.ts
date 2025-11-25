const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual base URL
export interface Country {
  id?: number
	name: string
	capital: string
	region?: string
	subregion?: string
	votes_count: number
}

/**
 * Fetches the list of all countries.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of country objects.
 */
export async function fetchCountries() {
  const response = await fetch(`${API_BASE_URL}/countries/index?limit=10`);

  if (!response.ok) {
    throw new Error('Failed to fetch countries.');
  }
  return response.json();
}
