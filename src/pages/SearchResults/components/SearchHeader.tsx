import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export const SearchHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44Z" fill="#0EA5E9"/>
            <path d="M24 12C18.477 12 14 16.477 14 22C14 27.523 18.477 32 24 32C29.523 32 34 27.523 34 22C34 16.477 29.523 12 24 12Z" fill="white"/>
            <path d="M20 26C20 28.209 21.791 30 24 30C26.209 30 28 28.209 28 26H20Z" fill="#0EA5E9"/>
          </svg>
        </Link>

        <div className="flex items-center gap-4 flex-1 max-w-2xl mx-8">
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 gap-4 flex-1">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Los Angeles, CA"
                className="w-full outline-none text-sm font-medium"
              />
            </div>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Anyday"
                className="w-full outline-none text-sm"
              />
            </div>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Anytime"
                className="w-full outline-none text-sm"
              />
            </div>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex-1">
              <input
                type="text"
                placeholder="1 guest"
                className="w-full outline-none text-sm"
              />
            </div>
            <button className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

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
