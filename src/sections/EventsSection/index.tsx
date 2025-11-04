export const EventsSection = () => {
  return (
    <section className="items-center bg-transparent bg-[linear-gradient(rgb(236,72,153)_0%,rgb(219,39,119)_100%)] box-border caret-transparent flex flex-col justify-center w-full pt-[55px] pb-16 px-[max(2%,18px)] md:bg-white md:bg-none md:pb-[55px] md:px-[4%]">
      <div className="items-center box-border caret-transparent flex flex-col justify-center w-full">
        <div className="items-center bg-none box-border caret-transparent gap-x-12 flex flex-col gap-y-12 w-full p-0 rounded-[56px] md:bg-[linear-gradient(rgb(236,72,153)_0%,rgb(219,39,119)_100%)] md:px-[55px] md:py-16">
          <div className="items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 text-center">
            <div className="relative text-white box-border caret-transparent">
              <div className="text-7xl">🎉</div>
              <div className="absolute text-sm font-bold bg-amber-400 text-neutral-900 box-border caret-transparent tracking-[-0.14px] leading-[19.6px] rotate-[-11deg] px-1.5 py-1 rounded-lg -right-3 bottom-[13px]">
                NEW!
              </div>
            </div>
            <div className="text-white text-2xl font-extrabold box-border caret-transparent leading-[28.8px] text-ellipsis md:text-[40px] md:leading-[48px]">
              Discover Local Events & Experiences
            </div>
            <div className="text-white text-base font-medium box-border caret-transparent tracking-[-0.2px] leading-[22.4px] md:text-xl md:leading-7">
              Join unique gatherings, classes, and social events at amazing private spaces near you.
            </div>
          </div>
          <div className="items-stretch box-border caret-transparent gap-x-3 grid grid-cols-[1fr_1fr] justify-items-stretch gap-y-3 w-full mt-3 md:gap-x-6 md:grid-cols-[1fr_1fr_1fr] md:gap-y-6 md:mt-6">
            <a
              href="/events/yoga-sunset"
              className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:md:block"
            >
              <img
                alt="Hot Holy & Healed Yoga at Sunset"
                src="https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
              />
              <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                <div className="text-white text-lg font-bold items-center bg-rose-500 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                  🧘‍♀️
                </div>
                <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                  Yoga at Sunset
                </div>
              </div>
            </a>
            <a
              href="/events/pickleball-singles"
              className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:md:block"
            >
              <img
                alt="Pickleball for Singles"
                src="https://images.pexels.com/photos/6253903/pexels-photo-6253903.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
              />
              <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                <div className="text-white text-lg font-bold items-center bg-amber-500 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                  🎾
                </div>
                <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                  Pickleball for Singles
                </div>
              </div>
            </a>
            <a
              href="/events/dog-swim-day"
              className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:md:block"
            >
              <img
                alt="Dog Swim Day"
                src="https://images.pexels.com/photos/9543684/pexels-photo-9543684.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
              />
              <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                <div className="text-white text-lg font-bold items-center bg-sky-500 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                  🐶
                </div>
                <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                  Dog Swim Day
                </div>
              </div>
            </a>
            <a
              href="/events/movie-night"
              className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:md:block"
            >
              <img
                alt="Backyard Movie Night Under the Stars"
                src="https://images.pexels.com/photos/7991158/pexels-photo-7991158.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
              />
              <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                <div className="text-white text-lg font-bold items-center bg-violet-600 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                  🎬
                </div>
                <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                  Movie Night
                </div>
              </div>
            </a>
            <a
              href="/events/open-swim-fridays"
              className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:md:block"
            >
              <img
                alt="Open Swim Fridays at Mark's Pool"
                src="https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=800"
                className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
              />
              <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                <div className="text-white text-lg font-bold items-center bg-cyan-600 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                  🏊‍♀️
                </div>
                <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                  Open Swim Fridays
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
