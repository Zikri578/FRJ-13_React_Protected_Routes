import React from 'react'

export default function Register() {

    // untuk menghandle register
    const handleRegister = (index) => {

        // stop default form
        index.preventDefault();

        const email = index.target.email.value;
        const password = index.target.password.value;
        const phone = index.target.confirm.value;
        const date = index.target.date.value;

        // untuk validasi 
        if (!email || !password || !phone || !date) {
            return alert("Silahkan lengkapi data anda..");
        }

        // jika password dan confirm kurang dari 6 
        if (password.length < 6) {
            return alert("Password anda kurang dari 6 atau password tidak sesuai");
        }

        // store value ke local storage
        localStorage.setItem('regi', JSON.stringify({
            email: email,
            password: password,
            phone: phone,
            date: date
        }))

        // reload page
        window.location.reload();
    }

    return (
        <main className='w-screen flex flex-col  items-center mx-auto pt-1'>
            {/* {max - w - [1500px]} */}
            {/* bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNdOA-nXNXrHOfrVslCWaSXi3bL8fIxE2sCg&usqp=CAU")] */}

            <form className='bg-white p-7 flex flex-col gap-5 shadow-lg rounded-md w-full max-w-[500px]' autoComplete='off' onSubmit={handleRegister}>
                <h1 className='text-black text-center'>Halaman Sign Up</h1>
                <hr />

                <div class="form-group" className='flex flex-col gap-2'>
                    <label htmlFor="email" class="form-control-label">Email</label>
                    <input class="form-control" type="email" placeholder="Email" id="email" className='h-12 px-3 border-[1px] border-gray-300 rounded-md' />
                </div>

                <div class="form-group" className='flex flex-col gap-2'>
                    <label htmlFor="password" class="form-control-label">Password</label>
                    <input class="form-control" type="password" placeholder="Password" id="password" className='h-12 px-3 border-[1px] border-gray-300 rounded-md' />
                </div>

                <div class="form-group" className='flex flex-col gap-2'>
                    <label htmlFor="phone" class="form-control-label">Phone</label>
                    <input class="form-control" type="tele" placeholder="40-(770)-888-444" id="phone" className='h-12 px-3 border-[1px] border-gray-300 rounded-md' />
                </div>

                <div class="form-group" className='flex flex-col gap-2'>
                    <label htmlFor="date" class="form-control-label">Date</label>
                    <input class="form-control" type="date" placeholder="2018-11-23" id="date" className='h-12 px-3 border-[1px] border-gray-300 rounded-md' />
                </div>

                <div class="form-group" className='flex w-full gap-10 p-2 mt-6'>
                    <button className='flex-[1] h-12 w-[120px] bg-slate-500 text-white rounded-md ml-auto hover:bg-slate-700'>Sign Up</button>
                </div>

            </form>

        </main>
    )
}
