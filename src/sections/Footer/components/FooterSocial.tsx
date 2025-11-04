export const FooterSocial = () => {
  return (
    <div className="relative box-border caret-transparent col-end-[social] col-start-[social] row-end-[social] row-start-[social]">
      <p className="text-white text-sm font-medium box-border caret-transparent leading-[21px] mb-[15px] md:mb-5">
        Swimply, Escape locally.
      </p>
      <p className="text-white text-sm box-border caret-transparent flex my-3.5">
        Discover and book private pools, hot tubs, gathering spaces, sports
        courts and soon much more. #EscapeLocally
      </p>
      <div className="box-border caret-transparent gap-x-2.5 flex gap-y-2.5 mt-[30px]">
        <a
          href="https://www.facebook.com/swimply.official"
          aria-label="Facebook"
          className="text-white box-border caret-transparent block h-[35px] w-[35px] mr-2.5 p-[5px]"
        >
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-63.svg"
            alt="Icon"
            className="box-border caret-transparent h-full w-full"
          />
        </a>
        <a
          href="https://x.com/swimply"
          aria-label="X"
          className="text-white box-border caret-transparent block h-[35px] w-[35px] mr-2.5 p-[5px]"
        >
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-64.svg"
            alt="Icon"
            className="box-border caret-transparent h-full w-full"
          />
        </a>
        <a
          href="https://www.instagram.com/swimply"
          aria-label="Instagram"
          className="text-white box-border caret-transparent block h-[35px] w-[35px] mr-2.5 p-[5px]"
        >
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-65.svg"
            alt="Icon"
            className="box-border caret-transparent h-full w-full"
          />
        </a>
      </div>
    </div>
  );
};
