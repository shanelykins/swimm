import { CategoryTab } from "@/sections/CategoriesSection/components/CategoryTab";

export const CategoryTabs = () => {
  return (
    <div className="self-start box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 overflow-auto mb-5 md:self-auto md:max-w-none md:overflow-visible md:mb-10">
      <CategoryTab />
      <button
        type="button"
        className="relative items-center bg-indigo-700 caret-transparent flex shrink-0 justify-center text-center align-middle border px-3 py-2 rounded-[100px] border-solid border-transparent md:px-4 md:py-3 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]"
      >
        <div className="text-white items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center gap-y-2">
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-33.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
          <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px]">
            Igloos
            <div className="text-xs font-extrabold bg-black/80 box-border caret-transparent leading-[14.4px] text-ellipsis overflow-hidden pt-1 pb-0.5 px-1.5 rounded-[999px]">
              NEW
            </div>
          </div>
        </div>
      </button>
      <button
        type="button"
        className="relative items-center bg-gray-100 caret-transparent flex shrink-0 justify-center text-center align-middle border px-3 py-2 rounded-[100px] border-solid border-transparent md:px-4 md:py-3 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]"
      >
        <div className="text-zinc-900 items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center gap-y-2">
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-34.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
          <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px]">
            Tennis courts
          </div>
        </div>
      </button>
      <button
        type="button"
        className="relative items-center bg-gray-100 caret-transparent flex shrink-0 justify-center text-center align-middle border px-3 py-2 rounded-[100px] border-solid border-transparent md:px-4 md:py-3 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]"
      >
        <div className="text-zinc-900 items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center gap-y-2">
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-35.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
          <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px]">
            Pickleball courts
          </div>
        </div>
      </button>
      <button
        type="button"
        className="relative items-center bg-gray-100 caret-transparent flex shrink-0 justify-center text-center align-middle border px-3 py-2 rounded-[100px] border-solid border-transparent md:px-4 md:py-3 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]"
      >
        <div className="text-zinc-900 items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center gap-y-2">
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-36.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
          <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px]">
            Hoops
          </div>
        </div>
      </button>
      <button
        type="button"
        className="relative items-center bg-gray-100 caret-transparent flex shrink-0 justify-center text-center align-middle border px-3 py-2 rounded-[100px] border-solid border-transparent md:px-4 md:py-3 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]"
      >
        <div className="text-zinc-900 items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center gap-y-2">
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-37.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
          <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px]">
            Indoor havens
          </div>
        </div>
      </button>
      <button
        type="button"
        className="relative items-center bg-gray-100 caret-transparent flex shrink-0 justify-center text-center align-middle border px-3 py-2 rounded-[100px] border-solid border-transparent md:px-4 md:py-3 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]"
      >
        <div className="text-zinc-900 items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center gap-y-2">
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-38.svg"
            alt="Icon"
            className="box-border caret-transparent h-5 w-5"
          />
          <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px]">
            Backyards
          </div>
        </div>
      </button>
    </div>
  );
};
