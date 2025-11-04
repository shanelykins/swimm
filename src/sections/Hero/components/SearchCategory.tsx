export const SearchCategory = () => {
  return (
    <div className="bg-white box-border caret-transparent flex w-full overflow-hidden p-2 border-2 border-solid border-transparent md:w-[250px] md:pt-3.5 md:pb-4 md:px-6">
      <div className="items-start box-border caret-transparent gap-x-2 flex basis-[0%] flex-row grow justify-start gap-y-2 w-full md:gap-x-[7px] md:flex-col md:justify-center md:gap-y-[7px] md:w-auto">
        <div className="text-gray-500 text-xs font-medium box-border caret-transparent hidden tracking-[-0.24px] leading-[14px] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          I want...
        </div>
        <div className="items-center box-border caret-transparent gap-x-1 flex gap-y-1">
          <div className="box-border caret-transparent block h-5 min-h-[auto] min-w-[auto] w-5 md:hidden md:min-h-0 md:min-w-0">
            <img
              src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-6.svg"
              alt="Icon"
              className="text-zinc-900 box-border caret-transparent h-5 w-5"
            />
          </div>
          <div className="text-sm font-semibold box-border caret-transparent tracking-[-0.28px] leading-[14px] pointer-events-none w-full md:font-bold md:w-auto">
            Pools
          </div>
          <div className="box-border caret-transparent hidden h-5 min-h-0 min-w-0 w-5 md:block md:min-h-[auto] md:min-w-[auto]">
            <img
              src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-6.svg"
              alt="Icon"
              className="text-zinc-900 box-border caret-transparent h-5 w-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
