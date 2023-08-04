import axios from "axios";

export async function getAllCars({make,model,year,limit,page,fuel}:{
    make : string,
    model : string,
    year: number,
    limit : number,
    page:number,
    fuel:string
}) {


    const options = {
        method: 'GET',
        url: process.env.RAPID_API_URL,
        params: {
            model: model,
            make : make,
            limit: limit,
            page : page,
            fuel_type: fuel,
            year : year
        },
        headers: {
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host': process.env.X_RapidAPI_Host
        }
    };

    try {
        const response = await axios.request(options);
        return response.data
    } catch (error) {
        console.error(error);
    }

}