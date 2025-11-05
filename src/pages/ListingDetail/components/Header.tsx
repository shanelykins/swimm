import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="https://i.imgur.com/bEFjGvP.png" alt="Swimply" className="h-10" />
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
