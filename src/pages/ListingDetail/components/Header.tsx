import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#0EA5E9"/>
            <path d="M20 8C14.477 8 10 12.477 10 18C10 23.523 14.477 28 20 28C25.523 28 30 23.523 30 18C30 12.477 25.523 8 20 8Z" fill="white"/>
            <path d="M16 22C16 24.209 17.791 26 20 26C22.209 26 24 24.209 24 22H16Z" fill="#0EA5E9"/>
            <text x="42" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#0EA5E9">Swimply</text>
          </svg>
        </Link>

        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};
