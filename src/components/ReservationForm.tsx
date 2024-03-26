'use client'
import { useState, useEffect } from 'react';
import getCars from '@/libs/getCars';
import { Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import { CarJson, ReservationItem } from '../../interfaces';
// import Rent from '@/db/models/Rent';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import addRent from '@/libs/addRent';
import { useSession } from 'next-auth/react';



export default function ReservationForm(){

    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState<CarJson|null>(null);    
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)

    const {data : session} = useSession()

    //for backend
    const addReserve = async () => {
        if (!session || !session.user.token) return null
        const item:ReservationItem ={
            car:selectedCar,
            returnDate:dayjs(reserveDate).format("YYYY/MM/DD"),
        }
        const response = await addRent(session?.user?.token,item)
        if(response){
            console.log(response)
            window.location.href = '/cart';
        }
    }

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
        console.log(event.target.value)
    };

    const CarMap=new Map()
    const CarPicMap = new Map()
    cars.forEach(tmpCar => {
        CarMap.set(tmpCar.id,tmpCar.car)
        CarPicMap.set(tmpCar.id,tmpCar.picArray[0])
    })
    const selectedCarData = cars.find((car) => car.car === selectedCar);

    return (       
        <main className="flex justify-between font-mono">
        {(
        <div className="flex w-2/3 h-screen relative justify-center items-center">
        {selectedCar ? (
            <div className="flex justify-center items-center">
                <Image 
                    src={CarPicMap.get(selectedCar)} 
                    alt='car' 
                    width={800} 
                    height={800} 
                    sizes='100' 
                    className='relative'
                />
            </div>) : null}
        </div>
        )}
        <div className="w-auto absolute right-0 pt-[250px] pr-[100px]">
            <div className="text-2xl font-bold mb-4 font-mono">
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
            <div className="w-fit space-y-4 text-left">
                <div>
                    {/* <CarReserve onCarChange={(value:string)=> setCar(value)} /> */}
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start ">
                    <div className="text-lg font-bold font-mono">
                        Pick-Up Date
                    </div>
                    <div className="mt-2">
                        <div className="bg-neutral-100 rounded-lg w-fit px-10 py-5
                        flex flex-row font-mono">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker className="bg-white"
                                value={reserveDate}
                                onChange={(value)=> {setReserveDate(value);}}
                                />
                            </LocalizationProvider>
                    </div>
                </div>
                <div className="w-full mt-[20px] flex justify-center items-center"> 
                    <button 
                    onClick={addReserve}
                    className="items-center rounded-md bg-black bg-black 
                    hover:bg-zinc-600 px-3 py-2 shadow-sm text-white mt-2 font-mono" 
                    // onClick={makeReservation}
                    >
                    Reserve this Car
                </button>
            </div>
       </div>  
    </div>
</div>

</main>
    
    )
}
