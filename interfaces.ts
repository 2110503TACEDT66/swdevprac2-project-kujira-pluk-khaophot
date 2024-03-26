export interface ReservationItem{
    car: string
    returnDate: string
}
export interface CarItem {
    name: string,
    address: string,
    tel:string,
    car: string,
    dayRate: string,
    picture: string,
    topSpeed: string,
    seats: string,
    color: string,
    fuelType: string,
    cargoCapacity: string,
    picArray: string
}

export interface CarJson {
    count: number
    data: CarItem[]
}
