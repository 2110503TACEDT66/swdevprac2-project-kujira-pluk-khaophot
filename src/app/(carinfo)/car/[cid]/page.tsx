import Image from "next/image"
// import getCar from "@/libs/getCar"
import Link from "next/link"

export default async function CarDetailPage({params}: {params: {cid:string}}){

    // const carDetail = await getCar(params.cid)
    
    return(
        <main className="text-center p-5 mt-[100px]">
            This is car detail page
        </main>
    )
}
