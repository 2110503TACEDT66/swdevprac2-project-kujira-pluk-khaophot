'use client'
import { useSearchParams } from "next/navigation"
import { Dayjs } from "dayjs"
import dayjs from "dayjs"
import { UseDispatch, useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { useState } from "react"
import LocationDateReserve from "@/components/LocationDateReserve"
import Image from "next/image"
import getCar from "@/libs/getCar"
import { Select,MenuItem } from "@mui/material"
import { ReservationItem } from "../../interfaces"

export default function ReservationComponent(){
    const [pickupDate,setPickupDate] = useState<Dayjs|null>(null)

    // const makeReservation = () => {
    //     if(carId && model && pickupDate){
    //         const item:ReservationItem = {
    //             carId : carId,
    //             carModel : model,
    //             pickupDate : dayjs(pickupDate).format("YYYY/MM/DD"),
    //         }
    //         // dispatch(addReservation(item))
    //         }
    //     }
        return (
        <main>
            <div className="w-fit space-y-4 text-left">
            <div>
            {/* <CarReserve onCarChange={(value:string)=> setCar(value)} /> */}
        </div>
    </div>
    <div className="flex flex-col justify-start items-start ">
    <div className="text-lg text-gray-600 font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
    Pick-Up Date
</div>
        <div className="mt-2">
            <LocationDateReserve 
                onDateChange={(value:Dayjs) => {setPickupDate(value)}} 
              
            />
        </div>
        <div className="w-full mt-[20px] flex justify-center items-center"> 
            <button 
            className="items-center rounded-md bg-blue-400 hover:bg-blue-600 px-3 py-2 shadow-sm text-white mt-2" 
            // onClick={makeReservation}
            >
            Reserve this Car
        </button>
        </div>
       
    </div>  
</main>
        )
}