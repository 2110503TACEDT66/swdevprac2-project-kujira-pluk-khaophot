"use client"
import { useState } from 'react'
import Image from 'next/image'

export default function CarSlideShow({ picArray }: { picArray: Array<string> }) {
    const [index,setIndex] = useState(99)
    return (
        <div className='block w-full relative'>
            <Image src={picArray[index%3]}
            alt='Product Picture'
            width={0} height={0} sizes="100vm"
            className="rounded-lg w-full h-[650px]"/>
            
            <button className='text-sm z-30 bg-slate-50 rounded-full
            px-1 py-1 z-30 text-black absolute top-1/2 left-1'
            onClick={()=>setIndex(index-1)}>&lt;</button>
            
            <button className='text-sm z-30 bg-slate-50 rounded-full
            px-1 py-1 z-30 text-black absolute top-1/2 right-1'
            onClick={()=>setIndex(index+1)}>&gt;</button>
        </div>
    )
}
