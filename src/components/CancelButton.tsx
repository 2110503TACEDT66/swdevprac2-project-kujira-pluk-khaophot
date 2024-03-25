'use client'
import deleteRent from "@/libs/deleteRent";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default function CancelButton({token,id} : {token:string,id:string}){
    return(
        <button 
            className="rounded-md bg-red-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-2 mx-3 w-fit absolute right-0"
            onClick={() => 
            {   deleteRent(token,id); 
                window.location.reload();
                redirect('/cart');
            }}
        >
            Cancel
        </button>
    )
}