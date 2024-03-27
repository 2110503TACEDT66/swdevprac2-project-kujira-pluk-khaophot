export interface ReservationItem{
    rentDate: string
    user: string
    car: string
}
export interface CarItem {
    id:string,
    name: string,
    address: string,
    tel:string,
    car: string,
    dayRate: number,
    picture: string,
    topSpeed: number,
    seats: number,
    color: string,
    fuelType: string,
    cargoCapacity: number,
    picArray: string[]
}

export interface CarJson {
    count: number
    data: CarItem[]
}

export interface RentJson{
    count: number
    data: RentItem[]
}

export interface RentItem{
    _id: string,
    rentDate: string
    user: string
    car: CarItem
}