import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex justify-between p-5 max-w-7xl mx-auto'>
            <div className='flex items-center space-x-5'>
                <Link href="/">
                    <img
                        className='w-44 object-contain cursor-pointer'
                        src="data:image/png;base64,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" alt="" />
                </Link>
                <div className='hidden md:inline-flex space-x-5'>
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
                </div>
            </div>

            <div className='flex items-center space-x-5 text-green-600'>
                <h3>Sign In</h3>
                <h3 className='border px-4 py-1 rounded-full border-green-600'>Get Started</h3>
            </div>
        </header>
    )
}

export default Header