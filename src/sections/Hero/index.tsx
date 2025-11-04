import { HeroContent } from "@/sections/Hero/components/HeroContent";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const Hero = () => {
  return (
    <div className="relative items-center box-border caret-transparent block justify-center mt-[-70px] md:flex">
      <main className="box-border caret-transparent basis-[0%] grow min-h-[1000px] z-0 md:min-h-[900px]">
        <div className="box-border caret-transparent">
          <div className="relative items-center bg-neutral-900 bg-no-repeat bg-cover box-border caret-transparent flex flex-col h-[885px] justify-center max-h-[700px] min-h-[500px] overflow-hidden bg-center pt-[max(2%,18px)] pb-[100px] px-[max(2%,18px)] md:h-[820px] md:min-h-0 md:p-[4%] before:accent-auto before:bg-[linear-gradient(rgba(0,0,0,0.25)_43.14%,rgba(0,0,0,0)_73.6%)] before:caret-transparent before:text-black before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[150px] before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-full before:z-[5] before:border-separate before:left-0 before:top-0 before:font-nunito_199a07 before:md:bg-[linear-gradient(rgba(0,0,0,0.12)_55.21%,rgba(0,0,0,0)_100%)]">
            <HeroContent />
            <div className="absolute bg-[linear-gradient(rgba(92,192,209,0)_12.89%,rgb(128,111,100)_26.29%,rgb(128,111,100)_56.58%)] box-border caret-transparent block h-3/5 w-full z-[2] left-0 bottom-0 md:static md:bg-none md:hidden md:h-auto md:w-auto md:z-10 md:left-auto md:bottom-auto"></div>
            <HeroImage />
          </div>
          <section className="[mask-image:radial-gradient(115.24px_at_50%_137.5px,rgb(0,0,0)_99%,rgba(0,0,0,0)_101%),radial-gradient(115.24px_at_50%_-112.5px,rgba(0,0,0,0)_99%,rgb(0,0,0)_101%),radial-gradient(115.24px_at_50%_calc(100%_-_137.5px),rgb(0,0,0)_99%,rgba(0,0,0,0)_101%),radial-gradient(115.24px_at_50%_calc(100%_+_112.5px),rgba(0,0,0,0)_99%,rgb(0,0,0)_101%)] relative items-center bg-violet-950 box-border caret-transparent flex flex-col justify-center mb-[-50px] mt-[-50px] [mask-clip:border-box,border-box,border-box,border-box] [mask-composite:add,add,add,add] [mask-mode:match-source,match-source,match-source,match-source] [mask-origin:border-box,border-box,border-box,border-box] [mask-repeat:repeat-x,repeat-x,repeat-x,repeat-x] [mask-size:100px_51%,100px_calc(51%_-_25px),100px_51%,100px_calc(51%_-_25px)]  z-[3] px-[4%] py-[50px] md:[mask-image:radial-gradient(182px_at_50%_225px,rgb(0,0,0)_99%,rgba(0,0,0,0)_101%),radial-gradient(182px_at_50%_-175px,rgba(0,0,0,0)_99%,rgb(0,0,0)_101%),radial-gradient(182px_at_50%_calc(100%_-_225px),rgb(0,0,0)_99%,rgba(0,0,0,0)_101%),radial-gradient(182px_at_50%_calc(100%_+_175px),rgba(0,0,0,0)_99%,rgb(0,0,0)_101%)] md:mb-[-75px] md:mt-[-75px] md:[mask-size:200px_51%,200px_calc(51%_-_50px),200px_51%,200px_calc(51%_-_50px)] md: md:py-[75px]">
            <div className="items-center box-border caret-transparent gap-x-[17px] flex justify-center  gap-y-[17px] w-full">
              <img
                alt="Experience ratings left image"
                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-left.png"
                className="text-transparent aspect-[auto_71_/_50] box-border hidden h-[50px] min-h-0 min-w-0 w-[71px] md:block md:min-h-[auto] md:min-w-[auto]"
              />
              <div className="text-white text-lg font-bold box-border caret-transparent tracking-[-0.18px] leading-[28.8px] text-center">
                Over 4 million ⭐⭐⭐⭐⭐ experiences hosted by 15,000 hosts and
                counting!
              </div>
              <div className="relative items-center box-border caret-transparent hidden min-h-0 min-w-0 md:flex md:min-h-[auto] md:min-w-[auto]">
                <img
                  alt="Experience ratings right image"
                  src="https://c.animaapp.com/mhktpn46U9Eif8/assets/desktop-right.jpg"
                  className="relative text-transparent aspect-[auto_41_/_41] box-border hidden h-[41px] mt-[-15px] min-h-0 min-w-0 w-[41px] rounded-[50%] md:block md:min-h-[auto] md:min-w-[auto]"
                />
                <div className="relative text-[22px] font-semibold items-center bg-fuchsia-200 box-border caret-transparent flex h-10 justify-center tracking-[-0.22px] leading-[22px] mb-[-15px] ml-[-13px] min-h-0 min-w-0 w-10 z-[1] rounded-[50%] md:min-h-[auto] md:min-w-[auto]">
                  ❤️
                </div>
              </div>
            </div>
          </section>
          <section className="items-center bg-[linear-gradient(rgb(224,240,255)_63.84%,rgb(255,255,255)_100%)] box-border caret-transparent flex flex-col justify-center  pt-[55px] pb-[30px] px-[max(2%,18px)] md: md:pb-[55px] md:px-[4%]">
            <div className="items-center box-border caret-transparent gap-x-[15px] flex flex-col justify-center  gap-y-[15px] w-full md:gap-x-[45px] md:flex-row md:gap-y-[45px]">
              <div className="text-sky-300 text-sm font-bold box-border caret-transparent shrink-0 tracking-[-0.14px] leading-[21px] md:text-blue-300 md:text-[21px] md:tracking-[-0.21px]">
                As seen on:
              </div>
              <div className="relative box-border caret-transparent w-full overflow-hidden">
                <div className="items-center box-border caret-transparent gap-x-5 hidden justify-between gap-y-5 w-full md:gap-x-[35px] md:flex md:gap-y-[35px]">
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-9.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent inline h-4 w-[195px] md:text-blue-300 md:block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-10.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent inline h-[19px] w-[146px] md:text-blue-300 md:block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-11.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent inline h-9 w-[50px] md:text-blue-300 md:block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-12.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent inline h-[41px] w-[55px] md:text-blue-300 md:block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-13.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent inline h-[29px] w-[92px] md:text-blue-300 md:block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-14.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent inline h-[37px] w-[47px] md:text-blue-300 md:block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-15.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent inline h-[19px] w-[132px] md:text-blue-300 md:block"
                  />
                </div>
                <div className="items-center box-border caret-transparent gap-x-5 flex justify-start gap-y-5 w-max overflow-hidden md:gap-x-[35px] md:hidden md:gap-y-[35px]">
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-16.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-4 w-[195px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-17.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[19px] w-[146px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-18.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-9 w-[50px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-19.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[41px] w-[55px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-20.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[29px] w-[92px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-21.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[37px] w-[47px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-22.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[19px] w-[132px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-16.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-4 w-[195px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-17.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[19px] w-[146px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-18.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-9 w-[50px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-19.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[41px] w-[55px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-20.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[29px] w-[92px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-21.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[37px] w-[47px] md:text-blue-300 md:inline-block"
                  />
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-22.svg"
                    alt="Icon"
                    className="text-sky-300 box-border caret-transparent block shrink-0 h-[19px] w-[132px] md:text-blue-300 md:inline-block"
                  />
                </div>
              </div>
            </div>
            <div className="items-center border-t-indigo-700/30 box-border caret-transparent flex flex-col  w-full mt-5 py-10 border-t md:mt-0 md:py-[60px] md:border-t-black md:border-t-0">
              <div className="text-violet-950 text-2xl font-extrabold box-border caret-transparent tracking-[-0.24px] leading-[28.8px] text-center mb-5 md:text-5xl md:font-black md:tracking-[-0.48px] md:leading-[57.6px] md:mb-6">
                Join over 4,000,000+ people who love to Swimply
              </div>
              <div className="text-xl items-center box-border caret-transparent gap-x-[15px] flex gap-y-[15px] md:text-base">
                <button className="relative text-base font-bold items-center bg-indigo-700 caret-transparent flex justify-center tracking-[-0.2px] leading-[25.6px] text-center align-middle w-[115px] border pt-1.5 pb-2 rounded-[105px] border-solid border-transparent md:text-xl md:leading-8 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]">
                  <div className="text-white text-base items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[25.6px] gap-y-2 md:text-xl md:leading-8">
                    Guests
                  </div>
                </button>
                <button className="relative text-base font-bold items-center bg-indigo-700/10 caret-transparent flex justify-center tracking-[-0.2px] leading-[25.6px] text-center align-middle w-[115px] border pt-1.5 pb-2 rounded-[105px] border-solid border-transparent md:text-xl md:leading-8 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]">
                  <div className="text-indigo-700 text-base items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[25.6px] gap-y-2 md:text-xl md:leading-8">
                    Hosts
                  </div>
                </button>
              </div>
              <div className="box-border caret-transparent w-[calc(100%_-_76px)] mt-5 md:w-[calc(100%_-_120px)] md:mt-11">
                <div className="relative box-border caret-transparent">
                  <button
                    aria-label="prev arrow"
                    className="absolute text-indigo-700 text-[0px] items-center bg-indigo-700/10 caret-transparent block h-7 justify-center left-[-38px] leading-[0px] text-center top-[calc(55%_-_18px)] translate-y-[-50.0%] w-7 p-0 rounded-[50%] md:flex md:h-11 md:left-[-5%] md:w-11 before:accent-auto before:caret-transparent before:text-white before:hidden before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:opacity-75 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-slick hover:text-white hover:bg-indigo-700 hover:border-white"
                  >
                    <img
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-23.svg"
                      alt="Icon"
                      className="box-border caret-transparent inline h-[15px] w-[15px] md:block md:h-5 md:w-5"
                    />
                  </button>
                  <div className="relative box-border caret-transparent overflow-hidden">
                    <div className="relative box-border caret-transparent flex translate-x-[-263px] w-[5523px] mx-auto left-0 top-0 md:translate-x-[-1059px] md:w-[8119px] before:accent-auto before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-nunito_199a07 after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-nunito_199a07">
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 pt-0 pb-[18px] md:w-auto md:mx-0 md:pt-[50px]">
                          <div className="items-center bg-white shadow-[rgba(0,0,0,0.03)_12px_18px_0px_0px] box-border caret-transparent flex flex-col max-w-full mx-0 px-4 py-5 rounded-3xl md:max-w-[415px] md:mx-3 md:px-10 md:py-11">
                            <div className="text-[16.8px] box-border caret-transparent mb-1 md:mb-[6.3px]">
                              ⭐⭐⭐⭐⭐
                            </div>
                            <div className="text-neutral-800 text-sm font-extrabold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center mb-1 md:text-xl md:tracking-[-0.2px] md:leading-8 md:mb-[6.3px]">
                              Samantha from Wheat Ridge, CO
                            </div>
                            <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-lg md:tracking-[-0.18px] md:leading-[28.8px]">
                              Awesome app for finding private swimming pools.
                              Super easy and fun!
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 pt-0 pb-[18px] md:w-auto md:mx-0 md:pt-[50px]">
                          <div className="items-center bg-white shadow-[rgba(0,0,0,0.03)_12px_18px_0px_0px] box-border caret-transparent flex flex-col max-w-full mx-0 px-4 py-5 rounded-3xl md:max-w-[415px] md:mx-3 md:px-10 md:py-11">
                            <div className="text-[16.8px] box-border caret-transparent mb-1 md:mb-[6.3px]">
                              ⭐⭐⭐⭐⭐
                            </div>
                            <div className="text-neutral-800 text-sm font-extrabold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center mb-1 md:text-xl md:tracking-[-0.2px] md:leading-8 md:mb-[6.3px]">
                              Vicmary from Winter Haven, FL
                            </div>
                            <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-lg md:tracking-[-0.18px] md:leading-[28.8px]">
                              Perfect for finding spots for celebrations and
                              gatherings. Highly recommend!
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 pt-0 pb-[18px] md:w-auto md:mx-0 md:pt-[50px]">
                          <div className="items-center bg-white shadow-[rgba(0,0,0,0.03)_12px_18px_0px_0px] box-border caret-transparent flex flex-col max-w-full mx-0 px-4 py-5 rounded-3xl md:max-w-[415px] md:mx-3 md:px-10 md:py-11">
                            <div className="text-[16.8px] box-border caret-transparent mb-1 md:mb-[6.3px]">
                              ⭐⭐⭐⭐⭐
                            </div>
                            <div className="text-neutral-800 text-sm font-extrabold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center mb-1 md:text-xl md:tracking-[-0.2px] md:leading-8 md:mb-[6.3px]">
                              Cassie from Houston, TX
                            </div>
                            <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-lg md:tracking-[-0.18px] md:leading-[28.8px]">
                              Used it for my daughter&#39;s birthday—great host,
                              big pool, trampoline, privacy. Will book again!
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 pt-0 pb-[18px] md:w-auto md:mx-0 md:pt-[50px]">
                          <div className="items-center bg-white shadow-[rgba(0,0,0,0.03)_12px_18px_0px_0px] box-border caret-transparent flex flex-col max-w-full mx-0 px-4 py-5 rounded-3xl md:max-w-[415px] md:mx-3 md:px-10 md:py-11">
                            <div className="text-[16.8px] box-border caret-transparent mb-1 md:mb-[6.3px]">
                              ⭐⭐⭐⭐⭐
                            </div>
                            <div className="text-neutral-800 text-sm font-extrabold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center mb-1 md:text-xl md:tracking-[-0.2px] md:leading-8 md:mb-[6.3px]">
                              Samantha from Wheat Ridge, CO
                            </div>
                            <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-lg md:tracking-[-0.18px] md:leading-[28.8px]">
                              Awesome app for finding private swimming pools.
                              Super easy and fun!
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 pt-0 pb-[18px] md:w-auto md:mx-0 md:pt-[50px]">
                          <div className="items-center bg-white shadow-[rgba(0,0,0,0.03)_12px_18px_0px_0px] box-border caret-transparent flex flex-col max-w-full mx-0 px-4 py-5 rounded-3xl md:max-w-[415px] md:mx-3 md:px-10 md:py-11">
                            <div className="text-[16.8px] box-border caret-transparent mb-1 md:mb-[6.3px]">
                              ⭐⭐⭐⭐⭐
                            </div>
                            <div className="text-neutral-800 text-sm font-extrabold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center mb-1 md:text-xl md:tracking-[-0.2px] md:leading-8 md:mb-[6.3px]">
                              Vicmary from Winter Haven, FL
                            </div>
                            <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-lg md:tracking-[-0.18px] md:leading-[28.8px]">
                              Perfect for finding spots for celebrations and
                              gatherings. Highly recommend!
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 pt-0 pb-[18px] md:w-auto md:mx-0 md:pt-[50px]">
                          <div className="items-center bg-white shadow-[rgba(0,0,0,0.03)_12px_18px_0px_0px] box-border caret-transparent flex flex-col max-w-full mx-0 px-4 py-5 rounded-3xl md:max-w-[415px] md:mx-3 md:px-10 md:py-11">
                            <div className="text-[16.8px] box-border caret-transparent mb-1 md:mb-[6.3px]">
                              ⭐⭐⭐⭐⭐
                            </div>
                            <div className="text-neutral-800 text-sm font-extrabold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center mb-1 md:text-xl md:tracking-[-0.2px] md:leading-8 md:mb-[6.3px]">
                              Cassie from Houston, TX
                            </div>
                            <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-lg md:tracking-[-0.18px] md:leading-[28.8px]">
                              Used it for my daughter&#39;s birthday—great host,
                              big pool, trampoline, privacy. Will book again!
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                    </div>
                  </div>
                  <button
                    aria-label="next arrow"
                    className="absolute text-indigo-700 text-[0px] items-center bg-indigo-700/10 caret-transparent block h-7 justify-center leading-[0px] right-[-38px] text-center top-[calc(55%_-_18px)] translate-y-[-50.0%] w-7 p-0 rounded-[50%] md:flex md:h-11 md:right-[-5%] md:w-11 before:accent-auto before:caret-transparent before:text-white before:hidden before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:opacity-75 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-slick hover:text-white hover:bg-indigo-700 hover:border-white"
                  >
                    <img
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-24.svg"
                      alt="Icon"
                      className="box-border caret-transparent inline h-[15px] w-[15px] md:block md:h-5 md:w-5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
