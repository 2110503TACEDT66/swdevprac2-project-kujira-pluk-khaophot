import { error } from "console"
import { ReservationItem } from "../../interfaces"

export default async function updateRent(token:string,item:ReservationItem,rentID:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/rents/${rentID}`,{
        method : "PUT",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify({
            car: item.car,
            rentDate: item.returnDate,
        }),
    })

    if(!response.ok){
        if(response.status===400){
            alert("Error: Unfortunately, You can't reserve this car")
        }
    }
    return await response.json()
}