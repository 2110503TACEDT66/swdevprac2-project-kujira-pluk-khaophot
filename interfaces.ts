export interface ReservationItem{
    rentDate: string
    user: string
    car: string
    
}
export interface CarItem {
    _id: string,
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
