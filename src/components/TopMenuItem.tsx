import Link from 'next/link'

export default function TopMenuItem ({title, pageRef}: {title:string, pageRef:string}){
    return(
        <Link className='w-[120px] text-center mt-auto mb-auto font-mono text-sm text-grey-500 mx-[20px] text-xl justify-center
        hover:text-slate-500' href={pageRef}>
            {title}
        </Link>
    )
}