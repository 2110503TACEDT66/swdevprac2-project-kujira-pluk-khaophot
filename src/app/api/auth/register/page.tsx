'use client'
import { useState } from "react";

export default function register(){
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState('');
    
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Form submitted:', { fullName, email, password });
        setFullName('');
        setEmail('');
        setPassword('');
        setTel('');
    };
    
    const isFormValid = fullName !== '' && email !== '' && password !== '';

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded w-96">
            <h2 className="text-4xl font-medium mb-4 text-slate-800">Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block mb-1 text-slate-500 font-semibold">Full Name</label>
                    <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2 border rounded bg-slate-100"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tel" className="block mb-1 text-slate-500 font-semibold">Tel</label>
                    <input
                    type="tel"
                    id="tel"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    className="w-full p-2 border rounded bg-slate-100"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 text-slate-500 font-semibold">Email</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded bg-slate-100"
                    required
                    />
                </div>
                <div className="mb-10">
                    <label htmlFor="password" className="block mb-1 text-slate-500 font-semibold">Password</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded bg-slate-100"
                    required
                    />
                </div>
                <button type="submit" disabled={!isFormValid} className={`w-full py-2 ${isFormValid ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed' } rounded`}>
                    Sign Up
                </button>
            </form>
        </div>
        </div>
    );
}
