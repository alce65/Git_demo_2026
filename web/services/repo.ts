const API_KEY = process.env.API_KEY

export async function fetchData(endpoint: string): Promise<any> {
    try {
        const response = await fetch(
            `https://api.example.com/${endpoint}?api_key=${API_KEY}`,
        );
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}
