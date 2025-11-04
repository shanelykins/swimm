export const BookingCard = () => {
  return (
    <div className="border border-gray-300 rounded-xl p-6 shadow-lg">
      <div className="mb-6">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-3xl font-bold">${45.36}</span>
          <span className="text-gray-600">/hr</span>
          <span className="text-gray-500 line-through ml-2">$50.40/hr</span>
        </div>
        <button className="text-sm underline font-medium hover:text-gray-900">
          Show pricing details
        </button>
      </div>

      <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-2">
          <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <div>
            <div className="font-bold text-sm mb-1">Weekday discount</div>
            <div className="text-sm text-sky-600">
              This space is priced 10% cheaper on weekdays!
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
            Date
          </label>
          <input
            type="text"
            placeholder="Add date"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
              Start Time
            </label>
            <input
              type="text"
              placeholder="Add time"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
              End Time
            </label>
            <input
              type="text"
              placeholder="Add time"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-2 uppercase">
            Guests
          </label>
          <input
            type="text"
            placeholder="1 adult"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <button className="w-full bg-gray-300 text-gray-500 font-bold py-4 rounded-lg cursor-not-allowed">
        Continue
      </button>
    </div>
  );
};
