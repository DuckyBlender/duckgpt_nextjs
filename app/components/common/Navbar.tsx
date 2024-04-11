import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-300 shadow-lg">
            <div className="flex-1 px-2 lg:flex-none">
                <a className="text-lg font-bold">DuckGPT</a>
            </div>
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Models</div>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li key="racist"><Link href="/chat?model=racist">Racist</Link></li>
                            <li key="caveman"><Link href="/chat?model=caveman">Caveman</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost rounded-btn">Main</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar