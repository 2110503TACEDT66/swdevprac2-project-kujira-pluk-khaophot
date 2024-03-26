'use client'
import { Dayjs } from "dayjs"
import { useState } from "react"
import LocationDateReserve from "@/components/LocationDateReserve"

export default function ReservationComponent(){
    const [pickupDate,setPickupDate] = useState<Dayjs|null>(null)
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
            onDateChange={(value:Dayjs) => {setPickupDate(value)}} />
    </div>
        <div className="w-full mt-[20px] flex justify-center items-center"> 
            <button 
            className="items-center rounded-md bg-blue-400 hover:bg-blue-600 px-3 py-2 shadow-sm text-white mt-2" 
        >
            Reserve this Car
        </button>
        </div>
       
    </div>  
</main>
        )
}