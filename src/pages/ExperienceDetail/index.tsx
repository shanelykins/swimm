import { useParams } from "react-router-dom";
import { Header } from "../../sections/Header";
import { Footer } from "../../sections/Footer";
import { Calendar, Clock, Users, MapPin, Star } from "lucide-react";

const experienceData: Record<string, any> = {
  "yoga-sunset": {
    title: "Hot Holy & Healed Yoga at Sunset",
    images: [
      "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/3822488/pexels-photo-3822488.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    price: 15,
    rating: 5.0,
    reviews: 18,
    location: "Santa Monica, CA",
    maxGuests: 12,
    duration: "90 minutes",
    description: "Join us for a transformative sunset yoga session on a beautiful rooftop overlooking the ocean. This experience combines traditional yoga practices with breathtaking views and a peaceful atmosphere.",
    included: [
      "Yoga mat provided",
      "Complimentary herbal tea",
      "Post-session refreshments",
      "All experience levels welcome",
    ],
    schedule: [
      "6:00 PM - Arrival and check-in",
      "6:15 PM - Yoga session begins",
      "7:30 PM - Meditation and closing",
      "7:45 PM - Social time with refreshments",
    ],
  },
  "pickleball-singles": {
    title: "Pickleball for Singles - Meet & Play",
    images: [
      "https://images.pexels.com/photos/6253903/pexels-photo-6253903.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    price: 20,
    rating: 4.9,
    reviews: 34,
    location: "Venice Beach, CA",
    maxGuests: 16,
    duration: "2 hours",
    description: "A fun social pickleball event for singles to meet new people while playing America's fastest-growing sport!",
    included: [
      "Equipment provided",
      "Light refreshments",
      "Professional instruction",
    ],
  },
  "dog-swim-day": {
    title: "Dog Swim Day - Canine Pool Party",
    images: [
      "https://images.pexels.com/photos/9543684/pexels-photo-9543684.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    price: 25,
    rating: 5.0,
    reviews: 62,
    location: "Culver City, CA",
    maxGuests: 20,
    duration: "3 hours",
    description: "Let your furry friends enjoy a splashing good time at our exclusive dog pool party!",
    included: [
      "Life jackets for dogs",
      "Pool toys",
      "Dog treats",
      "Photo opportunities",
    ],
  },
  "movie-night": {
    title: "Backyard Movie Night Under the Stars",
    images: [
      "https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    price: 18,
    rating: 4.8,
    reviews: 29,
    location: "Hollywood Hills, CA",
    maxGuests: 25,
    duration: "4 hours",
    description: "Experience cinema like never before with an outdoor movie screening in a beautiful backyard setting.",
    included: [
      "Cozy blankets",
      "Popcorn and snacks",
      "Comfortable seating",
    ],
  },
  "open-swim-fridays": {
    title: "Open Swim Fridays at Mark's Pool",
    images: [
      "https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    price: 12,
    rating: 5.0,
    reviews: 91,
    location: "West Hollywood, CA",
    maxGuests: 30,
    duration: "2 hours",
    description: "Join our weekly Friday swim session at Mark's beautiful heated pool. Perfect for meeting new friends!",
    included: [
      "Heated pool access",
      "Pool floats",
      "Towels available",
    ],
  },
};

export const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const experience = id ? experienceData[id] : null;

  if (!experience) {
    return <div>Experience not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8 mt-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{experience.title}</h1>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-sky-500 fill-sky-500" />
            <span className="font-semibold">{experience.rating}</span>
            <span className="text-gray-600">({experience.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>{experience.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {experience.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`${experience.title} ${index + 1}`}
                  className={`rounded-2xl object-cover ${index === 0 ? 'col-span-2 h-96' : 'h-48'}`}
                />
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this experience</h2>
              <p className="text-gray-700 leading-relaxed">{experience.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What's included</h2>
              <ul className="space-y-2">
                {experience.included.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {experience.schedule && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule</h2>
                <ul className="space-y-3">
                  {experience.schedule.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <Clock className="w-5 h-5 mt-0.5 text-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900">${experience.price}</div>
                <div className="text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-sky-500" />
                  <div>
                    <div className="font-medium">Date</div>
                    <div className="text-sm text-gray-600">Select a date</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-sky-500" />
                  <div>
                    <div className="font-medium">Duration</div>
                    <div className="text-sm text-gray-600">{experience.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-sky-500" />
                  <div>
                    <div className="font-medium">Group size</div>
                    <div className="text-sm text-gray-600">Up to {experience.maxGuests} guests</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-sky-500 text-white font-bold py-4 rounded-lg hover:bg-sky-600 transition-colors mb-3">
                Reserve Now
              </button>
              <p className="text-center text-sm text-gray-600">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
