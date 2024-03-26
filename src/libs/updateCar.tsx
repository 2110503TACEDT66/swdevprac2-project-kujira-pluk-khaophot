import { error } from "console"
import { CarItem, ReservationItem } from "../../interfaces"

export default async function updateCar(token:string,item:CarItem,carID:string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${carID}`,{
        method : "PUT",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: item.name,
            address: item.address,
            tel:item.tel,
            car: item.car,
            dayRate: item.dayRate,
            picture: item.picture,
            topSpeed: item.topSpeed,
            seats:item.seats,
            color: item.color,
            fuelType: item.fuelType,
            cargoCapacity: item.cargoCapacity,
            picArray: item.picArray
        }),
    })

    if(!response.ok){
        if(response.status===400){
            alert("Error: Unfortunately, You can't reserve this car")
        }
    }
    return await response.json()
}