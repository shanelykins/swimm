export const GuideStep = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 grid [grid-template-areas:'image''content'] grid-cols-[1fr] justify-center gap-y-4 w-full mb-6 pb-6 border-b-black/10 border-b md:gap-x-8 md:[grid-template-areas:'content_image'] md:grid-cols-[1fr_1fr] md:gap-y-8 md:mb-0 md:pb-0 md:border-b-black md:border-b-0">
      <div className="box-border caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] w-full">
        <div className="text-white text-[44px] font-bold items-center bg-cyan-200 box-border caret-transparent hidden h-[86px] justify-center tracking-[-0.44px] leading-[44px] w-[86px] mb-6 rounded-[50%] md:flex">
          🔍
        </div>
        <div className="text-neutral-800 text-lg font-bold box-border caret-transparent tracking-[-0.18px] leading-[21.6px] text-center mb-2 md:text-[32px] md:font-extrabold md:tracking-[-0.32px] md:leading-[38.4px] md:text-start md:mb-0">
          Step 1: Find your secret paradise.
        </div>
        <div className="text-gray-500 text-sm font-bold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
          Browse. Book. Swim.
        </div>
        <div className="text-gray-500 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
          Explore stunning private pools near you, pick your date and time, and
          send a request. Need it fast? Look for the{" "}
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-53.svg"
            alt="Icon"
            className="text-sky-500 text-sm box-border caret-transparent h-[22px] tracking-[-0.14px] leading-[19.6px] mb-[-3px] text-center w-[22px] md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start"
          />
          icon to book instantly — no waiting.
        </div>
      </div>
      <div className="relative aspect-[3_/_2] box-border caret-transparent col-end-[image] col-start-[image] row-end-[image] row-start-[image] transform-none w-full overflow-hidden rounded-[20px] md:rotate-[3.0000011085596214deg]">
        <img
          alt="Step 1: Find your secret paradise."
          src="https://c.animaapp.com/mhktpn46U9Eif8/assets/step1-layer.png"
          className="absolute text-transparent box-border h-full object-contain w-full inset-0"
        />
      </div>
    </div>
  );
};
