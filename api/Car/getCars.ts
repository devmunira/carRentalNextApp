import axios from "axios";

export async function getAllCars() {
    const options = {
        method: 'GET',
        url: process.env.RAPID_API_URL,
        params: {
            model: 'corolla'
        },
        headers: {
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host': process.env.X_RapidAPI_Host
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}