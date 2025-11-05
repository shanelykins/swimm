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
          <section className="relative w-full z-[3] mt-[-60px] mb-[-60px]">
            <div className="relative w-full">
              <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]" style={{ height: '50px' }}>
                <svg className="relative block w-full" style={{ height: '50px' }} viewBox="0 0 1200 50" preserveAspectRatio="none">
                  <path d="M0,25 Q50,5 100,25 T200,25 Q250,5 300,25 T400,25 Q450,5 500,25 T600,25 Q650,5 700,25 T800,25 Q850,5 900,25 T1000,25 Q1050,5 1100,25 T1200,25 L1200,50 L0,50 Z" fill="#1e1b4b" />
                </svg>
              </div>

              <div className="relative bg-[#1e1b4b] py-6 md:py-8 px-4">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-left.png"
                    alt="User avatar"
                    className="hidden md:block w-16 h-12 object-contain"
                  />
                  <p className="text-white text-center font-bold text-lg md:text-xl leading-tight">
                    Over 4 million ⭐⭐⭐⭐⭐ experiences hosted by 15,000 hosts and counting!
                  </p>
                  <div className="hidden md:flex items-center relative">
                    <img
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-right.jpg"
                      alt="User avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center text-xl">
                      ❤️
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]" style={{ height: '50px' }}>
                <svg className="relative block w-full" style={{ height: '50px' }} viewBox="0 0 1200 50" preserveAspectRatio="none">
                  <path d="M0,0 L1200,0 L1200,25 Q1150,45 1100,25 T1000,25 Q950,45 900,25 T800,25 Q750,45 700,25 T600,25 Q550,45 500,25 T400,25 Q350,45 300,25 T200,25 Q150,45 100,25 T0,25 Z" fill="#1e1b4b" />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
