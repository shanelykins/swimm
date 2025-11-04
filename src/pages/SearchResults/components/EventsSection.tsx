export const EventsSection = () => {
  return (
    <section className="w-full px-6 py-8 bg-gradient-to-b from-pink-500 to-pink-600 rounded-3xl my-8">
      <div className="flex flex-col items-center gap-4 mb-6">
        <div className="relative">
          <div className="text-6xl">🎉</div>
          <div className="absolute -right-3 bottom-3 bg-amber-400 text-neutral-900 text-xs font-bold px-2 py-1 rounded-lg rotate-[-11deg]">
            NEW!
          </div>
        </div>
        <h2 className="text-white text-3xl font-extrabold text-center">
          Discover Local Events & Experiences
        </h2>
        <p className="text-white text-lg font-medium text-center">
          Join unique gatherings, classes, and social events at amazing private spaces near you.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <a
          href="/events/yoga-sunset"
          className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            alt="Hot Holy & Healed Yoga at Sunset"
            src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-lg flex-shrink-0">
              🧘‍♀️
            </div>
            <div className="text-white text-sm font-bold leading-tight">
              Yoga at Sunset
            </div>
          </div>
        </a>

        <a
          href="/events/pickleball-singles"
          className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            alt="Pickleball for Singles"
            src="https://images.pexels.com/photos/6253903/pexels-photo-6253903.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-lg flex-shrink-0">
              🎾
            </div>
            <div className="text-white text-sm font-bold leading-tight">
              Pickleball for Singles
            </div>
          </div>
        </a>

        <a
          href="/events/dog-swim-day"
          className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            alt="Dog Swim Day"
            src="https://images.pexels.com/photos/9543684/pexels-photo-9543684.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-lg flex-shrink-0">
              🐶
            </div>
            <div className="text-white text-sm font-bold leading-tight">
              Dog Swim Day
            </div>
          </div>
        </a>

        <a
          href="/events/movie-night"
          className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            alt="Backyard Movie Night Under the Stars"
            src="https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">
              🎬
            </div>
            <div className="text-white text-sm font-bold leading-tight">
              Movie Night
            </div>
          </div>
        </a>

        <a
          href="/events/open-swim-fridays"
          className="relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <img
            alt="Open Swim Fridays at Mark's Pool"
            src="https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-10">
            <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-lg flex-shrink-0">
              🏊‍♀️
            </div>
            <div className="text-white text-sm font-bold leading-tight">
              Open Swim Fridays
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
