'use client'
import { useState, useEffect } from 'react';
import ReservationComponent from '@/components/ReservationComponent';
import getCars from '@/libs/getCars';
import { Select, MenuItem } from '@mui/material';
import Image from 'next/image';
import { CarJson, ReservationItem } from '../../interfaces';
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { dbConnect } from '@/db/dbConnect';
// import Rent from '@/db/models/Rent';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import addRent from '@/libs/addRent';
import { useSession } from 'next-auth/react';
import updateRent from '@/libs/updateRent';
import { redirect, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export default function EditForm(){

    const urlParams = useSearchParams()
    const rid = urlParams.get('id')

    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState<CarJson|null>(null);    
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)

    const {data : session} = useSession()

    //for backend
    const updateReserve = async () => {
        if (!session || !session.user.token) return null
        const item:ReservationItem ={
            car:selectedCar,
            returnDate:dayjs(reserveDate).format("YYYY/MM/DD"),
        }
        const response = await updateRent(session?.user?.token,item,rid)
        if(response){
            console.log(response)
            window.location.href = '/cart'
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
        <main className="flex justify-between">
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
                        <div className="bg-slate-100 rounded-lg w-fit px-10 py-5
                        flex flex-row">
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
                        onClick={() => {updateReserve(); redirect('/cart')}}
                        className="items-center rounded-md bg-blue-400 hover:bg-blue-600 px-3 py-2 shadow-sm text-white mt-2" 
                        // onClick={makeReservation}
                        >
                        Edit this Reservation
                    </button>
            </div>
       </div>  
    </div>
</div>

</main>
    
    )
}
