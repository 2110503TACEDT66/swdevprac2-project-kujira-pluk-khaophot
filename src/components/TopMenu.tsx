import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import PersonIcon from '@mui/icons-material/Person';
import getUserProfile from '@/libs/getUserProfile'

export default async function TopMenu(){
    const session = await getServerSession(authOptions)
    if(session){
        var profile = await getUserProfile(session.user.token)
    }
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
                    session? 
                        <div className='absolute right-0 flex w-fit top-[15px] justify-center items-center'>
                            {
                                (profile.data.role == "admin")?
                                <a href="/admin/addCar" className='text-grey-500 text-md font-mono'>Admin</a>
                                : ''
                            }
                            <a href="/api/auth/signout">
                                <div className='flex h-full px-2 text-grey-500 text-md font-mono'>
                                    <div className='px-4'>Sign-Out</div>
                                     <PersonIcon color="disabled"></PersonIcon>
                                </div>
                            </a>
                        </div>

                        : 
                        <div className='absolute right-0 top-[5px] font-mono'>
                            <a href="/register" className='px-5'>    
                                Register
                            </a>
                            <a href="/api/auth/signin" className='pr-5'>    
                             Sign-In
                            </a>
                            <PersonIcon color="disabled"></PersonIcon>
                        </div>    
                }
            </div>
        </div>
    )
}