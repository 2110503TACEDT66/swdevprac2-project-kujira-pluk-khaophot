export interface ReservationItem{
    carId: string
    carModel: string
    numOfDays: number
    pickupDate: string
    pickupLocation: string
    returnDate: string
    returnLocation: string
}
export interface CarItem {
    _id: string
    name: string
    address: string
    car: string
    picture: string
}

export interface CarJson {
    count: number
    data: CarItem[]
}