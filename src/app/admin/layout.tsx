
import ReservationMenu from '@/components/ReservationMenu';

export default function ReservationLayout({children} : {children: React.ReactNode}){
    return (
        <div className='flex bg-grey-400'>
            <ReservationMenu/>
            {children}
        </div>
    );
}