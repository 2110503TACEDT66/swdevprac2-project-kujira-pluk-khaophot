import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { Link } from '@mui/material'
import { useRouter } from 'next/navigation';
import PersonIcon from '@mui/icons-material/Person';
import getUserProfile from '@/libs/getUserProfile'

export default async function TopMenu(){
    const session = await getServerSession(authOptions)

    return (
        <div className='h-[50px] bg-inherit absolute top-5 inset-x-0 z-30 flex flex-row mx-10'>
            <a href="/">
                <Image src={'/img/logo.png'} className='h-[70%] w-auto absolute left-0 align-bottom top-[5px]'   width={0} height={0} sizes='100vh' alt='logo'/>
            </a>

            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <TopMenuItem title='Vehicles' pageRef='/car'/>
                <TopMenuItem title='Reservation' pageRef='/reservations'/>
                <TopMenuItem title='Cart' pageRef='/cart'/>
            </div>
            
            <div>
                {
                    session? <Link href="/api/auth/signout">
                                <div className='flex items-center absolute right-0 h-full px-2 text-grey-500 text-md justitfy-center'>
                                    <div className='px-4'>Sign-Out</div>
                                     <PersonIcon color="disabled"></PersonIcon>
                                </div>
                        </Link>
                        : 
                        <div className='absolute right-0 top-[5px]'>
                            <Link href="/api/auth/register" className='px-5'>    
                                Register
                            </Link>
                            <Link href="/api/auth/signin" className='pr-5'>    
                             Sign-In
                            </Link>
                            <PersonIcon color="disabled"></PersonIcon>
                        </div>
                        
                }
            </div>
        </div>
    )
}