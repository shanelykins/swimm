export const LocationMap = () => {
  return (
    <div className="border-b border-gray-200 pb-12">
      <h2 className="text-2xl font-bold mb-6">Where you'll swim</h2>

      <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 rounded-xl overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,30 Q20,25 40,30 T80,30 L100,30 L100,100 L0,100 Z"
            fill="#93c5fd"
            opacity="0.3"
          />
          <path
            d="M0,50 Q30,45 60,50 T100,50 L100,100 L0,100 Z"
            fill="#60a5fa"
            opacity="0.2"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <svg className="w-8 h-8 text-sky-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-bold text-gray-900 mb-1">Exact location after booking.</p>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-xs font-bold">Maps</p>
            <p className="text-xs text-gray-600">Legal</p>
          </div>
        </div>
      </div>

      <p className="text-gray-900 mt-4 font-medium">Glendale, California • US</p>
    </div>
  );
};
