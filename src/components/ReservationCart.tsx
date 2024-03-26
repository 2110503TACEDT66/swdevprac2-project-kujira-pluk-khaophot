
import Image from 'next/image'
import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/auth";
import CancelButton from './CancelButton'
import { ReservationItem } from '../../interfaces'

export default async function cart({rentJson}: {rentJson:ReservationItem}){
    const rentReady = await rentJson
    const session = await getServerSession(authOptions)
    return(
        <>
        <div className='mt-[100px]'></div>
        <div className="flex flex-col justify-center items-center">
            {
                rentReady.data.map((rentItem:ReservationItem)=>(
                    <div className="bg-white rounded px-5 mx-5 py-2 px-2 my-2 w-[60%] flex relative h-[170px] hover:bg-slate-100" key={rentItem._id}>
                        <div className='h-[150px] w-[250px] relative'>
                            <Image src={rentItem.car.picArray[0]} width={0} height={0} sizes='100vm' alt='car picture' priority className='rounded w-full h-full' style={{objectFit:"cover"}}/>
                        </div>
                        <div className='flex flex-col items-center justify-end absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <div className="block text-xl text-center font-mono">{rentItem.car.car}</div>
                            <div className="block text-xl text-center font-mono">{rentItem.rentDate}</div>
                        </div>
                        <a href={`/cart/edit?id=${rentItem._id}`}>
                            <div className="rounded-md bg-blue-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-2  w-fit absolute right-[100px]">
                                Edit
                            </div>
                        </a>
                        {/* <button className="rounded-md bg-red-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-2 mx-3 w-fit absolute right-0"
                            onClick={() => deleteRent(session.user.token,rentItem._id)}>
                             Cancel
                        </button> */}
                        <CancelButton token={session?.user.token} id={rentItem._id} />
                    </div>
                ))
            }
        </div>
    </>
    )
}