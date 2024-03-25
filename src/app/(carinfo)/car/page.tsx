import Image from 'next/image'
import styles from '../../../components/carbanner.module.css'
import CarCatalog from "@/components/CarCatalog"
import getCars from "@/libs/getCars"

export default async function car() {
    const cars = await getCars()
    return(
        <main className="text-center mt-50 font-mono">
            <CarCatalog carJson={cars}/>
        </main>
    )
}
