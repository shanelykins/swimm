export const DesktopNav = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-3.5 hidden min-h-0 min-w-0 gap-y-3.5 md:flex md:min-h-[auto] md:min-w-[auto]">
      <a
        href="/s?space_type=pool"
        className="text-white font-bold bg-indigo-700 box-border caret-transparent inline h-[50px] tracking-[-0.16px] leading-[22.4px] min-h-0 min-w-0 text-center px-[35px] py-3.5 rounded-[100px] md:block md:min-h-[auto] md:min-w-[auto]"
      >
        Find a Pool
      </a>
      <a
        href="/become-a-host"
        className="text-white font-bold box-border caret-transparent inline h-[50px] tracking-[-0.16px] leading-[22.4px] min-h-0 min-w-0 text-center border px-5 py-[13.65px] rounded-[100px] border-solid border-white md:block md:min-h-[auto] md:min-w-[auto] hover:bg-slate-800 hover:border-slate-800"
      >
        Become a Host
      </a>
    </div>
  );
};
