export default function Navbar() {
    return (
        <section className="">
            <nav className="bg-white border-gray-200 h-16 md:h-16 border-b relative">
                <div className="h-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                    <a href="/" className="flex items-center text-3xl font-bold">LOGO</a>
                    <div className="flex items-center md:order-2 relative">
                        <a href="#/profile" className="flex mr-1 text-sm rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 w-7 h-7">
                                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-white" aria-controls="navbar-user" aria-expanded="false">
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" className="w-6 h-6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden w-full h-full md:flex md:items-center md:justify-between md:w-auto md:order-1">
                        <ul className="h-full flex flex-col font-medium py-3 md:py-0 bg-white md:bg-transparent border border-gray-100 rounded-lg md:flex-row md:space-x-6 md:border-0">
                            <li className="flex items-center h-full"><a aria-current="page" href="/" className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 capitalize w-full flex items-center pl-4 py-2">home</a>
                            </li>
                            <li className="flex items-center h-full"><a aria-current="page" href="/notice" className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 capitalize w-full flex items-center pl-4 py-2">notice</a>
                            </li>
                            <li className="flex items-center h-full"><a aria-current="page" href="/about" className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 capitalize w-full flex items-center pl-4 py-2">about</a>
                            </li>
                            <li className="flex items-center h-full"><a aria-current="page" href="/contact" className="text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-500 capitalize w-full flex items-center pl-4 py-2">contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </section>
    )
}