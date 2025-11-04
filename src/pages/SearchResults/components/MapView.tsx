import { X } from "lucide-react";

const mapMarkers = [
  { id: 1, price: 21, lat: 34.05, lng: -118.25 },
  { id: 2, price: 26, lat: 34.08, lng: -118.28 },
  { id: 3, price: 33, lat: 34.10, lng: -118.30 },
  { id: 4, price: 45, lat: 34.15, lng: -118.35 },
  { id: 5, price: 50, lat: 34.02, lng: -118.48 },
  { id: 6, price: 53, lat: 33.98, lng: -118.42 },
  { id: 7, price: 105, lat: 34.00, lng: -118.40 },
  { id: 8, price: 126, lat: 33.95, lng: -118.38 },
  { id: 9, price: 137, lat: 34.12, lng: -118.15 },
  { id: 10, price: 158, lat: 34.18, lng: -118.45 },
];

export const MapView = () => {
  return (
    <div className="relative w-full h-full bg-gray-100">
      <button className="absolute top-4 right-4 z-10 flex items-center gap-2 px-4 py-2 bg-white border border-gray-900 rounded-lg hover:bg-gray-50 transition-colors shadow-lg">
        <X className="w-4 h-4" />
        <span className="text-sm font-medium">Hide Map</span>
      </button>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
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
          <div className="relative w-4/5 h-4/5">
            {mapMarkers.map((marker, index) => (
              <div
                key={marker.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${20 + (index * 8) % 70}%`,
                  top: `${30 + (index * 7) % 50}%`,
                }}
              >
                <div className="relative group cursor-pointer">
                  <div className="px-3 py-1.5 bg-white border-2 border-gray-900 rounded-full shadow-lg hover:scale-110 transition-transform font-bold text-sm">
                    ${marker.price}
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block">
                    <div className="bg-white rounded-lg shadow-xl p-3 w-48">
                      <img
                        src={`https://images.pexels.com/photos/${2102587 + index * 100000}/pexels-photo-${2102587 + index * 100000}.jpeg?auto=compress&cs=tinysrgb&w=400`}
                        alt="Preview"
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                      <p className="text-xs font-medium">Luxury Pool</p>
                      <p className="text-xs text-gray-600">${marker.price}/hr</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
    </div>
  );
};
