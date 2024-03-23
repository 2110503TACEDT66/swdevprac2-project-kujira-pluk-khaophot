import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'
import { useRouter } from 'next/navigation';
import PersonIcon from '@mui/icons-material/Person';

export default async function TopMenu(){
    const session = await getServerSession(authOptions)

    return (
        <div className='h-[50px] bg-white fixed top-5 inset-x-0 z-30 flex justify-between mx-20'>
            <a href="/">
                <Image src={''} className='h-[100%] w-auto' alt='logo'/>
            </a>

            <div>
                <TopMenuItem title='Vehicles' pageRef='/car'/>
                <TopMenuItem title='Reservation' pageRef='/reservations'/>
                <TopMenuItem title='Cart' pageRef='/cart'/>
            </div>
            
            <div>
                {
                    session? <Link href="/api/auth/signout">
                        <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                        Sign-Out of {session.user?.name}</div></Link>
                        : <Link href="/api/auth/signin">    
                            <PersonIcon color="disabled">add_circle</PersonIcon>
                        </Link>
                }
            </div>
        </div>
    )
}