const API_BASE_URL = 'https://api.example.com'; // Replace with your actual base URL

/**
 * Fetches the list of all countries.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of country objects.
 */
export async function fetchCountries() {
  const response = await fetch(`${API_BASE_URL}/countries`);
  if (!response.ok) {
    throw new Error('Failed to fetch countries.');
  }
  return response.json();
}

/**
 * Sends a vote for a specific country by a user's email.
 * @param {string} countryId - The ID of the country to vote for.
 * @param {string} email - The voter's email address.
 * @returns {Promise<Object>} A promise that resolves to the updated country data.
 */
export async function voteForCountry(countryId, email) {
  const response = await fetch(`${API_BASE_URL}/countries/${countryId}/vote`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit vote.');
  }
  return response.json();
}