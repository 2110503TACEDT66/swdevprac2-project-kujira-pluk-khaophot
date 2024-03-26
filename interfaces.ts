export interface ReservationItem{
    car: string
    returnDate: string
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