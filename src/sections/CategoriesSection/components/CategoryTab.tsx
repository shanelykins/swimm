export const CategoryTab = () => {
  return (
    <button
      type="button"
      className="relative items-center bg-gray-100 caret-transparent flex shrink-0 justify-center text-center align-middle border px-3 py-2 rounded-[100px] border-solid border-transparent md:px-4 md:py-3 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]"
    >
      <div className="text-zinc-900 items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center gap-y-2">
        <img
          src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-32.svg"
          alt="Icon"
          className="box-border caret-transparent h-5 w-5"
        />
        <div className="items-center box-border caret-transparent gap-x-[5px] flex gap-y-[5px]">
          Pools
        </div>
      </div>
    </button>
  );
};
