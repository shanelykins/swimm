export const AnnouncementBanner = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="text-white text-xs items-center bg-violet-950 box-border caret-transparent gap-x-[7px] hidden justify-center leading-3 gap-y-[7px] text-center w-full px-6 py-4 md:text-base md:flex md:leading-4 md:px-16">
        <img
          src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-1.svg"
          alt="Icon"
          className="text-xs box-border caret-transparent inline h-7 leading-3 w-[29px] md:text-base md:block md:leading-4"
        />
        <div className="text-xs items-start box-border caret-transparent gap-x-0.5 flex flex-col leading-3 min-h-0 min-w-0 gap-y-0.5 md:text-base md:[align-items:normal] md:gap-x-[7px] md:flex-row md:leading-4 md:min-h-[auto] md:min-w-[auto] md:gap-y-[7px]">
          <span className="text-xs font-extrabold box-border caret-transparent block leading-3 min-h-0 min-w-0 md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            Introducing Igloos
          </span>
          <div className="text-xs box-border caret-transparent leading-3 min-h-0 min-w-0 text-left md:text-base md:leading-4 md:min-h-[auto] md:min-w-[auto]">
            – Escape the cold and enjoy hot tubs, indoor pools, year round
            heated pools, saunas, caves and more. 🔥
          </div>
        </div>
        <a
          href="/s?space_type=igloo"
          className="text-xs font-bold box-border caret-transparent inline shrink-0 tracking-[-0.16px] leading-[19.2px] min-h-0 min-w-0 border ml-0 px-3 py-1 rounded-[105px] border-solid border-white md:text-base md:block md:leading-[25.6px] md:min-h-[auto] md:min-w-[auto] md:ml-3"
        >
          Book an Igloo
        </a>
      </div>
      <header className="sticky items-center box-border caret-transparent grid [grid-template-areas:'logo_center_menu'] grid-cols-[auto_1fr_auto] w-full z-[56] px-5 py-2.5 left-0 top-0 md:px-[60px]">
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
        <div className="box-border caret-transparent col-end-[center] col-start-[center] row-end-[center] row-start-[center]">
          <div className="items-center box-border caret-transparent flex justify-end">
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
          </div>
        </div>
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
      </header>
    </div>
  );
};
