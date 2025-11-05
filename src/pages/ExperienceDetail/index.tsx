import { useParams } from "react-router-dom";
import { Header } from "../ListingDetail/components/Header";
import { Footer } from "../../sections/Footer";
import { Calendar, Clock, Users, MapPin, Star, Wifi, Utensils, Wind, Droplets, Shield, Sparkles, Info, AlertCircle } from "lucide-react";

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
    reviewCount: 18,
    location: "Santa Monica, CA",
    exactLocation: "Ocean View Rooftop, 1420 2nd Street, Santa Monica, CA 90401",
    maxGuests: 12,
    duration: "90 minutes",
    capacity: "12 people",
    description: "Experience the magic of sunset yoga on our stunning rooftop terrace, where the golden hour meets mindful movement. This 90-minute session blends traditional vinyasa flow with restorative poses, all while the California sun paints the sky in brilliant hues. Our certified instructor guides you through sequences designed to release tension and cultivate inner peace, whether you're a seasoned yogi or stepping onto the mat for the first time. The ocean breeze and panoramic views create an atmosphere that transcends the typical studio experience, offering a genuine escape from the everyday. Stay after class for herbal tea and meaningful conversation with fellow practitioners as the city lights begin to twinkle below.",
    moreDetails: [
      "Our rooftop space features premium flooring that provides excellent grip and cushioning for all poses",
      "The space is equipped with ambient lighting that automatically adjusts as the sun sets, maintaining visibility without disrupting the natural atmosphere",
      "We limit each session to just 12 participants to ensure personalized attention and ample space for everyone",
      "Props including blocks, straps, and bolsters are provided and sanitized between each use",
      "The session concludes with a guided meditation while watching the city lights emerge"
    ],
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
    reviews: [
      {
        name: "Emily Rodriguez",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "March 2024",
        comment: "Absolutely magical experience! Sarah's instruction is clear and calming, and the rooftop setting is breathtaking. I've been to many yoga classes, but this one truly stands out. The sunset views are incredible and the small group size made it feel intimate and special."
      },
      {
        name: "David Kim",
        avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "February 2024",
        comment: "As a beginner, I was nervous, but Sarah made everyone feel welcome regardless of experience level. The setting is unbeatable and I left feeling completely relaxed. Already booked my next session!"
      },
      {
        name: "Lisa Chen",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "January 2024",
        comment: "This has become my weekly ritual. The combination of expert instruction, stunning views, and a welcoming community makes it worth every penny. The herbal tea afterward is a lovely touch."
      }
    ],
    thingsToKnow: {
      cancellation: "Full refund if cancelled 24 hours before the event. 50% refund if cancelled within 12-24 hours. No refund for cancellations less than 12 hours before.",
      whatToBring: "Wear comfortable athletic clothing. Water bottle recommended. Yoga mats and props provided but you're welcome to bring your own.",
      accessibility: "Located on a rooftop accessible by elevator. Not suitable for those with severe vertigo or fear of heights.",
      ageRequirement: "Participants must be 16 years or older.",
      weatherPolicy: "In case of rain or high winds, the session will be moved indoors to our backup studio space with advance notice sent via email."
    }
  },
  "pickleball-singles": {
    title: "Pickleball for Singles - Meet & Play",
    images: [
      "https://i.imgur.com/k0lf5Ht.jpeg",
    ],
    price: 20,
    rating: 4.9,
    reviewCount: 34,
    location: "Venice Beach, CA",
    exactLocation: "Venice Beach Recreation Center, 1800 Ocean Front Walk, Venice, CA 90291",
    maxGuests: 16,
    duration: "2 hours",
    capacity: "16 people",
    description: "Combine sport and socializing at our lively pickleball mixer designed specifically for singles. This isn't just about the game—it's about building connections through friendly competition and shared laughter. We rotate partners throughout the evening, ensuring everyone meets new people while improving their skills. Our professional instructor kicks things off with a quick tutorial for beginners, then facilitates matches that keep the energy high and the conversation flowing. The relaxed Venice Beach setting and our welcoming community make it easy to be yourself. Whether you're looking to expand your social circle, find a doubles partner, or simply enjoy an active evening, this event delivers.",
    moreDetails: [
      "We use a structured rotation system that ensures you'll play with multiple different partners throughout the evening",
      "Both beginners and experienced players are welcome - we organize games by skill level",
      "Our courts are professionally maintained and we provide premium paddles and outdoor balls",
      "The atmosphere is relaxed and social - winning isn't the focus, connection is",
      "Many participants grab dinner or drinks together at nearby Venice spots after the event"
    ],
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
    reviews: [
      {
        name: "Rachel Thompson",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "March 2024",
        comment: "I've been to three of these events now and met so many great people! Marcus does an amazing job creating a welcoming environment. Even as a complete beginner, I never felt judged. Plus, I actually found a regular doubles partner!"
      },
      {
        name: "Alex Martinez",
        avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "February 2024",
        comment: "Great mix of skill levels and really friendly people. The rotation system is perfect for meeting everyone. Already signed up for next week!"
      },
      {
        name: "Jenny Wu",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 4,
        date: "February 2024",
        comment: "Fun evening! The Venice Beach setting is beautiful and Marcus keeps things organized and fun. Would love to see them add more time slots during the week."
      }
    ],
    thingsToKnow: {
      cancellation: "Full refund if cancelled 48 hours before the event. No refunds for cancellations within 48 hours.",
      whatToBring: "Wear athletic shoes and comfortable clothing. Sunscreen recommended. All equipment provided.",
      accessibility: "Outdoor courts are wheelchair accessible. Please contact host for specific accessibility needs.",
      ageRequirement: "Participants must be 21 years or older.",
      weatherPolicy: "Event is cancelled in case of rain with full refund or option to transfer to next event."
    }
  },
  "dog-swim-day": {
    title: "Dog Swim Day - Canine Pool Party",
    images: [
      "https://i.imgur.com/TIUlo61.jpeg",
    ],
    price: 25,
    rating: 5.0,
    reviewCount: 62,
    location: "Culver City, CA",
    exactLocation: "Private Residence, 4820 Sepulveda Blvd, Culver City, CA 90230",
    maxGuests: 20,
    duration: "3 hours",
    capacity: "20 dogs + owners",
    description: "Give your four-legged friend the pool day they deserve at our exclusive canine swim party. This private pool session is dedicated entirely to dogs, allowing them to splash, play, and socialize in a safe, supervised environment. Our spacious pool features a gradual entry perfect for timid swimmers and a deeper section for confident paddlers. Certified pet lifeguards are always present, and we provide properly fitted life jackets for dogs of all sizes. Watch your pup make new friends while you connect with fellow dog lovers who understand that pets are family. We've thought of everything—from shaded rest areas to plenty of fresh water bowls. The joy on your dog's face makes this more than worth it, and the exhausted, happy pup you take home will thank you with the best night's sleep ever.",
    moreDetails: [
      "Our 25-foot saltwater pool is gentler on dogs' skin and eyes than traditional chlorine pools",
      "We separate swim times by dog size (small dogs 10am-11:30am, large dogs 12pm-1:30pm) to ensure everyone's safety and comfort",
      "Two certified pet lifeguards are present at all times, trained in canine CPR and first aid",
      "The pool area is fully fenced with double-gate entry to prevent escapes",
      "We provide a rinse station with dog-friendly shampoo for a quick cleanup before heading home",
      "Photography services available to capture your pup's best swimming moments"
    ],
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
    reviews: [
      {
        name: "Michael & Luna",
        avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "March 2024",
        comment: "Luna had the time of her life! She's usually nervous around other dogs but the lifeguards were so attentive and made sure she felt comfortable. The saltwater pool is such a nice touch. We'll definitely be back!"
      },
      {
        name: "Sarah & Max",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "March 2024",
        comment: "This is Max's favorite activity! The separation by dog size is brilliant - he can play with dogs his own size. Jessica and her team are wonderful with all the pups. Highly recommend!"
      },
      {
        name: "Tom & Bella",
        avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "February 2024",
        comment: "Best $25 I've spent! Bella was exhausted afterward and slept like a baby. The facility is clean, safe, and the staff clearly loves dogs. The rinse station is so convenient too."
      }
    ],
    thingsToKnow: {
      cancellation: "Full refund if cancelled 48 hours before the event. 50% refund within 24-48 hours. No refund for cancellations within 24 hours.",
      whatToBring: "Proof of current vaccinations required (rabies, DHPP, Bordetella). Bring your dog's favorite treats if they're picky. Towels for your car ride home.",
      accessibility: "Pool area has steps and may not be suitable for dogs with severe mobility issues. Contact host to discuss individual needs.",
      ageRequirement: "Dogs must be at least 6 months old. Owners must be 18+.",
      weatherPolicy: "Event runs rain or shine as pool is in a covered area. Only cancelled for severe weather with full refund offered."
    }
  },
  "movie-night": {
    title: "Backyard Movie Night Under the Stars",
    images: [
      "https://i.imgur.com/cqrD4z2.png",
    ],
    price: 18,
    rating: 4.8,
    reviewCount: 29,
    location: "Hollywood Hills, CA",
    exactLocation: "Private Residence, Hollywood Hills (exact address shared upon booking)",
    maxGuests: 25,
    duration: "4 hours",
    capacity: "25 people",
    description: "Rediscover the magic of cinema at our intimate outdoor movie night, nestled in the hills with twinkling lights overhead and Los Angeles spread out below. We've transformed our backyard into a cozy open-air theater complete with a professional-grade projector, quality sound system, and comfortable seating that actually makes you want to settle in. Each screening features a crowd-pleasing film chosen by our community, with upcoming movies announced in advance. The experience begins as the sun sets, with time to grab fresh popcorn, browse our snack bar, and claim your perfect spot. Bring a blanket to spread on our lawn, or relax in one of our lounge chairs. The combination of great company, classic cinema, and the cool evening breeze creates something special—nostalgia meets new memories under the open sky.",
    moreDetails: [
      "Our 12-foot projection screen with HD quality ensures everyone has a great view",
      "Surround sound speakers provide theater-quality audio throughout the space",
      "We curate a mix of classic favorites and modern crowd-pleasers - upcoming films are announced 2 weeks in advance",
      "The snack bar includes fresh popcorn, candy, nachos, and both alcoholic and non-alcoholic beverages",
      "Propane heaters are placed around the seating area for comfort on cooler evenings",
      "Indoor restroom facilities are available and kept clean throughout the event"
    ],
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
    reviews: [
      {
        name: "Amanda Foster",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "March 2024",
        comment: "Such a unique and memorable experience! David and Emma are wonderful hosts. The setup is impressive and the atmosphere is perfect. Loved meeting other film fans. The popcorn was surprisingly good too!"
      },
      {
        name: "Carlos Rivera",
        avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "February 2024",
        comment: "Better than going to an actual theater! The hillside setting is magical and the quality of the projection and sound is top-notch. Definitely worth the price."
      },
      {
        name: "Nicole Zhang",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 4,
        date: "February 2024",
        comment: "Really enjoyed the evening! Great film selection and cozy atmosphere. Only minor complaint is parking can be a bit tricky in the hills, but totally worth it."
      }
    ],
    thingsToKnow: {
      cancellation: "Full refund if cancelled 72 hours before the event. No refunds within 72 hours.",
      whatToBring: "Bring extra layers - evenings can get cool. You're welcome to bring your own blanket or pillow for extra comfort. BYOB allowed.",
      accessibility: "Backyard has some uneven terrain. Limited wheelchair accessibility - please contact hosts in advance to discuss.",
      ageRequirement: "Film rating dependent. Most screenings are PG-13 or R rated. Check individual event for age requirements.",
      weatherPolicy: "Event is cancelled in case of rain or poor visibility. Full refund or transfer to future screening offered."
    }
  },
  "open-swim-fridays": {
    title: "Open Swim Fridays at Mark's Pool",
    images: [
      "https://i.imgur.com/ab35vVj.jpeg",
    ],
    price: 12,
    rating: 5.0,
    reviewCount: 91,
    location: "West Hollywood, CA",
    exactLocation: "Private Residence, 1165 N Clark St, West Hollywood, CA 90069",
    maxGuests: 30,
    duration: "2 hours",
    capacity: "30 people",
    description: "Kick off your weekend at our beloved Friday swim session, a West Hollywood tradition that brings together neighbors, newcomers, and regulars for an evening of relaxation and genuine connection. Mark's heated pool maintains a perfect temperature year-round, while the surrounding space offers both sun-soaked loungers and shaded areas for those who prefer to stay cool. What started as a small gathering has grown into a thriving community—you'll find everyone from young professionals unwinding after work to long-time locals who never miss a Friday. The atmosphere is refreshingly unpretentious: dive in for laps, float peacefully with a pool noodle, or chat with friendly faces at the shallow end. Many attendees grab dinner together afterward at nearby spots. It's an affordable, easy way to add something special to your weekly routine, and the welcoming vibe makes first-timers feel like old friends.",
    moreDetails: [
      "The pool is maintained at a comfortable 82°F year-round with state-of-the-art heating",
      "We use a UV sanitization system in addition to minimal chlorine for a gentler swimming experience",
      "The 40-foot lap pool has both a shallow end (3.5 feet) and deep end (6 feet)",
      "Bluetooth speakers provide background music - we take requests!",
      "A small honor-system cooler has drinks available for $2",
      "Regular attendees often organize post-swim dinners at local restaurants"
    ],
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
    reviews: [
      {
        name: "Jessica Moore",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "March 2024",
        comment: "I've been coming every Friday for 6 months now and it's become my favorite part of the week. Mark is an incredible host and I've made genuine friends here. Can't recommend enough!"
      },
      {
        name: "Ryan Chen",
        avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "March 2024",
        comment: "Just moved to LA and this has been the best way to meet people. Everyone is so welcoming. The pool is always clean and at the perfect temperature. Best $12 I spend all week!"
      },
      {
        name: "Maria Santos",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
        rating: 5,
        date: "February 2024",
        comment: "Mark's swim nights are a WeHo institution! Been coming on and off for 2 years. Whether you want to socialize or just float and decompress, it's perfect. The regular crew is lovely."
      }
    ],
    thingsToKnow: {
      cancellation: "Full refund if cancelled 24 hours before the event. No refund for cancellations within 24 hours.",
      whatToBring: "Bring swimsuit and sunscreen. Towels provided but you're welcome to bring your own. Modest alcohol permitted (beer/wine only, no glass containers).",
      accessibility: "Pool entry via steps only - not wheelchair accessible. Please contact host with questions about accessibility.",
      ageRequirement: "Participants must be 21 years or older.",
      weatherPolicy: "Pool is heated and we have covered areas, so events run rain or shine unless there's lightning, in which case full refunds are provided."
    }
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

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-sky-500 fill-sky-500' : 'text-gray-300'}`}
      />
    ));
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
            <span className="text-gray-600">({experience.reviewCount} reviews)</span>
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

            {experience.moreDetails && (
              <div className="mb-8 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">More details</h2>
                <ul className="space-y-3">
                  {experience.moreDetails.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <Info className="w-5 h-5 mt-0.5 text-sky-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Where you'll be</h2>
              <div className="mb-4">
                <div className="flex items-start gap-2 text-gray-700 mb-4">
                  <MapPin className="w-5 h-5 mt-1 text-sky-500 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">{experience.location}</div>
                    <div className="text-sm text-gray-600">{experience.exactLocation}</div>
                  </div>
                </div>
              </div>
              <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-118.2437,34.0522,11,0/800x600@2x?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                  alt="Map of Los Angeles"
                  className="w-full h-full object-cover"
                />
              </div>
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

            {experience.reviews && (
              <div className="mb-8 border-t border-gray-200 pt-8">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-6 h-6 text-sky-500 fill-sky-500" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {experience.rating} · {experience.reviewCount} reviews
                  </h2>
                </div>
                <div className="space-y-6">
                  {experience.reviews.map((review: any, index: number) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                      <div className="flex items-start gap-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <div className="font-semibold text-gray-900">{review.name}</div>
                              <div className="text-sm text-gray-600">{review.date}</div>
                            </div>
                            <div className="flex gap-0.5">
                              {renderStars(review.rating)}
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {experience.thingsToKnow && (
              <div className="mb-8 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Things to know</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="w-5 h-5 text-sky-500" />
                      <h3 className="font-semibold text-gray-900">Cancellation policy</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{experience.thingsToKnow.cancellation}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Info className="w-5 h-5 text-sky-500" />
                      <h3 className="font-semibold text-gray-900">What to bring</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{experience.thingsToKnow.whatToBring}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-sky-500" />
                      <h3 className="font-semibold text-gray-900">Age requirement</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{experience.thingsToKnow.ageRequirement}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Wind className="w-5 h-5 text-sky-500" />
                      <h3 className="font-semibold text-gray-900">Weather policy</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{experience.thingsToKnow.weatherPolicy}</p>
                  </div>
                  {experience.thingsToKnow.accessibility && (
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Info className="w-5 h-5 text-sky-500" />
                        <h3 className="font-semibold text-gray-900">Accessibility</h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{experience.thingsToKnow.accessibility}</p>
                    </div>
                  )}
                </div>
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
