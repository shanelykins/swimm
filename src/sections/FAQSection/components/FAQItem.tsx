export const FAQItem = () => {
  return (
    <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
      <div className="box-border caret-transparent">
        <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
          <div className="items-center box-border caret-transparent flex justify-between">
            <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
              How does booking work?
            </div>
            <img
              src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
              alt="Icon"
              className="text-sky-500 box-border caret-transparent h-9 w-9"
            />
          </div>
        </button>
        <div className="box-border caret-transparent h-0 w-full overflow-hidden">
          <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
            Choose your date and time, then click Book Now. - Pools with the{" "}
            <img
              src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-53.svg"
              alt="Icon"
              className="text-sky-500 text-sm box-border caret-transparent h-[22px] leading-[22.4px] mb-[-3px] w-[22px] md:text-lg md:leading-[28.8px]"
            />
            Instant Book icon are confirmed immediately. - Others require host
            approval (you’ll hear back within 24 hours). You’re only charged
            once the booking is confirmed. Once confirmed you will get all the
            information you need including the address, how to enter and how to
            exit and anything else you’ll need to enjoy your swim!
          </p>
        </div>
      </div>
    </div>
  );
};
