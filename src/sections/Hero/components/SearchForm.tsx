import { SearchCategory } from "@/sections/Hero/components/SearchCategory";
import { SearchLocation } from "@/sections/Hero/components/SearchLocation";
import { SearchDate } from "@/sections/Hero/components/SearchDate";
import { SearchButton } from "@/sections/Hero/components/SearchButton";

export const SearchForm = () => {
  return (
    <div className="relative items-start bg-white box-border caret-transparent gap-x-1 flex flex-col justify-start gap-y-1 w-full overflow-hidden p-2.5 rounded-[25px] md:items-center md:flex-row md:w-auto md:pl-0 md:pr-2 md:py-0 md:rounded-full">
      <SearchCategory />
      <SearchLocation variant="simple" />
      <SearchLocation variant="default" />
      <SearchDate />
      <SearchButton />
    </div>
  );
};
