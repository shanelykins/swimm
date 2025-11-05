import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export const SearchHeader = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src="https://i.imgur.com/bEFjGvP.png" alt="Swimply" className="h-10" />
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
