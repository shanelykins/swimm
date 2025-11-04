import { TestimonialCarousel } from "@/sections/TestimonialsSection/components/TestimonialCarousel";

export const TestimonialsSection = () => {
  return (
    <div className="items-center border-t-indigo-700/30 box-border caret-transparent flex flex-col w-full mt-5 py-10 border-t md:mt-0 md:py-[60px] md:border-t-black md:border-t-0">
      <div className="text-violet-950 text-2xl font-extrabold box-border caret-transparent tracking-[-0.24px] leading-[28.8px] text-center mb-5 md:text-5xl md:font-black md:tracking-[-0.48px] md:leading-[57.6px] md:mb-6">
        Join over 4,000,000+ people who love to Swimply
      </div>
      <div className="text-xl items-center box-border caret-transparent gap-x-[15px] flex gap-y-[15px] md:text-base">
        <button className="relative text-base font-bold items-center bg-indigo-700 caret-transparent flex justify-center tracking-[-0.2px] leading-[25.6px] text-center align-middle w-[115px] border pt-1.5 pb-2 rounded-[105px] border-solid border-transparent md:text-xl md:leading-8 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]">
          <div className="text-white text-base items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[25.6px] gap-y-2 md:text-xl md:leading-8">
            Guests
          </div>
        </button>
        <button className="relative text-base font-bold items-center bg-indigo-700/10 caret-transparent flex justify-center tracking-[-0.2px] leading-[25.6px] text-center align-middle w-[115px] border pt-1.5 pb-2 rounded-[105px] border-solid border-transparent md:text-xl md:leading-8 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]">
          <div className="text-indigo-700 text-base items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[25.6px] gap-y-2 md:text-xl md:leading-8">
            Hosts
          </div>
        </button>
      </div>
      <TestimonialCarousel />
    </div>
  );
};
