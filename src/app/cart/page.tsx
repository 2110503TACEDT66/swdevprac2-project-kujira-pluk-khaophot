import getRents from '@/libs/getRents'
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import ReservationCart from "@/components/ReservationCart"

export default async function cart(){

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    // console.log(profile.data._id)

    const rents = await getRents(session.user.token)
    // console.log(rents)

    return(
        <main>
            <ReservationCart rentJson={rents}/>            
        </main>
    )
}