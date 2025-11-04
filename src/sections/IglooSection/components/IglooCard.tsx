export const IglooCard = () => {
  return (
    <a
      href="/search?space_type=igloo&use_case=indoor"
      className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-nunito_199a07 after:md:block"
    >
      <img
        alt="Indoor pools"
        src="https://c.animaapp.com/mhktpn46U9Eif8/assets/indoor-pool.jpg"
        className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
      />
      <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
        <div className="text-white text-lg font-bold items-center bg-sky-500 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
          <img
            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-26.svg"
            alt="Icon"
            className="text-lg box-border caret-transparent h-6 tracking-[-0.184px] leading-[28.8px] w-6 md:text-[14.326px] md:tracking-[-0.143px] md:leading-[22.9216px]"
          />
        </div>
        <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
          Indoor pools
        </div>
      </div>
    </a>
  );
};
