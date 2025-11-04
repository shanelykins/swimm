import { Heart, Map } from "lucide-react";

interface ListingGridProps {
  onToggleMap: () => void;
  showMap: boolean;
}

const listings = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 26,
    hourlyRate: "$29/hr",
    title: "White Lodge Spa- Hot Tub, Sauna ...",
    location: "Los Angeles",
    distance: "6.4 miles away",
    guests: "5 guests",
    rating: 5.0,
    reviews: 27,
    instantBook: true,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 45,
    hourlyRate: "$55/hr",
    title: "The Urban Hot Spring",
    location: "Glendale",
    distance: "10.6 miles away",
    guests: "7 guests",
    rating: 5.0,
    reviews: 75,
    instantBook: true,
    topSwimply: true,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 7,
    hourlyRate: "$115/hr",
    title: "Casa De Castro Igloo - Hot Tub,...",
    location: "Los Angeles",
    distance: "25.3 miles away",
    guests: "60 guests",
    rating: 5.0,
    reviews: 1,
    instantBook: true,
    deal: "Extra 20% OFF",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 30,
    hourlyRate: "$35/hr",
    title: "Modern Pool with LED Lighting",
    location: "Beverly Hills",
    distance: "8.2 miles away",
    guests: "10 guests",
    rating: 4.9,
    reviews: 43,
    instantBook: true,
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1488267/pexels-photo-1488267.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 55,
    hourlyRate: "$65/hr",
    title: "Luxury Resort Style Pool",
    location: "Malibu",
    distance: "15.1 miles away",
    guests: "12 guests",
    rating: 5.0,
    reviews: 89,
    instantBook: true,
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: 40,
    hourlyRate: "$48/hr",
    title: "Private Backyard Paradise",
    location: "Santa Monica",
    distance: "12.3 miles away",
    guests: "8 guests",
    rating: 4.8,
    reviews: 52,
    instantBook: true,
    topSwimply: true,
  },
];

export const ListingGrid = ({ onToggleMap, showMap }: ListingGridProps) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600 text-sm">
          Showing {listings.length} available spaces
        </p>
        <button
          onClick={onToggleMap}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-900 rounded-lg hover:bg-gray-50 transition-colors md:hidden lg:flex"
        >
          <Map className="w-4 h-4" />
          <span className="text-sm font-medium">{showMap ? 'Hide' : 'Show'} Map</span>
        </button>
      </div>

      <div className={`grid gap-6 ${showMap ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
        {listings.map((listing) => (
          <div key={listing.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              {listing.topSwimply && (
                <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-sky-500 text-white rounded-full text-xs font-bold">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Top Swimply
                </div>
              )}
              {listing.deal && (
                <div className="absolute bottom-3 left-3 flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">
                  🎉 Deal - {listing.deal}
                </div>
              )}
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-sky-500 text-white rounded-lg text-sm font-bold">
                <div className="text-xs opacity-90">{listing.hourlyRate}</div>
                <div>${listing.price}/hr</div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-1 truncate">{listing.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                {listing.location} • {listing.distance} • {listing.guests}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">{listing.rating} ({listing.reviews})</span>
                </div>
                {listing.instantBook && (
                  <div className="flex items-center gap-1 text-sky-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-medium">Instant book</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
