import { singleCarProps } from "@/types";
import axios from "axios";

export const generateCarImageUrl = async (car: singleCarProps, angle?: string) => {
    const headers = {
        "content-type":"application/json",
        "authorization":"Basic NWYxNzQyN2ItY2I1ZC00OGYxLThhZjAtY2FiNTNlOTI3YmVh ",
        "partner-token":"620b31f5789747df91d7293e78071d89  "
    }   
    // const url = await axios.get("" , {
    //     headers : headers
    // });
    fetch("http://api.carmd.com/v3.0/image?year=2015&make=CHEVROLET&model=EQUINOX&engine=L4, 2.4L; DOHC; 16V; DI; FFV", {
        headers: headers,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Process the API response data as needed
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    // console.log(url)


    // const { make, model, year } = car;
  
    // url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
    // url.searchParams.append('make', make);
    // url.searchParams.append('modelFamily', model.split(" ")[0]);
    // url.searchParams.append('zoomType', 'fullscreen');
    // url.searchParams.append('modelYear', `${year}`);
    // // url.searchParams.append('zoomLevel', zoomLevel);
    // url.searchParams.append('angle', `${angle}`);
  
    // return `${url}`

}
    
    
    ;