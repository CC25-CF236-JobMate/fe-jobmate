import React from 'react';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  return (
    <header className="bg-white py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="DisaBisa Logo" className="h-15" />
        </div>

        {/* Center: Menu */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-6 text-gray-700 font-medium text-sm">
          <a href="/" className="hover:text-blue-600">Tentang JobMate</a>
          <a href="/jobsearch" className="hover:text-blue-600">JobSearch</a>
          <a href="/cvreview" className="hover:text-blue-600">CV Review</a>
          <div className="relative group">
            <button className="hover:text-blue-600">Layanan ▾</button>
            <div className="absolute hidden group-hover:block mt-1 bg-white shadow rounded-2xl text-sm p-2 z-10 w-50">
              <a href="#" className="block px-4 py-1 hover:bg-blue-50">JobChat Mate Bot</a>
              <a href="#" className="block px-4 py-1 hover:bg-blue-50">AI Interview</a>
              <a href="#" className="block px-4 py-1 hover:bg-blue-50">JobModul</a>
            </div>
          </div>
          <a href="#" className="hover:text-blue-600">Kerjasama</a>
        </nav>

        {/* Right: Conditional */}
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <button className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
              ✨ Try Premium
            </button>
            <img
              src="https://i.pravatar.cc/32"
              alt="User Avatar"
              className="h-8 w-8 rounded-full object-cover"
            />
            <button className="text-xl">▾</button>
          </div>
        ) : (
          <div className="flex items-center space-x-4 text-sm font-medium">
            <a href="/login" className="text-gray-800 hover:text-blue-600">Masuk</a>
            <a href="/signup" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition">Daftar</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
