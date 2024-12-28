import React from "react"

function Home() {
    return (
        <>
            <div>
                {/* Header */}
                <header className="relative">
                    <nav className="fixed w-full z-50 bg-gradient-to-b from-black/70 to-transparent">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                {/* Logo */}
                                <div className="flex-shrink-0">
                                    <h1 className="text-red-600 text-2xl sm:text-3xl font-bold">NETFLIX</h1>
                                </div>

                                {/* Navigation Links - Desktop */}
                                <div className="hidden md:flex items-center space-x-8">
                                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                                    <a href="#" className="text-white hover:text-gray-300">TV Shows</a>
                                    <a href="#" className="text-white hover:text-gray-300">Movies</a>
                                    <a href="#" className="text-white hover:text-gray-300">New & Popular</a>
                                    <a href="#" className="text-white hover:text-gray-300">My List</a>
                                </div>

                                {/* Mobile Menu Button */}
                                <div className="md:hidden">
                                    <button className="text-white p-2">
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"></path>
                                        </svg>
                                    </button>
                                </div>

                                {/* Right Side Icons */}
                                <div className="hidden md:flex items-center space-x-4">
                                    <button className="p-2">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </button>
                                    <div className="w-8 h-8 rounded bg-gray-600"></div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Mobile Menu (Hidden by default) */}
                    <div className="hidden md:hidden bg-black/90 fixed w-full z-40">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="block px-3 py-2 text-white">Home</a>
                            <a href="#" className="block px-3 py-2 text-white">TV Shows</a>
                            <a href="#" className="block px-3 py-2 text-white">Movies</a>
                            <a href="#" className="block px-3 py-2 text-white">New & Popular</a>
                            <a href="#" className="block px-3 py-2 text-white">My List</a>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative h-[80vh]">
                    <div className="absolute inset-0">
                        <img src="/api/placeholder/1920/1080" alt="Featured Movie" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                        <div className="max-w-lg">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Movie Title</h2>
                            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="flex space-x-4">
                                <button className="bg-white text-black px-8 py-2 rounded flex items-center hover:bg-gray-300">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M4 4l12 6-12 6V4z"></path>
                                    </svg>
                                    Play
                                </button>
                                <button className="bg-gray-500/70 px-8 py-2 rounded flex items-center hover:bg-gray-500/50">
                                    More Info
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <main className="relative z-10 -mt-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        {/* Trending Now */}
                        <section>
                            <h3 className="text-xl font-semibold mb-4">Trending Now</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {[1, 2, 3, 4, 5].map((index) => (
                                    <div key={index} className="aspect-video bg-gray-800 rounded-sm transform hover:scale-105 transition duration-300">
                                        <img src={`/api/placeholder/300/169`} alt={`Movie ${index}`} className="w-full h-full object-cover rounded-sm" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Continue Watching */}
                        <section>
                            <h3 className="text-xl font-semibold mb-4">Continue Watching</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {[6, 7, 8, 9, 10].map((index) => (
                                    <div key={index} className="aspect-video bg-gray-800 rounded-sm transform hover:scale-105 transition duration-300">
                                        <img src={`/api/placeholder/300/169`} alt={`Movie ${index}`} className="w-full h-full object-cover rounded-sm" />
                                        <div className="h-1 bg-red-600" style={{ width: `${Math.random() * 100}%` }}></div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Popular on Netflix */}
                        <section>
                            <h3 className="text-xl font-semibold mb-4">Popular on Netflix</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {[11, 12, 13, 14, 15].map((index) => (
                                    <div key={index} className="aspect-video bg-gray-800 rounded-sm transform hover:scale-105 transition duration-300">
                                        <img src={`/api/placeholder/300/169`} alt={`Movie ${index}`} className="w-full h-full object-cover rounded-sm" />
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-16 py-8 bg-black/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {/* Navigation Links */}
                            <div>
                                <h4 className="text-gray-400 font-semibold mb-4">Navigation</h4>
                                <ul className="space-y-2">
                                    {['Home', 'TV Shows', 'Movies', 'New & Popular'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-gray-500 hover:text-gray-300">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal Links */}
                            <div>
                                <h4 className="text-gray-400 font-semibold mb-4">Legal</h4>
                                <ul className="space-y-2">
                                    {['Privacy', 'Terms of Use', 'Cookie Preferences', 'Corporate Information'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-gray-500 hover:text-gray-300">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Help Center Links */}
                            <div>
                                <h4 className="text-gray-400 font-semibold mb-4">Help Center</h4>
                                <ul className="space-y-2">
                                    {['Account', 'Media Center', 'Investor Relations', 'Jobs'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-gray-500 hover:text-gray-300">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact Links */}
                            <div>
                                <h4 className="text-gray-400 font-semibold mb-4">Contact Us</h4>
                                <ul className="space-y-2">
                                    {['Help Center', 'FAQ', 'Ways to Watch', 'Speed Test'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="text-gray-500 hover:text-gray-300">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 text-center text-gray-500">
                            <p>&copy; 2024 Netflix Clone. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home;