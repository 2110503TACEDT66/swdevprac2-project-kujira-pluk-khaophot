import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link"
import CarSlideShow from "@/components/CarSlideShow"

export default async function CarDetailPage({params}:{params: {cid:string}}) {
    const CarDetail = await getCar(params.cid)
/**
 * <Image src={CarDetail.data.picture}
                alt='Product Picture'
                width={0} height={0} sizes="100vm"
                className="rounded-lg w-[80%] h-[100%] bg-black"/>
                
                <CarSlideShow picArray={CarDetail.data.picArray}/>
 */
    console.log(CarDetail.data.picArray[0])
    return(
        <main className="text-center font-mono pt-24">
            <div className="flex flex-row my-5 pl-20">
                <div className="w-[70%]">
                <CarSlideShow picArray={CarDetail.data.picArray}/>
                </div>
                <div className="text-md mx-5 w-[30%]">
                    <div className="text-xl">{CarDetail.data.car}</div>
                    <div className="flex justify-center my-2">
                        <table className="text-medium border-collapse border">
                            <tr><td className="border p-1">Top Speed</td><td className="border p-1">{CarDetail.data.topSpeed}</td></tr>
                            <tr><td className="border p-1">Seats</td><td className="border p-1">{CarDetail.data.seats}</td></tr>
                            <tr><td className="border p-1">Color</td><td className="border p-1">{CarDetail.data.color}</td></tr>
                            <tr><td className="border p-1">Fuel Type</td><td className="border p-1">{CarDetail.data.fuelType}</td></tr>
                            <tr><td className="border p-1">Cargo Capacity</td><td className="border p-1">{CarDetail.data.cargoCapacity}</td></tr>
                        </table>
                    </div>
                    <div className="text-xl py-3">{CarDetail.data.dayRate}$ per day</div>
                    <div>Name: {CarDetail.data.name}</div>
                    <div>Tel: {CarDetail.data.tel}</div>              
                    <div>Address: {CarDetail.data.address}</div>
                    <div className="flex justify-center my-2">
                    <Link href={`/reservations`}>
                    <button className="block rounded-md bg-gray-950 hover:bg-gray-600 px-3 py-2 shadow-sm text-white">
                    Make Reservation</button>
                    </Link>
                    </div>
                </div>

            </div>
        </main>
    )
}
/*
export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'},{cid:'004'}]
}*/
