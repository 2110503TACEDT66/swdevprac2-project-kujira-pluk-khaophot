export default async function getRents(token: string) {
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/rents`, {
        method: "GET",
        headers: {
            authorization : `Bearer ${token}`
        }
    })

    if(!response.ok){
        throw new Error("Failed to get rents")
    }
    return await response.json()
}