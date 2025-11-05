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
        </div>
      </main>
    </div>
  );
};
