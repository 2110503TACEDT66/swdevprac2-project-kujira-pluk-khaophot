
import { ReservationItem } from "../../interfaces"

export default async function addRent(token:string,item:ReservationItem) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${item.car}/rents/`,{
        method : "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify({
            rentDate: item.rentDate,
        }),
    })

    if(!response.ok){
        if(response.status===400){
            alert("Error: Unfortunately, You can't reserve this car")
        }
    }
    return await response.json()
}