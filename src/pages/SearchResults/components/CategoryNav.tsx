import { SlidersHorizontal } from "lucide-react";

const categories = [
  { id: 'all', label: 'All spaces', icon: '🏊' },
  { id: 'pools', label: 'Pools', icon: '🏊' },
  { id: 'igloos', label: 'Igloos', icon: '⛺', badge: 'NEW' },
  { id: 'pet-parks', label: 'Pet Parks', icon: '🐕' },
  { id: 'pickleball', label: 'Pickleball', icon: '🎾' },
  { id: 'tennis', label: 'Tennis', icon: '🎾' },
  { id: 'hoops', label: 'Hoops', icon: '🏀' },
  { id: 'mansions', label: 'Mansions', icon: '🏰' },
  { id: 'discover', label: 'Discover', icon: '🔍' },
];

const amenities = [
  { id: 'indoor-pool', label: 'Indoor Pool', icon: '🏠' },
  { id: 'hot-tub', label: 'Hot Tub', icon: '♨️' },
  { id: 'sauna', label: 'Sauna', icon: '🧖' },
  { id: 'cold-plunge', label: 'Cold Plunge', icon: '❄️' },
  { id: 'fire-pit', label: 'Fire Pit', icon: '🔥' },
  { id: 'cave', label: 'Cave', icon: '🏔️' },
];

export const CategoryNav = () => {
  return (
    <div className="border-b border-gray-200 bg-white sticky top-[72px] z-40">
      <div className="px-6">
        <div className="flex items-center gap-6 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex flex-col items-center gap-1 min-w-fit group"
            >
              <div className="flex items-center gap-1">
                <span className="text-2xl">{category.icon}</span>
                {category.badge && (
                  <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded font-bold">
                    {category.badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 whitespace-nowrap">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 pb-4">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {amenities.map((amenity) => (
            <button
              key={amenity.id}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:border-gray-900 transition-colors whitespace-nowrap"
            >
              <span className="text-lg">{amenity.icon}</span>
              <span className="text-sm">{amenity.label}</span>
            </button>
          ))}
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium">
            more
          </button>
        </div>
      </div>

      <div className="px-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Prices include all fees</span>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 border border-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-sm font-medium">Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};
