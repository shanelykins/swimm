import { IglooGrid } from "@/sections/IglooSection/components/IglooGrid";

export const IglooSection = () => {
  return (
    <section className="items-center bg-transparent bg-[linear-gradient(rgb(79,37,204)_0%,rgb(32,2,123)_100%)] box-border caret-transparent flex flex-col justify-center max-w-[375px] pt-[55px] pb-16 px-[max(2%,18px)] md:bg-white md:bg-none md:max-w-screen-xl md:pb-[55px] md:px-[4%]">
      <div className="items-center box-border caret-transparent flex flex-col justify-center max-w-[1440px] w-full">
        <div className="items-center bg-none box-border caret-transparent gap-x-12 flex flex-col gap-y-12 w-full p-0 rounded-[56px] md:bg-[linear-gradient(rgb(79,37,204)_0%,rgb(32,2,123)_100%)] md:px-[55px] md:py-16">
          <div className="items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 text-center">
            <div className="relative text-white box-border caret-transparent">
              <img
                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-25.svg"
                alt="Icon"
                className="box-border caret-transparent h-[68px] w-[87px]"
              />
              <div className="absolute text-sm font-bold bg-sky-500 box-border caret-transparent tracking-[-0.14px] leading-[19.6px] rotate-[-11.000002265588616deg] px-1.5 py-1 rounded-lg -right-3 bottom-[13px]">
                NEW!
              </div>
            </div>
            <div className="text-white text-2xl font-extrabold box-border caret-transparent leading-[28.8px] text-ellipsis md:text-[40px] md:leading-[48px]">
              Introducing the Igloo collection
            </div>
            <div className="text-white text-base font-medium box-border caret-transparent tracking-[-0.2px] leading-[22.4px] md:text-xl md:leading-7">
              Escape the cold and spend time with the people you love at curated
              winter proof Swimply&#39;s.
            </div>
          </div>
          <IglooGrid />
        </div>
      </div>
    </section>
  );
};
