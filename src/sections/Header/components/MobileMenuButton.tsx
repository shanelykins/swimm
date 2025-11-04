export const MobileMenuButton = () => {
  return (
    <div className="items-center box-border caret-transparent flex col-end-[menu] col-start-[menu] row-end-[menu] row-start-[menu] justify-end">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <button
            aria-label="Dropdown menu button"
            className="relative text-[13.3333px] items-center bg-transparent caret-transparent flex justify-center text-center border ml-[11.2px] py-1 rounded-[100px] border-solid border-white"
          >
            <img
              src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-4.svg"
              alt="Icon"
              className="box-border caret-transparent h-[15px] w-5 mx-2.5"
            />
            <div className="text-white text-lg font-bold box-border caret-transparent leading-10 mr-2.5">
              Sign up
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
