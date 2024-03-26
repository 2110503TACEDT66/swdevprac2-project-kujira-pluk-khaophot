import EditMenu from "@/components/EditMenu";

export default function ReservationLayout({children} : {children: React.ReactNode}){
    return (
        <div className='flex bg-grey-400'>
            <EditMenu/>
            {children}
        </div>
    );
}