import Image from 'next/image'

export default async function cart({rentJson}: {rentJson:Object}){
    const rentReady = await rentJson

    return(
        <>
        <div className="mt-[100px] text-center text-xl"> This is your reservation {rentJson.count}</div>
        <div className="flex flex-col justify-center items-center">
            {
                rentReady.data.map((rentItem:Object)=>(
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 px-2 my-2 w-[60%] flex relative h-[170px]" key={rentItem._id}>
                        <div className='h-fit w-fit mx-[10px]'>
                            <Image src={''} width={150} height={150} alt='car picture' className='block'/>
                        </div>

                        <div className='flex flex-col items-center justify-end absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <div className="block text-xl text-center">{rentItem.car.car}</div>
                            <div className="block text-xl text-center">{rentItem.rentDate}</div>
                        </div>



                        <button className="rounded-md bg-blue-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-2  w-fit absolute right-[100px]">
                             Edit
                        </button>
                            <button className="rounded-md bg-red-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-2 mx-3 w-fit absolute right-0">
                             Cancel
                        </button>
                    </div>
                ))
            }
        </div>
        </>
    )
}