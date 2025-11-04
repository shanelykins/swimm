import { CategoryTabs } from "@/sections/CategoriesSection/components/CategoryTabs";
import { ListingsCarousel } from "@/sections/CategoriesSection/components/ListingsCarousel";
import { Link } from "react-router-dom";

export const CategoriesSection = () => {
  return (
    <section className="items-center box-border caret-transparent flex flex-col justify-center w-full py-[35px] md:py-[65px]">
      <div className="items-center box-border caret-transparent flex flex-col max-w-[375px] md:max-w-screen-xl mx-auto w-full px-[max(2%,18px)] md:px-[4%]">
      <div className="items-center box-border caret-transparent flex flex-col max-w-[1440px] w-full">
        <h3 className="text-neutral-800 text-2xl font-extrabold box-border caret-transparent tracking-[-0.24px] leading-[28.8px] text-center mb-1 md:text-5xl md:font-black md:tracking-[-0.48px] md:leading-[57.6px]">
          More than just pools
        </h3>
        <div className="text-gray-500 text-base font-medium box-border caret-transparent tracking-[-0.24px] leading-[22px] text-center mb-9 md:text-2xl md:leading-[38.4px]">
          Enjoy a variety of joy filled spaces, always unique, always your own
        </div>
        <CategoryTabs />
        <ListingsCarousel />
        <div className="box-border caret-transparent">
          <Link
            to="/search?space_type=igloo"
            className="text-white bg-indigo-700 box-border caret-transparent text-center w-full px-[30px] py-[18px] rounded-[100px] md:w-auto md:px-10 md:py-[30px]"
          >
            Discover igloos near me
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
};
