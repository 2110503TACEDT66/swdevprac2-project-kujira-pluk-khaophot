import ReservationForm from "@/components/ReservationForm";
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import { dbConnect } from '@/db/dbConnect';
// import Rent from '@/db/models/Rent';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default function Reservations() {


    const addReservation = async (addReservationForm:FormData) =>{
        "use server"
        const rentDate = addReservationForm.get("returnDate")
        const user = addReservationForm.get("user")
        const car = addReservationForm.get("car")
        const session = await getServerSession(authOptions)
        if(!session || !session.user.token) return null
        const profile = await getUserProfile(session.user.token)
        var createAt = new Date(profile.data.createAt);
        
        try {
        await dbConnect()
        const rent = await Rent.create({
            "rentDate" : rentDate ,
            "user" :  session.user,
            "car" : car
        })
    }
    catch (error) {
        console.log(error)
    }
    revalidateTag("cars")
    redirect("/car")
        }
    return (
        <main>
<ReservationForm>
</ReservationForm>
        </main>
    );
}
