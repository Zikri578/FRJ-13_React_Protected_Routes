import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Dashboard() {

    const [user, setUser] = useState();

    useEffect(() => {
        const hasil = JSON.parse(localStorage.getItem("user"))

        setUser({
            email: hasil.email
        })
        // console.info(hasil);

    }, [])

    // logout
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }


    return (
        <div className='w-screen min-h-screen flex'>
            {/* Left Side */}
            <aside className='w-[250px] h-screen flex flex-col bg-white shadow-lg'>

                <div className='w-full h-[100px] flex flex-col justify-center items-center bg-gradient-to-tr from-slate-400 to-slate-500'>
                    <img src="https://edukasi.pajak.go.id/images/NagaraDanaRakca.png" alt="" className='h-[100px] w-[100px]' />
                </div>

                <h1 className='text-center text-black'>Welcome, <b className='text-xl'>{user?.email}</b></h1>
                <nav className='w-full flex-1'>
                    <Link to={"/"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Dashboard</Link>
                    <Link to={"/"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Bandara</Link>
                    <Link to={"/"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Penerbangan</Link>
                    <Link to={"/"} className="w-full h-12 flex items-center px-4 hover:bg-slate-100"> Penumpang</Link>
                    <Link onClick={handleLogout} className="w-full h-12 flex items-center px-4 hover:bg-slate-100">Logout</Link>
                </nav>
            </aside>
            {/* End Left Side */}
        </div >
    )
}
