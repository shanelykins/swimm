import { Link } from "react-router-dom";

export const SearchButton = () => {
  return (
    <Link
      aria-label="go to search"
      to="/search?space_type=pool"
      className="text-white text-base font-bold items-center aspect-auto bg-sky-500 box-border caret-transparent flex h-full justify-center leading-[26px] min-h-[auto] text-center w-full my-0 pt-[7px] pb-2.5 rounded-[60px] md:text-lg md:aspect-square md:leading-[18px] md:min-h-[50px] md:w-auto md:my-2 md:py-0 md:rounded-[50%]"
    >
      <img
        src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-7.svg"
        alt="Icon"
        className="text-base box-content caret-black h-auto leading-[normal] align-middle w-auto md:text-lg md:aspect-auto md:box-border md:caret-transparent md:h-5 md:leading-[18px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
      />
    </Link>
  );
};
