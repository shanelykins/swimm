import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const Hero = () => {
  return (
    <div className="relative items-center box-border caret-transparent block justify-center mt-[-70px] md:flex">
      <main className="box-border caret-transparent basis-[0%] grow min-h-[1000px] z-0 md:min-h-[900px]">
        <div className="box-border caret-transparent">
          <div className="relative items-center bg-neutral-900 bg-no-repeat bg-cover box-border caret-transparent flex flex-col h-[885px] justify-center max-h-[700px] min-h-[500px] overflow-hidden bg-center pt-[max(2%,18px)] pb-[100px] px-[max(2%,18px)] md:h-[820px] md:min-h-0 md:p-[4%] before:accent-auto before:bg-[linear-gradient(rgba(0,0,0,0.25)_43.14%,rgba(0,0,0,0)_73.6%)] before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[150px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[5] before:border-separate before:left-0 before:top-0 before:font-nunito_199a07 before:md:bg-[linear-gradient(rgba(0,0,0,0.12)_55.21%,rgba(0,0,0,0)_100%)]">
            <HeroContent />
            <div className="absolute bg-[linear-gradient(rgba(92,192,209,0)_12.89%,rgb(128,111,100)_26.29%,rgb(128,111,100)_56.58%)] box-border caret-transparent block h-3/5 w-full z-[2] left-0 bottom-0 md:static md:bg-none md:hidden md:h-auto md:w-auto md:z-10 md:left-auto md:bottom-auto"></div>
            <HeroImage />
          </div>
          <section className="[mask-image:radial-gradient(115.24px_at_50%_137.5px,rgb(0,0,0)_99%,rgba(0,0,0,0)_101%),radial-gradient(115.24px_at_50%_-112.5px,rgba(0,0,0,0)_99%,rgb(0,0,0)_101%),radial-gradient(115.24px_at_50%_calc(100%_-_137.5px),rgb(0,0,0)_99%,rgba(0,0,0,0)_101%),radial-gradient(115.24px_at_50%_calc(100%_+_112.5px),rgba(0,0,0,0)_99%,rgb(0,0,0)_101%)] relative items-center bg-violet-950 box-border caret-transparent flex flex-col justify-center mb-[-50px] mt-[-50px] [mask-clip:border-box,border-box,border-box,border-box] [mask-composite:add,add,add,add] [mask-mode:match-source,match-source,match-source,match-source] [mask-origin:border-box,border-box,border-box,border-box] [mask-repeat:repeat-x,repeat-x,repeat-x,repeat-x] [mask-size:100px_51%,100px_calc(51%_-_25px),100px_51%,100px_calc(51%_-_25px)]  z-[3] px-[4%] py-[50px] md:[mask-image:radial-gradient(182px_at_50%_225px,rgb(0,0,0)_99%,rgba(0,0,0,0)_101%),radial-gradient(182px_at_50%_-175px,rgba(0,0,0,0)_99%,rgb(0,0,0)_101%),radial-gradient(182px_at_50%_calc(100%_-_225px),rgb(0,0,0)_99%,rgba(0,0,0,0)_101%),radial-gradient(182px_at_50%_calc(100%_+_175px),rgba(0,0,0,0)_99%,rgb(0,0,0)_101%)] md:mb-[-75px] md:mt-[-75px] md:[mask-size:200px_51%,200px_calc(51%_-_50px),200px_51%,200px_calc(51%_-_50px)] md: md:py-[75px]">
            <div className="items-center box-border caret-transparent gap-x-[17px] flex justify-center  gap-y-[17px] w-full">
              <img
                alt="Experience ratings left image"
                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-left.png"
                className="text-transparent aspect-[auto_71_/_50] box-border hidden h-[50px] min-h-0 min-w-0 w-[71px] md:block md:min-h-[auto] md:min-w-[auto]"
              />
              <div className="text-white text-lg font-bold box-border caret-transparent tracking-[-0.18px] leading-[28.8px] text-center">
                Over 4 million ⭐⭐⭐⭐⭐ experiences hosted by 15,000 hosts and
                counting!
              </div>
              <div className="relative items-center box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
                <img
                  alt="Experience ratings right image"
                  src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-right.jpg"
                  className="relative text-transparent aspect-[auto_41_/_41] box-border hidden h-[41px] mt-[-15px] min-h-0 min-w-0 w-[41px] rounded-[50%] md:block md:min-h-[auto] md:min-w-[auto]"
                />
                <div className="relative text-[22px] font-semibold items-center bg-fuchsia-200 box-border caret-transparent flex h-10 justify-center tracking-[-0.22px] leading-[22px] mb-[-15px] ml-[-13px] min-h-0 min-w-0 w-10 z-[1] rounded-[50%] md:min-h-[auto] md:min-w-[auto]">
                  ❤️
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
