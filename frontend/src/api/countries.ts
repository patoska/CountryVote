const API_BASE_URL = 'http://localhost:3000';
export interface Country {
  id?: number
	name: string
	capital: string
	region?: string
	subregion?: string
	votes_count: number
}

export async function fetchCountries() {
  const response = await fetch(`${API_BASE_URL}/countries/index?limit=10`);

  if (!response.ok) {
    throw new Error('Failed to fetch countries.');
  }
  return response.json();
}

export async function voteForCountry(countryId:number, name:string, email:string) {
  console.log("POSTING...")
  const response = await fetch(`${API_BASE_URL}/votes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'country_id': countryId, email, name }),
  });
  console.log("POST reponse", response)

  if (!response.ok) {
    console.log('Failed to submit vote.')
    throw new Error('Failed to submit vote.');
  }
  return response.json();
}
