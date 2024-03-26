'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Select, MenuItem} from '@mui/material'
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function LocationDateReserve({onDateChange} : {onDateChange : Function}){

    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
   
    return (
        <div className="bg-slate-100 rounded-lg w-fit px-10 py-5
        flex flex-row">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white"
                value={reserveDate}
                onChange={(value)=> {setReserveDate(value); onDateChange(value)}}
                />
            </LocalizationProvider>
            
            
        </div>
    )
}