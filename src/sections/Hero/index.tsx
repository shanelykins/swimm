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
          <section className="relative w-full z-[3] mt-[-50px] mb-[-50px] overflow-hidden" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
            <svg className="absolute top-[-1px] left-0 w-full" style={{ height: '80px' }} viewBox="0 0 1440 80" preserveAspectRatio="none">
              <path d="M0,64 C480,0 960,128 1440,64 L1440,0 L0,0 Z" fill="#141047"></path>
            </svg>

            <div className="relative z-[2] bg-[#141047] text-white text-center py-[30px] px-[10px]">
              <div className="flex justify-center items-center gap-3 max-w-[900px] mx-auto flex-wrap">
                <div className="hidden md:flex items-center">
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-left.png"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full border-2 border-white ml-[-10px] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-left.png"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full border-2 border-white ml-[-10px] shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  />
                </div>
                <p className="text-white text-base md:text-lg font-bold leading-tight">
                  Over 4 million <span className="text-[#FFD700]">★★★★★</span> experiences hosted by 15,000 hosts and counting!
                </p>
                <div className="hidden md:flex items-center relative">
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-right.jpg"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center text-base shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    ❤️
                  </div>
                </div>
              </div>
            </div>

            <svg className="absolute bottom-[-1px] left-0 w-full" style={{ height: '80px' }} viewBox="0 0 1440 80" preserveAspectRatio="none">
              <path d="M0,16 C480,80 960,-32 1440,16 L1440,80 L0,80 Z" fill="#141047"></path>
            </svg>
          </section>
        </div>
      </main>
    </div>
  );
};
