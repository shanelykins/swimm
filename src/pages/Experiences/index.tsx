import { SearchHeader } from "../SearchResults/components/SearchHeader";
import { CategoryNav } from "../SearchResults/components/CategoryNav";
import { MapView } from "../SearchResults/components/MapView";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const experiences = [
  {
    id: "yoga-sunset",
    image: "https://i.imgur.com/MTqEAZv.jpeg",
    price: 15,
    title: "Hot Holy & Healed Yoga at Sunset",
    location: "Santa Monica",
    distance: "4.2 miles away",
    guests: "12 guests",
    rating: 5.0,
    reviews: 18,
    instantBook: true,
  },
  {
    id: "pickleball-singles",
    image: "https://i.imgur.com/k0lf5Ht.jpeg",
    price: 20,
    title: "Pickleball for Singles - Meet & Play",
    location: "Venice Beach",
    distance: "5.8 miles away",
    guests: "16 guests",
    rating: 4.9,
    reviews: 34,
    instantBook: true,
  },
  {
    id: "dog-swim-day",
    image: "https://i.imgur.com/TIUlo61.jpeg",
    price: 25,
    title: "Dog Swim Day - Canine Pool Party",
    location: "Culver City",
    distance: "7.3 miles away",
    guests: "20 guests + dogs",
    rating: 5.0,
    reviews: 62,
    instantBook: true,
    topSwimply: true,
  },
  {
    id: "movie-night",
    image: "https://i.imgur.com/cqrD4z2.png",
    price: 18,
    title: "Backyard Movie Night Under the Stars",
    location: "Hollywood Hills",
    distance: "9.1 miles away",
    guests: "25 guests",
    rating: 4.8,
    reviews: 29,
    instantBook: true,
  },
  {
    id: "open-swim-fridays",
    image: "https://i.imgur.com/ab35vVj.jpeg",
    price: 12,
    title: "Open Swim Fridays at Mark's Pool",
    location: "West Hollywood",
    distance: "6.5 miles away",
    guests: "30 guests",
    rating: 5.0,
    reviews: 91,
    instantBook: true,
  },
];

export const Experiences = () => {
  const [showMap, setShowMap] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <SearchHeader />
      <CategoryNav />

      <div className="flex h-[calc(100vh-180px)]">
        <div className={`${showMap ? 'w-1/2' : 'w-full'} overflow-y-auto`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 text-sm">
                Showing {experiences.length} available experiences
              </p>
              <button
                onClick={() => setShowMap(!showMap)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-900 rounded-lg hover:bg-gray-50 transition-colors md:hidden lg:flex"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-sm font-medium">{showMap ? 'Hide' : 'Show'} Map</span>
              </button>
            </div>

            <div className={`grid gap-6 ${showMap ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
              {experiences.map((experience) => (
                <Link key={experience.id} to={`/experience/${experience.id}`} className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                    {experience.topSwimply && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-sky-500 text-white rounded-full text-xs font-bold">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Top Swimply
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-pink-500 text-white rounded-lg text-sm font-bold">
                      ${experience.price}/person
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 truncate">{experience.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {experience.location} • {experience.distance} • {experience.guests}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium">{experience.rating} ({experience.reviews})</span>
                      </div>
                      {experience.instantBook && (
                        <div className="flex items-center gap-1 text-sky-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs font-medium">Instant book</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {showMap && (
          <div className="w-1/2 sticky top-0 h-full">
            <MapView />
          </div>
        )}
      </div>
    </div>
  );
};
