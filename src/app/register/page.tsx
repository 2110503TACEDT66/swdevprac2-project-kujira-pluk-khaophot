import { dbConnect } from "@/db/dbConnect"
import User from "@/db/models/User"
import { redirect } from "next/navigation"
const bcrypt = require('bcryptjs');

export default function register(){
    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [tel, setTel] = useState('');
    
    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault();
    //     console.log('Form submitted:', { fullName, email, password,tel });
        
    //     setFullName('');
    //     setEmail('');
    //     setPassword('');
    //     setTel('');
    // };
    
    const addUser= async (addUserForm:FormData) => {
        "use server"
        const name = addUserForm.get("fullName")
        const email = addUserForm.get("email")
        let password = addUserForm.get("password")
        const tel = addUserForm.get("tel")
        
        try {
            await dbConnect()
            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password,salt);
            const user = await User.create({
                "name" : name,
                "email" : email,
                "password" : password,
                "tel": tel,
                "role" : "user"
            })
        } catch (error) {
            console.log(error)
        }
        // revalidateTag("cars")
        redirect('/')
    }

    // const isFormValid = fullName !== '' && email !== '' && password !== '';

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded w-96">
            <h2 className="text-4xl font-medium mb-4 text-slate-800">Create Account</h2>
            <form action = {addUser}>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block mb-1 text-slate-500 font-semibold">Full Name</label>
                    <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full p-2 border rounded bg-slate-100"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tel" className="block mb-1 text-slate-500 font-semibold">Tel</label>
                    <input
                    type="tel"
                    id="tel"
                    name="tel"
                    className="w-full p-2 border rounded bg-slate-100"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 text-slate-500 font-semibold">Email</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border rounded bg-slate-100"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})?"

                    required
                    />
                </div>
                <div className="mb-10">
                    <label htmlFor="password" className="block mb-1 text-slate-500 font-semibold">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 border rounded bg-slate-100"
                    required
                    />
                </div>
                <button type="submit" className={`w-full py-2 bg-blue-500 text-white hover:bg-blue-600 rounded`}>
                    Sign Up
                </button>
            </form>
        </div>
        </div>
    );
}
