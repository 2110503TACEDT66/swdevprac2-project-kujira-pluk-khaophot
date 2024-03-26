import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"
import updateCar from "@/libs/updateCar"

export default async function EditCar(){

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const update= async (addCarForm:FormData) => {
        "use server"
        const cid= addCarForm.get('id')
        const name = addCarForm.get("name")
        const address = addCarForm.get("address")
        const tel = addCarForm.get("tel")
        const carModel = addCarForm.get("carModel")
        const dayRate = addCarForm.get("dayRate")
        const picture = addCarForm.get("picture")
        const picture1 = addCarForm.get("picture1")
        const picture2 = addCarForm.get("picture2")
        const picture3 = addCarForm.get("picture3")
        const topSpeed = addCarForm.get("topSpeed")
        const seats = addCarForm.get("seats")
        const color = addCarForm.get("color")
        const fuelType = addCarForm.get("fuelType")
        const cargoCapacity = addCarForm.get("cargoCapacity")
        let picArray = []
        picArray.push(picture1)
        picArray.push(picture2)
        picArray.push(picture3)
        
        try {
            const car ={
                "name": name,
                "address": address,
                "tel": tel,
                "car": carModel,
                "dayRate": dayRate,
                "picture": picture,
                "topSpeed": topSpeed,
                "seats": seats,
                "color": color,
                "fuelType": fuelType,
                "cargoCapacity": cargoCapacity,
                "picArray": picArray
            }
            console.log(car)
           await updateCar(session?.user.token,car,cid)
        } catch (error) {
            console.log(error)
        }
        revalidateTag("cars")
        redirect('/car')
    }
    

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);
    return(

        <main className="w-5/6 h-screen">   
        <div className="bg-slate-100 m-5 p-5 rounded w-[60%] ml-auto mr-auto mt-[150px] w-fit">
            <table className="table-auto border-seperate border-spacing-4 w-1/5">
                <tbody>

                    <tr><td>Email: </td><td className="text-red-700">{profile.data.email}</td></tr>
                    <tr><td>Tel.</td><td className="text-red-700">{profile.data.tel}</td></tr>
                </tbody>
            </table>
            {
                (profile.data.role == "admin")?
                <form action={update}>
                    <div className="text-xl text-blue-700 pt-[25px]">Create Car Model</div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="id">CarId</label>
                        <input type="text" required id = "id" name="id" placeholder="CarId"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name</label>
                        <input type="text" required id = "name" name="name" placeholder="Owner name"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="address">Address</label>
                        <input type="text" required id = "address" name="address" placeholder="Car address"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-centerw-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Tel</label>
                        <input type="text" required id = "tel" name="tel" placeholder="Telephone number"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-centerw-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="carModel">Car model</label>
                        <input type="text" required id = "carModel" name="carModel" placeholder="Car model"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture">Picture</label>
                        <input type="text" required id = "picture" name="picture" placeholder="URL"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture1">Picture (front)</label>
                        <input type="text" required id = "picture1" name="picture1" placeholder="URL"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture2">Picture (back)</label>
                        <input type="text" required id = "picture2" name="picture2" placeholder="URL"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="picture3">Picture (side)</label>
                        <input type="text" required id = "picture3" name="picture3" placeholder="URL"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="color">Color</label>
                        <input type="text" required id = "color" name="color" placeholder="Color"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2">
                        <label className="w-auto block text-gray-700 pr-4" htmlFor="fuelType">Fuel Type</label>
                        <input type="text" required id = "fuelType" name="fuelType" placeholder="Fuel Type"
                        className="bg-white border-2 border-gray-200 rounded w-full p-2
                        text-gray-700 focus:outline-none focus:border-blue-400"/>
                    </div>
                    <div className="flex items-center w-auto my-2 justify-between">
                        <div className="flex items-center">
                            <label className="w-auto block text-gray-700 pr-4" htmlFor="seats">Seats</label>
                            <input type="number" required id = "seats" name="seats" placeholder="4"
                            min={0} max={50}
                            className="bg-white border-2 border-gray-200 rounded w-auto p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        <div className="flex items-center">
                            <label className="w-auto block text-gray-700 pr-4" htmlFor="topSpeed">Top Speed</label>
                            <input type="number" required id = "topSpeed" name="topSpeed" placeholder="(mph)"
                            min={0} max={500}
                            className="bg-white border-2 border-gray-200 rounded w-auto p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        <div className="flex items-center">
                            <label className="w-auto block text-gray-700 pr-4" htmlFor="cargoCapacity">Cargo capacity</label>
                            <input type="number" required id = "cargoCapacity" name="cargoCapacity" placeholder="(cu ft.)"
                            min={0} max={500}
                            className="bg-white border-2 border-gray-200 rounded w-auto p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                        <div className="flex items-center">
                            <label className="w-auto block text-gray-700 pr-4" htmlFor="dayRate">Rate</label>
                            <input type="number" required id = "dayRate" name="dayRate" placeholder="Daily Rate (insurance included)"
                            min={0} max={100000}
                            className="bg-white border-2 border-gray-200 rounded w-auto p-2
                            text-gray-700 focus:outline-none focus:border-blue-400"/>
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Edit Car</button>
                </form>
                : null
            }
        </div>
    </main>
    )
}