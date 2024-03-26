import Link from "next/link";

export default function EditMenu(){
    return (
    <div className="w-1/6 h-screen flex flex-col items-center mt-[150px]">
        <a href="/admin/addCar" className="text-center w-full">
            <button className="bg-blue-500 hover:bg-blue-700 text-white 
            font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 
            ease-in-out transform hover:scale-105 focus:outline-none">
                Add Car
            </button>
        </a>
        <a href="/admin/editCar" className="mt-4 text-center w-full">
            <button className="bg-gray-700 hover:bg-gray-800 text-white 
            font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 
            ease-in-out transform hover:scale-105 focus:outline-none">
                Edit Car
            </button>
        </a>
    </div>
        
    );
}