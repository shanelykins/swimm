import { useParams } from "react-router-dom";
import { Header } from "../ListingDetail/components/Header";
import { Footer } from "../../sections/Footer";
import { Calendar, Clock, Users, MapPin, Star, Wifi, Utensils, Wind, Droplets, Shield, Sparkles } from "lucide-react";

const experienceData: Record<string, any> = {
  "yoga-sunset": {
    title: "Hot Holy & Healed Yoga at Sunset",
    images: [
      "https://i.imgur.com/MTqEAZv.jpeg",
      "https://images.pexels.com/photos/3822488/pexels-photo-3822488.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    price: 15,
    rating: 5.0,
    reviews: 18,
    location: "Santa Monica, CA",
    maxGuests: 12,
    duration: "90 minutes",
    capacity: "12 people",
    description: "Experience the magic of sunset yoga on our stunning rooftop terrace, where the golden hour meets mindful movement. This 90-minute session blends traditional vinyasa flow with restorative poses, all while the California sun paints the sky in brilliant hues. Our certified instructor guides you through sequences designed to release tension and cultivate inner peace, whether you're a seasoned yogi or stepping onto the mat for the first time. The ocean breeze and panoramic views create an atmosphere that transcends the typical studio experience, offering a genuine escape from the everyday. Stay after class for herbal tea and meaningful conversation with fellow practitioners as the city lights begin to twinkle below.",
    host: {
      name: "Sarah Mitchell",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Certified Yoga Instructor & Wellness Coach",
      memberSince: "2021",
      bio: "I've been teaching yoga for 8 years and hosting sunset sessions for 3 years. There's something truly special about practicing as day transitions to night."
    },
    amenities: [
      { icon: "mat", name: "Yoga mats provided" },
      { icon: "water", name: "Filtered water station" },
      { icon: "snack", name: "Herbal tea & light refreshments" },
      { icon: "shower", name: "Changing area available" },
      { icon: "sanitizer", name: "Sanitized equipment" },
      { icon: "parking", name: "Street parking nearby" },
    ],
    included: [
      "Premium yoga mat and props",
      "Complimentary herbal tea",
      "Post-session refreshments",
      "All experience levels welcome",
      "Small group setting for personalized attention",
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
      "https://i.imgur.com/k0lf5Ht.jpeg",
    ],
    price: 20,
    rating: 4.9,
    reviews: 34,
    location: "Venice Beach, CA",
    maxGuests: 16,
    duration: "2 hours",
    capacity: "16 people",
    description: "Combine sport and socializing at our lively pickleball mixer designed specifically for singles. This isn't just about the game—it's about building connections through friendly competition and shared laughter. We rotate partners throughout the evening, ensuring everyone meets new people while improving their skills. Our professional instructor kicks things off with a quick tutorial for beginners, then facilitates matches that keep the energy high and the conversation flowing. The relaxed Venice Beach setting and our welcoming community make it easy to be yourself. Whether you're looking to expand your social circle, find a doubles partner, or simply enjoy an active evening, this event delivers.",
    host: {
      name: "Marcus Chen",
      avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Pickleball Enthusiast & Community Builder",
      memberSince: "2022",
      bio: "I started these singles mixers after realizing how hard it can be to meet people in LA. Now we have a thriving community of players!"
    },
    amenities: [
      { icon: "equipment", name: "Paddles & balls included" },
      { icon: "water", name: "Cold beverages provided" },
      { icon: "snack", name: "Light snacks" },
      { icon: "instructor", name: "Professional instruction" },
      { icon: "seating", name: "Shaded seating area" },
      { icon: "firstaid", name: "First aid kit available" },
    ],
    included: [
      "All equipment provided",
      "Professional instruction for beginners",
      "Light refreshments and water",
      "Organized partner rotation",
      "Friendly, inclusive atmosphere",
    ],
  },
  "dog-swim-day": {
    title: "Dog Swim Day - Canine Pool Party",
    images: [
      "https://i.imgur.com/TIUlo61.jpeg",
    ],
    price: 25,
    rating: 5.0,
    reviews: 62,
    location: "Culver City, CA",
    maxGuests: 20,
    duration: "3 hours",
    capacity: "20 dogs + owners",
    description: "Give your four-legged friend the pool day they deserve at our exclusive canine swim party. This private pool session is dedicated entirely to dogs, allowing them to splash, play, and socialize in a safe, supervised environment. Our spacious pool features a gradual entry perfect for timid swimmers and a deeper section for confident paddlers. Certified pet lifeguards are always present, and we provide properly fitted life jackets for dogs of all sizes. Watch your pup make new friends while you connect with fellow dog lovers who understand that pets are family. We've thought of everything—from shaded rest areas to plenty of fresh water bowls. The joy on your dog's face makes this more than worth it, and the exhausted, happy pup you take home will thank you with the best night's sleep ever.",
    host: {
      name: "Jessica Rodriguez",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Pet Care Professional & Dog Swim Coordinator",
      memberSince: "2020",
      bio: "As a lifelong dog lover and former vet tech, I created these swim days to give dogs a safe space to exercise and socialize. Nothing beats seeing the pure joy on their faces!"
    },
    amenities: [
      { icon: "lifejacket", name: "Dog life jackets provided" },
      { icon: "toys", name: "Pool toys & floats" },
      { icon: "treats", name: "Dog treats & water bowls" },
      { icon: "lifeguard", name: "Certified pet lifeguards" },
      { icon: "shower", name: "Rinse station for dogs" },
      { icon: "shade", name: "Shaded rest areas" },
    ],
    included: [
      "Life jackets for all sizes",
      "Floating toys and balls",
      "Complimentary dog treats",
      "Supervised swim sessions",
      "Photo opportunities",
      "Rinse station for post-swim cleanup",
    ],
  },
  "movie-night": {
    title: "Backyard Movie Night Under the Stars",
    images: [
      "https://i.imgur.com/cqrD4z2.png",
    ],
    price: 18,
    rating: 4.8,
    reviews: 29,
    location: "Hollywood Hills, CA",
    maxGuests: 25,
    duration: "4 hours",
    capacity: "25 people",
    description: "Rediscover the magic of cinema at our intimate outdoor movie night, nestled in the hills with twinkling lights overhead and Los Angeles spread out below. We've transformed our backyard into a cozy open-air theater complete with a professional-grade projector, quality sound system, and comfortable seating that actually makes you want to settle in. Each screening features a crowd-pleasing film chosen by our community, with upcoming movies announced in advance. The experience begins as the sun sets, with time to grab fresh popcorn, browse our snack bar, and claim your perfect spot. Bring a blanket to spread on our lawn, or relax in one of our lounge chairs. The combination of great company, classic cinema, and the cool evening breeze creates something special—nostalgia meets new memories under the open sky.",
    host: {
      name: "David & Emma Thompson",
      avatar: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Film Enthusiasts & Backyard Cinema Hosts",
      memberSince: "2021",
      bio: "We're film buffs who love sharing our passion for movies. Our backyard was made for this, and we've hosted over 50 screenings!"
    },
    amenities: [
      { icon: "projector", name: "HD projector & sound system" },
      { icon: "blankets", name: "Cozy blankets available" },
      { icon: "snacks", name: "Popcorn & movie snacks" },
      { icon: "seating", name: "Multiple seating options" },
      { icon: "restroom", name: "Clean restrooms" },
      { icon: "heater", name: "Outdoor heaters" },
    ],
    included: [
      "Premium outdoor movie experience",
      "Fresh popcorn and candy",
      "Comfortable seating or lawn space",
      "Cozy blankets provided",
      "Quality sound and projection",
      "Curated film selection",
    ],
  },
  "open-swim-fridays": {
    title: "Open Swim Fridays at Mark's Pool",
    images: [
      "https://i.imgur.com/ab35vVj.jpeg",
    ],
    price: 12,
    rating: 5.0,
    reviews: 91,
    location: "West Hollywood, CA",
    maxGuests: 30,
    duration: "2 hours",
    capacity: "30 people",
    description: "Kick off your weekend at our beloved Friday swim session, a West Hollywood tradition that brings together neighbors, newcomers, and regulars for an evening of relaxation and genuine connection. Mark's heated pool maintains a perfect temperature year-round, while the surrounding space offers both sun-soaked loungers and shaded areas for those who prefer to stay cool. What started as a small gathering has grown into a thriving community—you'll find everyone from young professionals unwinding after work to long-time locals who never miss a Friday. The atmosphere is refreshingly unpretentious: dive in for laps, float peacefully with a pool noodle, or chat with friendly faces at the shallow end. Many attendees grab dinner together afterward at nearby spots. It's an affordable, easy way to add something special to your weekly routine, and the welcoming vibe makes first-timers feel like old friends.",
    host: {
      name: "Mark Sullivan",
      avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=200",
      title: "Pool Owner & Community Host",
      memberSince: "2019",
      bio: "I opened my pool to the neighborhood 5 years ago and it's become the highlight of my week. Love seeing familiar faces and meeting new people every Friday!"
    },
    amenities: [
      { icon: "heated", name: "Heated pool year-round" },
      { icon: "floats", name: "Pool floats & noodles" },
      { icon: "towels", name: "Towels available" },
      { icon: "shower", name: "Outdoor shower" },
      { icon: "loungers", name: "Sun loungers" },
      { icon: "shade", name: "Umbrella shade areas" },
    ],
    included: [
      "Heated pool access",
      "Pool floats and toys",
      "Towels available for use",
      "Outdoor shower facilities",
      "Relaxed, social atmosphere",
      "Welcoming community",
    ],
  },
};

export const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const experience = id ? experienceData[id] : null;

  if (!experience) {
    return <div>Experience not found</div>;
  }

  const getAmenityIcon = (iconName: string) => {
    const iconProps = { className: "w-6 h-6 text-sky-500" };
    switch (iconName) {
      case "mat":
      case "equipment":
      case "projector":
        return <Sparkles {...iconProps} />;
      case "water":
      case "heated":
        return <Droplets {...iconProps} />;
      case "snack":
      case "treats":
      case "snacks":
        return <Utensils {...iconProps} />;
      case "shower":
      case "restroom":
        return <Droplets {...iconProps} />;
      case "sanitizer":
      case "firstaid":
      case "lifeguard":
        return <Shield {...iconProps} />;
      case "wifi":
        return <Wifi {...iconProps} />;
      default:
        return <Wind {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
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
              <p className="text-gray-700 leading-relaxed text-lg">{experience.description}</p>
            </div>

            <div className="mb-8 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hosted by {experience.host.name}</h2>
              <div className="flex items-start gap-4">
                <img
                  src={experience.host.avatar}
                  alt={experience.host.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold text-lg text-gray-900">{experience.host.title}</div>
                  <div className="text-sm text-gray-600 mb-3">Member since {experience.host.memberSince}</div>
                  <p className="text-gray-700 leading-relaxed">{experience.host.bio}</p>
                </div>
              </div>
            </div>

            <div className="mb-8 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities & Capacity</h2>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-lg font-medium">
                  <Users className="w-5 h-5" />
                  <span>Maximum capacity: {experience.capacity}</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.amenities.map((amenity: any, index: number) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    {getAmenityIcon(amenity.icon)}
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What's included</h2>
              <ul className="space-y-2">
                {experience.included.map((item: string, index: number) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {experience.schedule && (
              <div className="mb-8 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule</h2>
                <ul className="space-y-3">
                  {experience.schedule.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <Clock className="w-5 h-5 mt-0.5 text-sky-500 flex-shrink-0" />
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
