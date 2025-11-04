import { Home, Users, ShowerHead, Car, Calendar } from "lucide-react";

const amenities = [
  {
    icon: Home,
    title: "Private check-in",
    description: "Your host Becky and Collin offers self check-in",
  },
  {
    icon: Users,
    title: "7 guests allowed",
    description: "All ages welcome • Pets welcome (not in igloo)",
  },
  {
    icon: ShowerHead,
    title: "No restroom available",
    description: "",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Up to 7 cars on site. More options available.",
    link: "See details",
  },
  {
    icon: Calendar,
    title: "Free cancellation!",
    description: "Get a full refund if you cancel 1 day before your booking.",
  },
];

export const Amenities = () => {
  return (
    <div className="border-b border-gray-200 pb-12">
      <div className="flex items-start gap-4 mb-6">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
          alt="Host"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-bold mb-1">
            Igloo hosted by <span className="underline">Becky and Collin</span>
          </h2>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Verified</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {amenities.map((amenity, index) => {
          const Icon = amenity.icon;
          return (
            <div key={index} className="flex gap-4">
              <Icon className="w-6 h-6 flex-shrink-0 text-gray-700" />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{amenity.title}</h3>
                {amenity.description && (
                  <p className="text-gray-600 text-sm">{amenity.description}</p>
                )}
                {amenity.link && (
                  <button className="text-sm underline font-medium mt-1 hover:text-gray-900">
                    {amenity.link}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
