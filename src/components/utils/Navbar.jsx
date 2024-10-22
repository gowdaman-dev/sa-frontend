import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='flex 00w-screen items-center justify-center'>
        <div className="w-[90%] flex items-center justify-between py-4">
            <div className="logo font-black uppercase">
                Learno<span className='text-sky-400 text-lg'>pedia</span>
            </div>
            <div className="flex gap-4">
                <Link
                href={'/'}
                >
                    Home
                </Link>
                <Link
                href={'/'}
                >
                    Coures
                </Link>
                <Link
                href={'/'}
                >
                    Services
                </Link>
            </div>
            <div className="login">
                <button>Signup / Signin</button>
            </div>
        </div>
    </nav>
)
}

export default Navbar