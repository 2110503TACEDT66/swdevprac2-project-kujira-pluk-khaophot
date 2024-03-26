import Image from 'next/image'
import styles from './carbanner.module.css'

export default function ProductCard ({carName, ownername, ownerAddress, carId, imgSrc}:{ carName:string, ownername:string, ownerAddress:string, carId: string, imgSrc:string}) {
    
    return (
        <div className={styles.carbanner}>
            <Image src={imgSrc} alt='cover' fill={true} style={{objectFit:"cover"}}/>
            <div className={styles.carbannerText}>
                <h1 className='text-4xl font-mono text-white font-semibold'>{carName}</h1>
                <h3 className='text-xl font-mono text-white font-semibold'>{ownername}, {ownerAddress}</h3>
                <a href={`/car/${carId}`}>
                    <button className='h-[10%] text-sm rounded-md z-30 bg-white 
                    hover:bg-zinc-400 my-2 px-3 py-2 shadow-sm text-black'
                    >Show more details</button>
                </a>
            </div>
        </div>
    )
}