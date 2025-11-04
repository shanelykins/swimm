import { EventCard } from "@/sections/EventsSection/components/EventCard";

export const EventsSection = () => {
  const events = [
    {
      id: 1,
      emoji: "🧘‍♀️",
      title: "Hot Holy & Healed Yoga at Sunset",
      description: "Find your inner peace with poolside yoga as the sun sets. Perfect for all levels.",
      date: "Every Tuesday & Thursday",
      time: "6:00 PM - 7:30 PM",
      price: "$25",
      image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-rose-100"
    },
    {
      id: 2,
      emoji: "🎾",
      title: "Pickleball for Singles (SF Marina)",
      description: "Meet new people while playing America's fastest-growing sport. All skill levels welcome!",
      date: "Every Saturday",
      time: "10:00 AM - 12:00 PM",
      price: "$20",
      image: "https://images.pexels.com/photos/6253903/pexels-photo-6253903.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-amber-100"
    },
    {
      id: 3,
      emoji: "🐶",
      title: "Dog Swim Day — $100 Pass + Two Free Humans",
      description: "Let your furry friends splash around in a private pool! Includes two human companions.",
      date: "Every Sunday",
      time: "9:00 AM - 11:00 AM",
      price: "$100",
      image: "https://images.pexels.com/photos/9543684/pexels-photo-9543684.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-sky-100"
    },
    {
      id: 4,
      emoji: "🎬",
      title: "Backyard Movie Night Under the Stars",
      description: "Experience cinema magic poolside with a giant screen, cozy seating, and unlimited popcorn.",
      date: "Every Friday & Saturday",
      time: "8:00 PM - 11:00 PM",
      price: "$45",
      image: "https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-violet-100"
    },
    {
      id: 5,
      emoji: "🏊‍♀️",
      title: "Open Swim Fridays at Mark's Pool",
      description: "Enjoy a relaxing swim session in a beautiful private pool. Perfect for lap swimming or leisure.",
      date: "Every Friday",
      time: "4:00 PM - 7:00 PM",
      price: "$15",
      image: "https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "bg-cyan-100"
    }
  ];

  return (
    <section className="relative items-center bg-gradient-to-b from-indigo-600 to-indigo-800 box-border caret-transparent flex flex-col justify-center w-full pt-[55px] pb-16 px-[max(2%,18px)] md:pb-[80px] md:px-[4%] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto w-full">
        <div className="items-center box-border caret-transparent flex flex-col justify-center w-full mb-8 md:mb-12">
          <div className="relative text-white box-border caret-transparent mb-4">
            <div className="text-6xl md:text-7xl">🎉</div>
            <div className="absolute text-xs font-bold bg-amber-400 text-neutral-900 box-border caret-transparent tracking-[-0.12px] leading-[16px] rotate-[-11deg] px-2 py-1 rounded-lg -right-2 top-0 shadow-lg">
              NEW!
            </div>
          </div>
          <h2 className="text-white text-3xl font-extrabold box-border caret-transparent leading-[38px] text-center mb-3 md:text-5xl md:leading-[60px]">
            Discover Local Events
          </h2>
          <p className="text-white/90 text-base font-medium box-border caret-transparent tracking-[-0.2px] leading-[24px] text-center max-w-2xl md:text-xl md:leading-[30px]">
            Join unique experiences hosted at amazing private spaces. From yoga sessions to movie nights, there's something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 w-full md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="flex justify-center w-full mt-10 md:mt-14">
          <button className="text-indigo-700 bg-white hover:bg-gray-50 font-bold box-border caret-transparent text-center px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 md:px-12 md:py-5 md:text-lg">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};
