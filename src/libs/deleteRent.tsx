export default async function deleteRent(token: string , rentID: string) {
    const response = await fetch (`${process.env.BACKEND_URL}/api/v1/rents/${rentID}`,{
        method: "DELETE",
        headers: {
            authorization : `Bearer ${token}`
        }
    })
    
    if(!response.ok){
        throw new Error("Failed to get delete rent")
    }
    return await response.json()
}