'use client'
import { useState, useEffect } from 'react';
import ReservationComponent from '@/components/ReservationComponent';
import getCars from '@/libs/getCars';
import { Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import { CarJson } from '../../interfaces';
import { dbConnect } from '@/db/dbConnect';
// import Rent from '@/db/models/Rent';
import { Dayjs } from 'dayjs';



export default function ReservationForm(){

    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState<CarJson|null>(null);
    const [pickupDate,setPickupDate] = useState<Dayjs|null>(null)


    useEffect(() => {
        const fetchCarsData = async () => {
            try {
                const carJsonReady = await getCars();
                setCars(carJsonReady.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };
//fetching
        fetchCarsData();
    }, []);

    const handleCarChange = (event:any) => {
        setSelectedCar(event.target.value);
    };

    const CarMap=new Map()
    cars.forEach(tmpCar => {
        CarMap.set(tmpCar.id,tmpCar.picArray[0])
    })
    const selectedCarData = cars.find((car) => car.car === selectedCar);

   

    return (
        <form action="">
            <main className="flex justify-between">
        {(
        <div className="flex w-2/3 h-screen relative justify-center items-center">
        {selectedCar ? (
            <div className="flex justify-center items-center">
                <Image 
                    src={CarMap.get(selectedCar)} 
                    alt='car' 
                    width={800} 
                    height={800} 
                    sizes='100' 
                    className='relative'
                />
            </div>
        ) : null}
    </div>
    
    )}
<div className="w-auto absolute right-0 pt-[250px] pr-[100px]">
    <div className="text-2xl text-gray-600 font-bold mb-4">
        Choose your Car
    </div>
    <div>
        <Select
            name="Car" id="Car" value={selectedCar} onChange={handleCarChange} className="h-10 w-[338px] text-lg text-gray-600 mb-4">
            {cars.map((car) => (
                <MenuItem key={car.id} value={car.id}>
                    {car.car}
                </MenuItem>
            ))}
        </Select>
        <ReservationComponent/>
    </div>
</div>
</main>
        </form>
    )
}
