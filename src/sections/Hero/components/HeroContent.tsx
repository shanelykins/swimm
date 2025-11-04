import { SearchForm } from "@/sections/Hero/components/SearchForm";

export const HeroContent = () => {
  return (
    <div className="items-end box-border caret-transparent gap-x-2.5 flex h-full justify-between  gap-y-2.5 w-full z-10 md:items-center">
      <div className="items-center box-border caret-transparent flex basis-[0%] flex-col grow justify-center w-full z-[1] md:basis-auto md:grow-0">
        <div className="items-center box-border caret-transparent flex flex-col justify-center w-full md:w-auto">
          <h1 className="text-white text-[32px] font-black box-border caret-transparent tracking-[-0.32px] leading-[38.4px] text-center my-[21.44px] md:text-7xl md:tracking-[-2.16px] md:leading-[normal] md:my-[48.24px]">
            Escape locally.
            <div className="text-2xl font-semibold box-border caret-transparent tracking-[-0.72px]">
              Unlock access to thousands of private pools, by the hour
            </div>
          </h1>
          <SearchForm />
          <button className="text-white text-base font-bold items-center bg-transparent caret-transparent gap-x-0 flex flex-col tracking-[-0.14px] leading-[25.6px] gap-y-0 text-center underline mt-5 p-0 md:text-[19px] md:gap-x-2.5 md:flex-row md:tracking-[-0.189px] md:leading-[30.4px] md:gap-y-2.5 md:mt-[23px]">
            How Swimply works
            <img
              src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-8.svg"
              alt="Icon"
              className="text-base box-border caret-transparent h-[7px] tracking-[-0.14px] leading-[25.6px] w-[11px] md:text-[19px] md:tracking-[-0.189px] md:leading-[30.4px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
