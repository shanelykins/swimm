interface Event {
  id: number;
  emoji: string;
  title: string;
  description: string;
  date: string;
  time: string;
  price: string;
  image: string;
  color: string;
}

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className={`absolute top-4 left-4 ${event.color} rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg`}>
          {event.emoji}
        </div>
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
          <span className="text-indigo-700 font-bold text-sm">{event.price}</span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="text-neutral-800 text-lg font-bold mb-2 line-clamp-2 leading-snug md:text-xl">
          {event.title}
        </h3>
        <p className="text-gray-600 text-sm font-medium mb-4 line-clamp-2 leading-relaxed md:text-base">
          {event.description}
        </p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">{event.time}</span>
          </div>
        </div>

        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full transition-colors duration-300 text-sm md:text-base">
          Book Now
        </button>
      </div>
    </div>
  );
};
