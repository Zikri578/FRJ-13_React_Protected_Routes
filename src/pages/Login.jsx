import React from 'react'

export default function Login() {

    // untuk menghandle login
    const handleLogin = (e) => {

        // stop default form
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        // untuk memvalidasi
        if (!email || !password) {
            return alert("Silahkan Lengkapi Data Anda Terlebih Dahulu..");
        }

        // jika karakter password kurang dari 6
        if (password.length < 6) {
            return alert("Password anda kurang dari 6 karakter");
        }

        // store value ke local storage
        localStorage.setItem('user', JSON.stringify({
            email: email,
            password: password
        }))

        // reload page
        window.location.reload();

    }

    return (
        <main className='w-screen flex flex-col items-center mx-auto pt-20'>
            {/* {max - w - [1500px]} */}

            <form className='bg-white p-7 flex flex-col gap-5 shadow-lg rounded-md w-full max-w-[500px]' autoComplete='off' onSubmit={handleLogin}>

                <h1 className='text-black text-center'>Halaman Login</h1>

                <hr />

                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" id='email' className='h-12 px-3 border-[1px] border-gray-300 rounded-md' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id='password' name="password" className='h-12 px-3 border-[1px] border-gray-300 rounded-md' />
                </div>

                <div className='flex w-full gap-10 p-2 mt-6'>
                    <button className='flex-[1] h-12 w-[120px] bg-blue-500 text-white rounded-md ml-auto hover:bg-blue-700 text-center'>Login</button>
                    <button x className='flex-[1] h-12 w-[120px] bg-slate-500 text-white rounded-md ml-auto hover:bg-slate-700 text-center'>Sign Up</button>
                    {/* {background: #b4c9f1; } */}
                </div>

            </form>

        </main>
    )
}
