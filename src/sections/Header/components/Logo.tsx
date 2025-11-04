export const Logo = () => {
  return (
    <a
      aria-label="Swimply homepage"
      href="/"
      className="relative box-border caret-transparent flex h-10 justify-start"
    >
      <div className="relative text-white box-border caret-transparent">
        <div className="relative text-[29.694px] font-bold items-center box-border caret-transparent gap-x-1 flex flex-row tracking-[-0.891px] gap-y-1 text-right left-0 top-0 md:absolute md:gap-x-[normal] md:flex-col md:gap-y-[normal]">
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-[30px] w-7"
          />
          Swimply
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-3.svg"
            alt="Icon"
            className="box-border caret-transparent h-[19px] w-12"
          />
        </div>
      </div>
    </a>
  );
};
