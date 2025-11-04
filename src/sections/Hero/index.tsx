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
          0
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
          <section className="items-center bg-transparent bg-[linear-gradient(rgb(79,37,204)_0%,rgb(32,2,123)_100%)] box-border caret-transparent flex flex-col justify-center  pt-[55px] pb-16 px-[max(2%,18px)] md:bg-white md:bg-none md: md:pb-[55px] md:px-[4%]">
            <div className="items-center box-border caret-transparent flex flex-col justify-center  w-full">
              <div className="items-center bg-none box-border caret-transparent gap-x-12 flex flex-col gap-y-12 w-full p-0 rounded-[56px] md:bg-[linear-gradient(rgb(79,37,204)_0%,rgb(32,2,123)_100%)] md:px-[55px] md:py-16">
                <div className="items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 text-center">
                  <div className="relative text-white box-border caret-transparent">
                    <img
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-25.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-[68px] w-[87px]"
                    />
                    <div className="absolute text-sm font-bold bg-sky-500 box-border caret-transparent tracking-[-0.14px] leading-[19.6px] rotate-[-11.000002265588616deg] px-1.5 py-1 rounded-lg -right-3 bottom-[13px]">
                      NEW!
                    </div>
                  </div>
                  <div className="text-white text-2xl font-extrabold box-border caret-transparent leading-[28.8px] text-ellipsis md:text-[40px] md:leading-[48px]">
                    Introducing the Igloo collection
                  </div>
                  <div className="text-white text-base font-medium box-border caret-transparent tracking-[-0.2px] leading-[22.4px] md:text-xl md:leading-7">
                    Escape the cold and spend time with the people you love at
                    curated winter proof Swimply&#39;s.
                  </div>
                </div>
                <div className="items-stretch box-border caret-transparent gap-x-3 grid grid-cols-[1fr_1fr] justify-items-stretch gap-y-3 w-full mt-3 md:gap-x-6 md:grid-cols-[1fr_1fr_1fr] md:gap-y-6 md:mt-6">
                  <a
                    href="/s?space_type=igloo&use_case=indoor"
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
                  <a
                    href="/s?space_type=igloo&use_case=hot_tub"
                    className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-nunito_199a07 after:md:block"
                  >
                    <img
                      alt="Hot tubs"
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/hot-tubs.jpg"
                      className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
                    />
                    <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                      <div className="text-white text-lg font-bold items-center bg-fuchsia-800 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                        <img
                          src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-27.svg"
                          alt="Icon"
                          className="text-lg box-border caret-transparent h-6 tracking-[-0.184px] leading-[28.8px] w-6 md:text-[14.326px] md:tracking-[-0.143px] md:leading-[22.9216px]"
                        />
                      </div>
                      <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                        Hot tubs
                      </div>
                    </div>
                  </a>
                  <a
                    href="/s?space_type=igloo&use_case=sauna"
                    className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-nunito_199a07 after:md:block"
                  >
                    <img
                      alt="Saunas"
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/saunas.png"
                      className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
                    />
                    <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                      <div className="text-white text-lg font-bold items-center bg-red-700 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                        <img
                          src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-28.svg"
                          alt="Icon"
                          className="text-lg box-border caret-transparent h-6 tracking-[-0.184px] leading-[28.8px] w-6 md:text-[14.326px] md:tracking-[-0.143px] md:leading-[22.9216px]"
                        />
                      </div>
                      <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                        Saunas
                      </div>
                    </div>
                  </a>
                  <a
                    href="/s?space_type=igloo&use_case=heated"
                    className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-nunito_199a07 after:md:block"
                  >
                    <img
                      alt="Heated pools"
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/heated-pools.png"
                      className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
                    />
                    <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                      <div className="text-white text-lg font-bold items-center bg-indigo-950 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                        <img
                          src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-29.svg"
                          alt="Icon"
                          className="text-lg box-border caret-transparent h-6 tracking-[-0.184px] leading-[28.8px] w-6 md:text-[14.326px] md:tracking-[-0.143px] md:leading-[22.9216px]"
                        />
                      </div>
                      <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                        Heated pools
                      </div>
                    </div>
                  </a>
                  <a
                    href="/s?space_type=igloo&use_case=backyard"
                    className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-nunito_199a07 after:md:block"
                  >
                    <img
                      alt="Cozy backyards"
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/cozy-backyards.jpg"
                      className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
                    />
                    <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                      <div className="text-white text-lg font-bold items-center bg-amber-600 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                        <img
                          src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-30.svg"
                          alt="Icon"
                          className="text-lg box-border caret-transparent h-6 tracking-[-0.184px] leading-[28.8px] w-6 md:text-[14.326px] md:tracking-[-0.143px] md:leading-[22.9216px]"
                        />
                      </div>
                      <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                        Cozy backyards
                      </div>
                    </div>
                  </a>
                  <a
                    href="/s?space_type=igloo&use_case=cave"
                    className="relative aspect-auto bg-neutral-100 box-border caret-transparent block w-full overflow-hidden p-5 rounded-2xl md:aspect-[448_/_303] md:bg-transparent md:p-0 md:rounded-[36px] after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0)_51.53%,rgba(0,0,0,0.6)_70.77%)] after:caret-transparent after:text-black after:hidden after:text-base after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-separate after:left-0 after:top-0 after:font-nunito_199a07 after:md:block"
                  >
                    <img
                      alt="Caves"
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/caves.png"
                      className="absolute text-transparent box-border hidden h-full object-cover w-full inset-0 md:block"
                    />
                    <div className="static items-center box-border caret-transparent gap-x-2 flex flex-col gap-y-2 z-[1] left-auto bottom-auto md:absolute md:flex-row md:left-7 md:bottom-7">
                      <div className="text-white text-lg font-bold items-center bg-pink-600 box-border caret-transparent flex h-9 justify-center tracking-[-0.184px] leading-[28.8px] w-9 rounded-[50%] md:text-[14.326px] md:h-10 md:tracking-[-0.143px] md:leading-[22.9216px] md:w-10">
                        <img
                          src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-31.svg"
                          alt="Icon"
                          className="text-lg box-border caret-transparent h-6 tracking-[-0.184px] leading-[28.8px] w-6 md:text-[14.326px] md:tracking-[-0.143px] md:leading-[22.9216px]"
                        />
                      </div>
                      <div className="text-zinc-900 text-sm font-bold box-border caret-transparent leading-[16.8px] text-ellipsis overflow-hidden md:text-gray-100 md:text-2xl md:font-black md:leading-[28.8px]">
                        Caves
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="items-center box-border caret-transparent flex flex-col justify-center  px-[max(2%,18px)] py-[35px] md: md:px-[4%] md:py-[65px]">
            <div className="items-center box-border caret-transparent flex flex-col  w-full">
              <h3 className="text-neutral-800 text-2xl font-extrabold box-border caret-transparent tracking-[-0.24px] leading-[28.8px] text-center mb-1 md:text-5xl md:font-black md:tracking-[-0.48px] md:leading-[57.6px]">
                More than just pools
              </h3>
              <div className="text-gray-500 text-base font-medium box-border caret-transparent tracking-[-0.24px] leading-[22px] text-center mb-9 md:text-2xl md:leading-[38.4px]">
                Enjoy a variety of joy filled spaces, always unique, always your
                own
              </div>
              <div className="self-start box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 overflow-auto mb-5 md:self-auto md:max-w-none md:overflow-visible md:mb-10">
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
              <div className="box-border caret-transparent w-full">
                <div className="relative box-border caret-transparent">
                  <button
                    aria-label="prev arrow"
                    className="absolute text-transparent text-[0px] items-center bg-transparent caret-transparent hidden h-9 justify-center left-[-3.5%] leading-[0px] text-center transform-none w-9 p-0 rounded-[50%] top-1/4 md:text-sky-500 md:bg-sky-500/20 md:flex md:translate-y-[-50.0%] before:accent-auto before:caret-transparent before:text-white before:hidden before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:opacity-25 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-slick before:md:opacity-75 hover:text-white hover:bg-sky-500 hover:border-white"
                  >
                    <img
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-39.svg"
                      alt="Icon"
                      className="text-transparent box-border caret-transparent inline h-[7px] w-[7px] md:text-sky-500 md:block md:h-[9px] md:w-[9px]"
                    />
                  </button>
                  <div className="relative box-border caret-transparent overflow-hidden">
                    <div className="relative box-border caret-transparent flex transform-none w-[1695px] mx-auto left-0 top-0 md:translate-x-[-1180px] md:w-[5900px] before:accent-auto before:caret-transparent before:text-black before:table before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[normal] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-nunito_199a07 after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-nunito_199a07">
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 md:w-auto md:mx-0">
                          <a
                            href="/pooldetails/10150"
                            className="box-border caret-transparent block w-full"
                          >
                            <div className="box-border caret-transparent h-[55%] overflow-hidden rounded-[10px]">
                              <img
                                alt="Popular Escape"
                                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/31.jpg"
                                className="text-transparent aspect-[auto_410_/_278] box-border h-[278px] leading-[normal] max-w-[410px] min-w-0 object-cover w-full mx-auto md:leading-[26px] md:min-w-[410px]"
                              />
                            </div>
                            <div className="box-border caret-transparent gap-x-1 flex flex-col justify-start max-w-[410px] gap-y-1 w-full overflow-hidden py-4 md:gap-x-3 md:gap-y-3">
                              <p className="text-lg font-medium box-border caret-transparent leading-[22px] text-ellipsis text-nowrap overflow-hidden md:text-xl md:font-bold md:leading-6">
                                Dino’s Hollywood Hills Oasis &amp; Epic Views -
                                Great Atmosphere, Beautiful Spac...
                              </p>
                              <div className="text-neutral-500 font-medium box-border caret-transparent leading-[22px] md:leading-[19.2px]">
                                Los Angeles
                              </div>
                              <div className="text-transparent box-border h-0 w-0 -my-1 md:-my-3">
                                <div className="box-border">4.9</div>
                                <div className="box-border">228</div>
                                <div className="box-border h-0 w-0">
                                  <div className="box-border h-0 w-0">
                                    Dino’s Hollywood Hills Oasis &amp; Epic
                                    Views - Great Atmosphere, Beautiful Space
                                    &amp; Fun!
                                  </div>
                                  <div className="box-border h-0 w-0">
                                    https://swimply.imgix.net/thumbnails/1747624394246-IMG_0399
                                    (1).jpeg
                                  </div>
                                </div>
                              </div>
                              <div className="items-center box-border caret-transparent gap-x-[5px] flex justify-start gap-y-[5px]">
                                <div
                                  title="4.9 Stars"
                                  className="relative items-center box-border caret-transparent flex"
                                >
                                  <div className="relative items-center box-border caret-transparent flex align-middle pr-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle pl-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-42.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                </div>
                                <div className="text-sky-500 font-semibold box-border caret-transparent leading-[26.8px] md:leading-[19.2px]">
                                  (228)
                                </div>
                              </div>
                              <div className="text-[22px] font-bold box-border caret-transparent leading-[34.8px] md:text-xl md:font-extrabold md:leading-7">
                                $62/hr
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 md:w-auto md:mx-0">
                          <a
                            href="/pooldetails/7625"
                            className="box-border caret-transparent block w-full"
                          >
                            <div className="box-border caret-transparent h-[55%] overflow-hidden rounded-[10px]">
                              <img
                                alt="Popular Escape"
                                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/33.jpg"
                                className="text-transparent aspect-[auto_410_/_278] box-border h-[278px] leading-[normal] max-w-[410px] min-w-0 object-cover w-full mx-auto md:leading-[26px] md:min-w-[410px]"
                              />
                            </div>
                            <div className="box-border caret-transparent gap-x-1 flex flex-col justify-start max-w-[410px] gap-y-1 w-full overflow-hidden py-4 md:gap-x-3 md:gap-y-3">
                              <p className="text-lg font-medium box-border caret-transparent leading-[22px] text-ellipsis text-nowrap overflow-hidden md:text-xl md:font-bold md:leading-6">
                                30 foot Waterslide Pool - one of a kind.
                              </p>
                              <div className="text-neutral-500 font-medium box-border caret-transparent leading-[22px] md:leading-[19.2px]">
                                Huntington
                              </div>
                              <div className="text-transparent box-border h-0 w-0 -my-1 md:-my-3">
                                <div className="box-border">5</div>
                                <div className="box-border">397</div>
                                <div className="box-border h-0 w-0">
                                  <div className="box-border h-0 w-0">
                                    30 foot Waterslide Pool - one of a kind.
                                  </div>
                                  <div className="box-border h-0 w-0">
                                    https://swimply.imgix.net/thumbnails/7625-810739877911625950772.jpeg
                                  </div>
                                </div>
                              </div>
                              <div className="items-center box-border caret-transparent gap-x-[5px] flex justify-start gap-y-[5px]">
                                <div
                                  title="5 Stars"
                                  className="relative items-center box-border caret-transparent flex"
                                >
                                  <div className="relative items-center box-border caret-transparent flex align-middle pr-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle pl-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                </div>
                                <div className="text-sky-500 font-semibold box-border caret-transparent leading-[26.8px] md:leading-[19.2px]">
                                  (397)
                                </div>
                              </div>
                              <div className="text-[22px] font-bold box-border caret-transparent leading-[34.8px] md:text-xl md:font-extrabold md:leading-7">
                                $104/hr
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden">
                        <div className="box-border caret-transparent flex w-full mx-1 md:w-auto md:mx-0">
                          <a
                            href="/pooldetails/35833"
                            className="box-border caret-transparent block w-full"
                          >
                            <div className="box-border caret-transparent h-[55%] overflow-hidden rounded-[10px]">
                              <img
                                alt="Popular Escape"
                                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/36.jpg"
                                className="text-transparent aspect-[auto_410_/_278] box-border h-[278px] leading-[normal] max-w-[410px] min-w-0 object-cover w-full mx-auto md:leading-[26px] md:min-w-[410px]"
                              />
                            </div>
                            <div className="box-border caret-transparent gap-x-1 flex flex-col justify-start max-w-[410px] gap-y-1 w-full overflow-hidden py-4 md:gap-x-3 md:gap-y-3">
                              <p className="text-lg font-medium box-border caret-transparent leading-[22px] text-ellipsis text-nowrap overflow-hidden md:text-xl md:font-bold md:leading-6">
                                Private Bal Harbour Ultra Lux Resort Waterfront
                                Pool/hot Tub (2 Hour Minimum)
                              </p>
                              <div className="text-neutral-500 font-medium box-border caret-transparent leading-[22px] md:leading-[19.2px]">
                                Bal Harbour
                              </div>
                              <div className="text-transparent box-border h-0 w-0 -my-1 md:-my-3">
                                <div className="box-border">4.9</div>
                                <div className="box-border">85</div>
                                <div className="box-border h-0 w-0">
                                  <div className="box-border h-0 w-0">
                                    Private Bal Harbour Ultra Lux Resort
                                    Waterfront Pool/hot Tub (2 Hour Minimum)
                                  </div>
                                  <div className="box-border h-0 w-0">
                                    https://swimply.imgix.net/thumbnails/35833-cover8894116291654729764.jpeg
                                  </div>
                                </div>
                              </div>
                              <div className="items-center box-border caret-transparent gap-x-[5px] flex justify-start gap-y-[5px]">
                                <div
                                  title="4.9 Stars"
                                  className="relative items-center box-border caret-transparent flex"
                                >
                                  <div className="relative items-center box-border caret-transparent flex align-middle pr-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle px-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                  <div className="relative items-center box-border caret-transparent flex align-middle pl-px">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-45.svg"
                                      alt="Icon"
                                      className="box-border caret-transparent h-5 w-5"
                                    />
                                  </div>
                                </div>
                                <div className="text-sky-500 font-semibold box-border caret-transparent leading-[26.8px] md:leading-[19.2px]">
                                  (85)
                                </div>
                              </div>
                              <div className="text-[22px] font-bold box-border caret-transparent leading-[34.8px] md:text-xl md:font-extrabold md:leading-7">
                                $173/hr
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-border caret-transparent flex float-left min-h-px w-full overflow-hidden"></div>
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block min-h-0 min-w-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <a
                            href="/pooldetails/10150"
                            className="box-content caret-black inline min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                          >
                            <div className="box-content caret-black h-auto rounded-none md:aspect-auto md:box-border md:caret-transparent md:h-[55%] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]">
                              <img
                                alt="Popular Escape"
                                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/31.jpg"
                                className="text-black box-content h-auto leading-[normal] max-w-none min-w-0 object-fill align-middle w-auto mx-0 md:text-transparent md:aspect-[auto_410_/_278] md:box-border md:h-[278px] md:leading-[26px] md:max-w-[410px] md:min-w-[410px] md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                              />
                            </div>
                            <div className="box-content caret-black gap-x-[normal] block flex-row justify-normal max-w-none gap-y-[normal] w-auto py-0 md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:flex-col md:justify-start md:max-w-[410px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:py-4 md:scroll-m-0 md:scroll-p-[auto]">
                              <p className="text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-clip text-wrap md:text-xl md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                Dino’s Hollywood Hills Oasis &amp; Epic Views -
                                Great Atmosphere, Beautiful Spac...
                              </p>
                              <div className="text-black font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-neutral-500 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[19.2px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                Los Angeles
                              </div>
                              <div className="text-black box-content h-auto min-h-0 min-w-0 w-auto my-0 md:text-transparent md:aspect-auto md:box-border md:h-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:-my-3 md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  4.9
                                </div>
                                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  228
                                </div>
                                <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    Dino’s Hollywood Hills Oasis &amp; Epic
                                    Views - Great Atmosphere, Beautiful Space
                                    &amp; Fun!
                                  </div>
                                  <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    https://swimply.imgix.net/thumbnails/1747624394246-IMG_0399
                                    (1).jpeg
                                  </div>
                                </div>
                              </div>
                              <div className="[align-items:normal] box-content caret-black gap-x-[normal] block justify-normal min-h-0 min-w-0 gap-y-[normal] md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[5px] md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[5px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div
                                  title="4.9 Stars"
                                  className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                >
                                  <img
                                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-46.svg"
                                    alt="Icon"
                                    className="static box-content caret-black h-auto align-middle visible w-auto z-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:invisible md:w-0 md:z-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                  />
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline pr-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pr-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline pl-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-47.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                </div>
                                <div className="text-black font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-sky-500 md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:leading-[19.2px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  (228)
                                </div>
                              </div>
                              <div className="text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-xl md:font-extrabold md:aspect-auto md:box-border md:caret-transparent md:leading-7 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                $62/hr
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block min-h-0 min-w-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <a
                            href="/pooldetails/7625"
                            className="box-content caret-black inline min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                          >
                            <div className="box-content caret-black h-auto rounded-none md:aspect-auto md:box-border md:caret-transparent md:h-[55%] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]">
                              <img
                                alt="Popular Escape"
                                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/33.jpg"
                                className="text-black box-content h-auto leading-[normal] max-w-none min-w-0 object-fill align-middle w-auto mx-0 md:text-transparent md:aspect-[auto_410_/_278] md:box-border md:h-[278px] md:leading-[26px] md:max-w-[410px] md:min-w-[410px] md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                              />
                            </div>
                            <div className="box-content caret-black gap-x-[normal] block flex-row justify-normal max-w-none gap-y-[normal] w-auto py-0 md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:flex-col md:justify-start md:max-w-[410px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:py-4 md:scroll-m-0 md:scroll-p-[auto]">
                              <p className="text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-clip text-wrap md:text-xl md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                30 foot Waterslide Pool - one of a kind.
                              </p>
                              <div className="text-black font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-neutral-500 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[19.2px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                Huntington
                              </div>
                              <div className="text-black box-content h-auto min-h-0 min-w-0 w-auto my-0 md:text-transparent md:aspect-auto md:box-border md:h-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:-my-3 md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  5
                                </div>
                                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  397
                                </div>
                                <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    30 foot Waterslide Pool - one of a kind.
                                  </div>
                                  <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    https://swimply.imgix.net/thumbnails/7625-810739877911625950772.jpeg
                                  </div>
                                </div>
                              </div>
                              <div className="[align-items:normal] box-content caret-black gap-x-[normal] block justify-normal min-h-0 min-w-0 gap-y-[normal] md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[5px] md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[5px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div
                                  title="5 Stars"
                                  className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                >
                                  <img
                                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-48.svg"
                                    alt="Icon"
                                    className="static box-content caret-black h-auto align-middle visible w-auto z-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:invisible md:w-0 md:z-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                  />
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline pr-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pr-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline pl-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                </div>
                                <div className="text-black font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-sky-500 md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:leading-[19.2px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  (397)
                                </div>
                              </div>
                              <div className="text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-xl md:font-extrabold md:aspect-auto md:box-border md:caret-transparent md:leading-7 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                $104/hr
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black block min-h-0 min-w-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <a
                            href="/pooldetails/35833"
                            className="box-content caret-black inline min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                          >
                            <div className="box-content caret-black h-auto rounded-none md:aspect-auto md:box-border md:caret-transparent md:h-[55%] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]">
                              <img
                                alt="Popular Escape"
                                src="https://c.animaapp.com/mhktpn46U9Eif8/assets/36.jpg"
                                className="text-black box-content h-auto leading-[normal] max-w-none min-w-0 object-fill align-middle w-auto mx-0 md:text-transparent md:aspect-[auto_410_/_278] md:box-border md:h-[278px] md:leading-[26px] md:max-w-[410px] md:min-w-[410px] md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:mx-auto md:scroll-m-0 md:scroll-p-[auto]"
                              />
                            </div>
                            <div className="box-content caret-black gap-x-[normal] block flex-row justify-normal max-w-none gap-y-[normal] w-auto py-0 md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:flex-col md:justify-start md:max-w-[410px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:py-4 md:scroll-m-0 md:scroll-p-[auto]">
                              <p className="text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 text-clip text-wrap md:text-xl md:font-bold md:aspect-auto md:box-border md:caret-transparent md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                Private Bal Harbour Ultra Lux Resort Waterfront
                                Pool/hot Tub (2 Hour Minimum)
                              </p>
                              <div className="text-black font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-neutral-500 md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-[19.2px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                Bal Harbour
                              </div>
                              <div className="text-black box-content h-auto min-h-0 min-w-0 w-auto my-0 md:text-transparent md:aspect-auto md:box-border md:h-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:-my-3 md:scroll-m-0 md:scroll-p-[auto]">
                                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  4.9
                                </div>
                                <div className="box-content md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  85
                                </div>
                                <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    Private Bal Harbour Ultra Lux Resort
                                    Waterfront Pool/hot Tub (2 Hour Minimum)
                                  </div>
                                  <div className="box-content h-auto w-auto md:aspect-auto md:box-border md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    https://swimply.imgix.net/thumbnails/35833-cover8894116291654729764.jpeg
                                  </div>
                                </div>
                              </div>
                              <div className="[align-items:normal] box-content caret-black gap-x-[normal] block justify-normal min-h-0 min-w-0 gap-y-[normal] md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-[5px] md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[5px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <div
                                  title="4.9 Stars"
                                  className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                >
                                  <img
                                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-49.svg"
                                    alt="Icon"
                                    className="static box-content caret-black h-auto align-middle visible w-auto z-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:invisible md:w-0 md:z-0 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                  />
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline pr-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pr-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline px-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-41.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                  <div className="static [align-items:normal] box-content caret-black block min-h-0 min-w-0 align-baseline pl-0 md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-px md:scroll-m-0 md:scroll-p-[auto]">
                                    <img
                                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-50.svg"
                                      alt="Icon"
                                      className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                    />
                                  </div>
                                </div>
                                <div className="text-black font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-sky-500 md:font-semibold md:aspect-auto md:box-border md:caret-transparent md:leading-[19.2px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                  (85)
                                </div>
                              </div>
                              <div className="text-base font-normal box-content caret-black leading-[normal] min-h-0 min-w-0 md:text-xl md:font-extrabold md:aspect-auto md:box-border md:caret-transparent md:leading-7 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                $173/hr
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                      <div className="box-content caret-black block float-none min-h-0 min-w-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:float-left md:min-h-px md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></div>
                    </div>
                  </div>
                  <button
                    aria-label="next arrow"
                    className="absolute text-sky-500 text-[0px] items-center bg-sky-500/20 caret-transparent hidden h-9 justify-center leading-[0px] right-[-3.5%] text-center transform-none w-9 p-0 rounded-[50%] top-1/4 md:flex md:translate-y-[-50.0%] before:accent-auto before:caret-transparent before:text-white before:hidden before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:opacity-75 before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-slick hover:text-white hover:bg-sky-500 hover:border-white"
                  >
                    <img
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-51.svg"
                      alt="Icon"
                      className="box-border caret-transparent inline h-[7px] w-[7px] md:block md:h-[9px] md:w-[9px]"
                    />
                  </button>
                </div>
              </div>
              <div className="box-border caret-transparent">
                <a
                  href="/s?space_type=igloo"
                  className="text-white bg-indigo-700 box-border caret-transparent text-center w-full px-[30px] py-[18px] rounded-[100px] md:w-auto md:px-10 md:py-[30px]"
                >
                  Discover igloos near me
                </a>
              </div>
            </div>
          </section>
          <section className="items-center box-border caret-transparent flex flex-col justify-center  px-[max(2%,18px)] py-[35px] md: md:px-[4%] md:py-[65px]">
            <div className="items-center box-border caret-transparent flex flex-col  w-full">
              <h3 className="text-neutral-800 text-2xl font-extrabold box-border caret-transparent tracking-[-0.24px] leading-[28.8px] text-center mb-10 md:text-5xl md:font-black md:tracking-[-0.48px] md:leading-[57.6px] md:mb-1">
                Here&#39;s your guide to
                <br className="text-2xl font-extrabold box-border caret-transparent tracking-[-0.24px] leading-[28.8px] md:text-5xl md:font-black md:tracking-[-0.48px] md:leading-[57.6px]" />
                Escaping Locally.
              </h3>
              <div className="text-gray-500 text-base font-medium box-border caret-transparent hidden tracking-[-0.24px] leading-[22px] min-h-0 min-w-0 text-center mb-9 md:text-2xl md:block md:leading-[38.4px] md:min-h-[auto] md:min-w-[auto]">
                Here&#39;s how Swimply works, Step by Step.
              </div>
              <div className="relative items-center box-border caret-transparent gap-x-0 flex flex-col gap-y-0 w-full md:gap-x-[170px] md:gap-y-[170px] md:w-4/5">
                <div className="absolute items-center box-border caret-transparent hidden h-full justify-center w-full z-[-1] md:flex">
                  <img
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-52.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-4/5 w-4/5 md:block md:h-[90%] md:w-full"
                  />
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 grid [grid-template-areas:'image''content'] grid-cols-[1fr] justify-center gap-y-4 w-full mb-6 pb-6 border-b-black/10 border-b md:gap-x-8 md:[grid-template-areas:'content_image'] md:grid-cols-[1fr_1fr] md:gap-y-8 md:mb-0 md:pb-0 md:border-b-black md:border-b-0">
                  <div className="box-border caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] w-full">
                    <div className="text-white text-[44px] font-bold items-center bg-cyan-200 box-border caret-transparent hidden h-[86px] justify-center tracking-[-0.44px] leading-[44px] w-[86px] mb-6 rounded-[50%] md:flex">
                      🔍
                    </div>
                    <div className="text-neutral-800 text-lg font-bold box-border caret-transparent tracking-[-0.18px] leading-[21.6px] text-center mb-2 md:text-[32px] md:font-extrabold md:tracking-[-0.32px] md:leading-[38.4px] md:text-start md:mb-0">
                      Step 1: Find your secret paradise.
                    </div>
                    <div className="text-gray-500 text-sm font-bold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
                      Browse. Book. Swim.
                    </div>
                    <div className="text-gray-500 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
                      Explore stunning private pools near you, pick your date
                      and time, and send a request. Need it fast? Look for the{" "}
                      <img
                        src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-53.svg"
                        alt="Icon"
                        className="text-sky-500 text-sm box-border caret-transparent h-[22px] tracking-[-0.14px] leading-[19.6px] mb-[-3px] text-center w-[22px] md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start"
                      />
                      icon to book instantly — no waiting.
                    </div>
                  </div>
                  <div className="relative aspect-[3_/_2] box-border caret-transparent col-end-[image] col-start-[image] row-end-[image] row-start-[image] transform-none w-full overflow-hidden rounded-[20px] md:rotate-[3.0000011085596214deg]">
                    <img
                      alt="Step 1: Find your secret paradise."
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/step1-layer.png"
                      className="absolute text-transparent box-border h-full object-contain w-full inset-0"
                    />
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 grid flex-row [grid-template-areas:'image''content'] grid-cols-[1fr] justify-center gap-y-4 w-full mb-6 pb-6 border-b-black/10 border-b md:gap-x-8 md:flex-row-reverse md:[grid-template-areas:'image_content'] md:grid-cols-[1fr_1fr] md:gap-y-8 md:mb-0 md:pb-0 md:border-b-black md:border-b-0">
                  <div className="box-border caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] w-full">
                    <div className="text-white text-[44px] font-bold items-center bg-lime-100 box-border caret-transparent hidden h-[86px] justify-center tracking-[-0.44px] leading-[44px] w-[86px] mb-6 rounded-[50%] md:flex">
                      🏡
                    </div>
                    <div className="text-neutral-800 text-lg font-bold box-border caret-transparent tracking-[-0.18px] leading-[21.6px] text-center mb-2 md:text-[32px] md:font-extrabold md:tracking-[-0.32px] md:leading-[38.4px] md:text-start md:mb-0">
                      Step 2: Arrive and enjoy.
                    </div>
                    <div className="text-gray-500 text-sm font-bold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
                      Everything you need, when you need it.
                    </div>
                    <div className="text-gray-500 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
                      You’ll get clear arrival instructions before your swim.
                      When you arrive, Some hosts greet you personally, others
                      let you walk right in #selfserve
                    </div>
                  </div>
                  <div className="relative aspect-[3_/_2] box-border caret-transparent col-end-[image] col-start-[image] row-end-[image] row-start-[image] transform-none w-full overflow-hidden rounded-[20px] md:rotate-[-3.0000011085596214deg]">
                    <img
                      alt="Step 2: Arrive and enjoy."
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/step2-layer.png"
                      className="absolute text-transparent box-border h-full object-contain w-full inset-0"
                    />
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 grid [grid-template-areas:'image''content'] grid-cols-[1fr] justify-center gap-y-4 w-full mb-6 pb-6 border-b-black/10 border-b md:gap-x-8 md:[grid-template-areas:'content_image'] md:grid-cols-[1fr_1fr] md:gap-y-8 md:mb-0 md:pb-0 md:border-b-black md:border-b-0">
                  <div className="box-border caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] w-full">
                    <div className="text-white text-[44px] font-bold items-center bg-pink-100 box-border caret-transparent hidden h-[86px] justify-center tracking-[-0.44px] leading-[44px] w-[86px] mb-6 rounded-[50%] md:flex">
                      😌
                    </div>
                    <div className="text-neutral-800 text-lg font-bold box-border caret-transparent tracking-[-0.18px] leading-[21.6px] text-center mb-2 md:text-[32px] md:font-extrabold md:tracking-[-0.32px] md:leading-[38.4px] md:text-start md:mb-0">
                      Step 3: Make it yours.
                    </div>
                    <div className="text-gray-500 text-sm font-bold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
                      Swim, soak, Escape — your way.
                    </div>
                    <div className="text-gray-500 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
                      Whether it’s a solo unwind, family hangout, or party with
                      friends, the space is all yours for the time you booked.
                      No sharing. No strangers.
                    </div>
                  </div>
                  <div className="relative aspect-[3_/_2] box-border caret-transparent col-end-[image] col-start-[image] row-end-[image] row-start-[image] transform-none w-full overflow-hidden rounded-[20px] md:rotate-[3.0000011085596214deg]">
                    <img
                      alt="Step 3: Make it yours."
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/step3-layer.png"
                      className="absolute text-transparent box-border h-full object-contain w-full inset-0"
                    />
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 grid flex-row [grid-template-areas:'image''content'] grid-cols-[1fr] justify-center gap-y-4 w-full md:gap-x-8 md:flex-row-reverse md:[grid-template-areas:'image_content'] md:grid-cols-[1fr_1fr] md:gap-y-8">
                  <div className="box-border caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] w-full">
                    <div className="text-white text-[44px] font-bold items-center bg-amber-100 box-border caret-transparent hidden h-[86px] justify-center tracking-[-0.44px] leading-[44px] w-[86px] mb-6 rounded-[50%] md:flex">
                      ⭐️
                    </div>
                    <div className="text-neutral-800 text-lg font-bold box-border caret-transparent tracking-[-0.18px] leading-[21.6px] text-center mb-2 md:text-[32px] md:font-extrabold md:tracking-[-0.32px] md:leading-[38.4px] md:text-start md:mb-0">
                      Step 4: Review and repeat.
                    </div>
                    <div className="text-gray-500 text-sm font-bold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
                      Wrap it up — and come back soon!
                    </div>
                    <div className="text-gray-500 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
                      Leave the pool as you found and with quick review to help
                      the next guest. Then? Book again so you can count down
                      till your next Swimply!
                    </div>
                  </div>
                  <div className="relative aspect-[3_/_2] box-border caret-transparent col-end-[image] col-start-[image] row-end-[image] row-start-[image] transform-none w-full overflow-hidden rounded-[20px] md:rotate-[-3.0000011085596214deg]">
                    <img
                      alt="Step 4:  Review and repeat."
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/step4-layer.png"
                      className="absolute text-transparent box-border h-full object-contain w-full inset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              href="/s?space_type=pool"
              className="text-white bg-sky-500 box-border caret-transparent block text-center w-full mt-[30px] px-[30px] py-[18px] rounded-[100px] md:w-auto md:mt-[50px] md:px-10 md:py-[30px]"
            >
              Find pools near me
            </a>
          </section>
          <section className="items-center box-border caret-transparent flex flex-col justify-center  pb-[35px] px-[max(2%,18px)] md: md:pb-[65px] md:px-[4%]">
            <div className="box-border caret-transparent  w-full">
              <a
                href="https://swimply.onelink.me/f5eH/t1k5sgxb"
                className="items-center bg-sky-600 bg-none box-border caret-transparent gap-x-[30px] flex flex-col justify-between gap-y-[30px] overflow-hidden p-11 rounded-3xl md:bg-transparent md:bg-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM5MSIgaGVpZ2h0PSI1MDEiIHZpZXdCb3g9IjAgMCAxMzkxIDUwMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzIxM182NjIwIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iLTE3NCIgeT0iLTMyMCIgd2lkdGg9IjE3MzkiIGhlaWdodD0iMTE0MiI+CjxwYXRoIGQ9Ik0tMTczLjg3NSAtMzE5Ljk0OUgxNTY0Ljg4VjgyMS43MTVILTE3My44NzVWLTMxOS45NDlaIiBmaWxsPSIjMDM3N0JEIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8yMTNfNjYyMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTS0xNzMuODc1IDgyMS43MTVIMTU2NC44OFYtMzE5Ljk0OUgtMTczLjg3NVY4MjEuNzE1WiIgZmlsbD0iIzAzNzdCRCIvPgo8L2c+CjxtYXNrIGlkPSJtYXNrMV8yMTNfNjYyMCIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9Ii0xNzQiIHk9Ii0zMjAiIHdpZHRoPSIxNzM5IiBoZWlnaHQ9IjExNDIiPgo8cGF0aCBkPSJNLTE3My44NzUgLTMxOS45NDlIMTU2NC44OFY4MjEuNzE1SC0xNzMuODc1Vi0zMTkuOTQ5WiIgZmlsbD0iIzQzQjJFNiIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazFfMjEzXzY2MjApIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMDI4Ljk1IC0xMC4wOTk5Vjc1Ny4yMTFILTg0NC40M1YtMTQ2LjYzNkMtNjYxLjA0NCAtMTM4LjEyMSAtNTUzLjE0NyAtMTA4LjI4MyAtNDQ4LjI2NiAtNzkuMjk5N0MtMzI0LjQ3NiAtNDUuMDg1NCAtMTk2LjQ3MSAtOS43MTQzNyA1NS4zMjc5IC05LjcxNDM3QzMwNy4wODUgLTkuNzE0MzcgNDM1LjA5NCAtNDUuMDg1NCA1NTguODg1IC03OS4yOTk3QzY4Mi45MDggLTExMy41ODYgODExLjE0MyAtMTQ5LjAzNiAxMDYzLjQ0IC0xNDkuMDM2QzEzMTUuNzUgLTE0OS4wMzYgMTQ0NC4wMiAtMTEzLjU4NiAxNTY4LjA1IC03OS4yOTk3QzE2ODQuNjQgLTQ3LjA2MjIgMTgwNC45OSAtMTMuODE4OSAyMDI4Ljk1IC0xMC4wOTk5WiIgZmlsbD0iIzQzQjJFNiIvPgo8L2c+CjxtYXNrIGlkPSJtYXNrMl8yMTNfNjYyMCIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9Ii0xNzQiIHk9Ii0zMjAiIHdpZHRoPSIxNzM5IiBoZWlnaHQ9IjExNDIiPgo8cGF0aCBkPSJNLTE3My44NzUgLTMxOS45NDlIMTU2NC44OFY4MjEuNzE1SC0xNzMuODc1Vi0zMTkuOTQ5WiIgZmlsbD0iIzZBQzFFQyIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazJfMjEzXzY2MjApIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOTkwLjI3IDIwNy42MjlWODgzLjY0NkgtODQ0LjQzVjEwMC43Qy03NTkuNjIyIDExMC43NjEgLTcwNC4wMTEgMTMyLjE2MyAtNjQ5LjcxNSAxNTIuOTgzQy01NzUuNTM4IDE4MS40NjggLTQ5OC44MTIgMjEwLjg3OSAtMzQ3Ljk1MSAyMTAuODc5Qy0xOTcuMDkgMjEwLjg3OSAtMTIwLjQwMiAxODEuNDY4IC00Ni4yMjUgMTUyLjk4M0MyOC4yOTU0IDEyNC4zODUgMTA1LjMzIDk0Ljc3NzMgMjU2LjkyOCA5NC43NzczQzQwOC40ODggOTQuNzc3MyA0ODUuNTYyIDEyNC4zODUgNTYwLjA0MyAxNTIuOTgzQzYzNC4yMTcgMTgxLjQ2OCA3MTAuOTQ2IDIxMC44NzkgODYxLjgwNyAyMTAuODc5QzEwMTIuNjcgMjEwLjg3OSAxMDg5LjM5IDE4MS40NjggMTE2My41NyAxNTIuOTgzQzEyMzguMDkgMTI0LjM4NSAxMzE1LjEzIDk0Ljc3NzMgMTQ2Ni43MiA5NC43NzczQzE2MTguMjggOTQuNzc3MyAxNjk1LjM2IDEyNC4zODUgMTc2OS44NCAxNTIuOTgzQzE4MjkuNCAxNzUuODU2IDE4OTAuNTQgMTk5LjI2OSAxOTkwLjI3IDIwNy42MjlaIiBmaWxsPSIjNkFDMUVDIi8+CjwvZz4KPG1hc2sgaWQ9Im1hc2szXzIxM182NjIwIiBzdHlsZT0ibWFzay10eXBlOmx1bWluYW5jZSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iLTE3NCIgeT0iLTMyMCIgd2lkdGg9IjE3MzkiIGhlaWdodD0iMTE0MiI+CjxwYXRoIGQ9Ik0tMTczLjg3NSAtMzE5Ljk0OUgxNTY0Ljg4VjgyMS43MTVILTE3My44NzVWLTMxOS45NDlaIiBmaWxsPSIjOEVEMEYxIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrM18yMTNfNjYyMCkiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0MDAuMiA0NDIuMTVWMTAyOC4xMUgtNTIzLjQ0N1YyNTAuMDgxQy0yOTguODc0IDI1NS4yNjYgLTE3OC4yMTkgMzAxLjU4OSAtNjEuMzQ2OCAzNDYuNDgzQzYyLjQwNSAzOTMuOTY3IDE5MC4zNzMgNDQzLjA4IDQ0Mi4wNTQgNDQzLjA4QzY5My43MzYgNDQzLjA4IDgyMS42NjUgMzkzLjk2NyA5NDUuNDE4IDM0Ni40ODNDMTA2OS40OCAyOTguODQyIDExOTcuNzkgMjQ5LjU3OCAxNDUwLjE3IDI0OS41NzhDMTcwMi41OSAyNDkuNTc4IDE4MzAuOSAyOTguODQyIDE5NTQuOTcgMzQ2LjQ4M0MyMDY4LjgyIDM5MC4xNzcgMjE4Ni4xOSA0MzUuMjIzIDI0MDAuMiA0NDIuMTVaIiBmaWxsPSIjOEVEMEYxIi8+CjwvZz4KPHJlY3QgeD0iLTE3My44NzUiIHk9Ii0yMzguMzg2IiB3aWR0aD0iMTczOC43NSIgaGVpZ2h0PSI5NzguNzUiIGZpbGw9IiMwMDg4RDUiIGZpbGwtb3BhY2l0eT0iMC4zMyIvPgo8cmVjdCB5PSIwLjA1MTI2OTUiIHdpZHRoPSIxMzkxIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzAwNjhDQSIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPC9zdmc+Cg==)] md:gap-x-[normal] md:flex-row md:gap-y-[normal] md:px-[60px] md:py-6 md:rounded-[44px]"
              >
                <div className="items-center box-border caret-transparent flex basis-3/5 flex-col grow-[2] shrink-0 md:[align-items:normal]">
                  <div className="text-white text-2xl font-black box-border caret-transparent tracking-[-0.24px] leading-[28.8px] text-center mb-3 md:text-5xl md:tracking-[-0.48px] md:leading-[57.6px] md:text-start md:mb-5">
                    Download the app
                  </div>
                  <div className="items-center box-border caret-transparent gap-x-3 flex flex-col gap-y-3 md:[align-items:normal] md:gap-x-[22px] md:gap-y-[22px]">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2 md:gap-x-[15px] md:gap-y-[15px]">
                      <img
                        src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-54.svg"
                        alt="Icon"
                        className="text-sky-600 box-border caret-transparent h-[25px] w-[25px] md:text-sky-500"
                      />
                      <div className="text-white text-base font-medium box-border caret-transparent leading-4 text-center md:text-2xl md:leading-6 md:text-start">
                        Faster communication
                      </div>
                    </div>
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2 md:gap-x-[15px] md:gap-y-[15px]">
                      <img
                        src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-54.svg"
                        alt="Icon"
                        className="text-sky-600 box-border caret-transparent h-[25px] w-[25px] md:text-sky-500"
                      />
                      <div className="text-white text-base font-medium box-border caret-transparent leading-4 text-center md:text-2xl md:leading-6 md:text-start">
                        Easier navigation
                      </div>
                    </div>
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start gap-y-2 md:gap-x-[15px] md:gap-y-[15px]">
                      <img
                        src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-54.svg"
                        alt="Icon"
                        className="text-sky-600 box-border caret-transparent h-[25px] w-[25px] md:text-sky-500"
                      />
                      <div className="text-white text-base font-medium box-border caret-transparent leading-4 text-center md:text-2xl md:leading-6 md:text-start">
                        Exclusive in-app promotions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent gap-x-4 grid basis-[35%] grow grid-cols-[1fr] justify-center gap-y-4 w-full md:grid-cols-[minmax(100px,3fr)_minmax(50px,2fr)] md:justify-normal md:w-auto">
                  <img
                    alt="App image"
                    src="https://c.animaapp.com/mhktpn46U9Eif8/assets/phone-desktop.png"
                    className="text-transparent aspect-[351_/_477] box-border mb-[-74px] w-full md:-mb-6"
                  />
                  <div className="items-center aspect-square bg-white box-border caret-transparent hidden justify-center min-h-0 min-w-0 w-full overflow-hidden rounded-3xl md:flex md:min-h-[auto] md:min-w-[auto]">
                    <img
                      alt="QR Code"
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/download-app-qr-code.png"
                      className="text-transparent aspect-square box-border inline min-h-0 min-w-0 w-full md:block md:min-h-[auto] md:min-w-[auto]"
                    />
                  </div>
                </div>
              </a>
            </div>
          </section>
          <section className="items-center box-border caret-transparent flex flex-col justify-center  pb-[35px] px-[max(2%,18px)] md: md:pb-[65px] md:px-[4%]">
            <div className="box-border caret-transparent  w-full">
              <div className="items-center bg-slate-800 box-border caret-transparent gap-x-4 grid grid-cols-[minmax(0px,1fr)] gap-y-4 w-full p-[19px] rounded-[44px] md:grid-cols-[3fr_2fr] md:p-10">
                <div className="items-center box-border caret-transparent gap-x-6 flex flex-col justify-center gap-y-6 w-full md:items-start md:gap-x-[normal] md:gap-y-[normal]">
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2 md:gap-x-[15px] md:min-h-0 md:min-w-0 md:gap-y-[15px]">
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-[auto] min-w-[auto] gap-y-[11px] md:min-h-0 md:min-w-0">
                        <button
                          aria-label="Listing type List your pool"
                          className="text-white text-[13.3333px] items-center bg-sky-500 caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-[auto] min-w-[auto] gap-y-[5px] text-center w-[35px] border border-sky-500 overflow-hidden p-0 rounded-[100px] border-solid md:h-[50px] md:max-w-[50px] md:min-h-0 md:min-w-0 md:w-[50px] hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px]"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-55.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-full grow shrink-0 h-[33px] w-[33px]"
                          />
                          <div className="box-border caret-transparent grow shrink-0 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                            <p className="text-lg font-bold box-border caret-transparent leading-[18px] text-nowrap my-[18px]">
                              List your pool
                            </p>
                          </div>
                        </button>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-[auto] min-w-[auto] gap-y-[11px] md:min-h-0 md:min-w-0">
                        <button
                          aria-label="Listing type List your court"
                          className="text-white text-[13.3333px] items-center bg-transparent caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-[auto] min-w-[auto] gap-y-[5px] text-center w-[35px] border overflow-hidden p-0 rounded-[50%] border-solid border-white md:h-[50px] md:max-w-[50px] md:min-h-0 md:min-w-0 md:w-[50px] hover:bg-sky-800 hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px] hover:border-sky-800"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-56.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-full grow shrink-0 h-[33px] w-8"
                          />
                          <div className="box-border caret-transparent grow shrink-0 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                            <p className="text-lg font-bold box-border caret-transparent leading-[18px] text-nowrap my-[18px]">
                              List your court
                            </p>
                          </div>
                        </button>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-[auto] min-w-[auto] gap-y-[11px] md:min-h-0 md:min-w-0">
                        <button
                          aria-label="Listing type List your court"
                          className="text-white text-[13.3333px] items-center bg-transparent caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-[auto] min-w-[auto] gap-y-[5px] text-center w-[35px] border overflow-hidden p-0 rounded-[50%] border-solid border-white md:h-[50px] md:max-w-[50px] md:min-h-0 md:min-w-0 md:w-[50px] hover:bg-green-600 hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px] hover:border-green-600"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-57.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-full grow shrink-0 h-[33px] w-[33px]"
                          />
                          <div className="box-border caret-transparent grow shrink-0 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                            <p className="text-lg font-bold box-border caret-transparent leading-[18px] text-nowrap my-[18px]">
                              List your court
                            </p>
                          </div>
                        </button>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-[auto] min-w-[auto] gap-y-[11px] md:min-h-0 md:min-w-0">
                        <button
                          aria-label="Listing type List your court"
                          className="text-white text-[13.3333px] items-center bg-transparent caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-[auto] min-w-[auto] gap-y-[5px] text-center w-[35px] border overflow-hidden p-0 rounded-[50%] border-solid border-white md:h-[50px] md:max-w-[50px] md:min-h-0 md:min-w-0 md:w-[50px] hover:bg-red-500 hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px] hover:border-red-500"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-58.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-full grow shrink-0 h-[33px] w-8"
                          />
                          <div className="box-border caret-transparent grow shrink-0 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                            <p className="text-lg font-bold box-border caret-transparent leading-[18px] text-nowrap my-[18px]">
                              List your court
                            </p>
                          </div>
                        </button>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-[auto] min-w-[auto] gap-y-[11px] md:min-h-0 md:min-w-0">
                        <button
                          aria-label="Listing type List your yard"
                          className="text-white text-[13.3333px] items-center bg-transparent caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-[auto] min-w-[auto] gap-y-[5px] text-center w-[35px] border overflow-hidden p-0 rounded-[50%] border-solid border-white md:h-[50px] md:max-w-[50px] md:min-h-0 md:min-w-0 md:w-[50px] hover:bg-green-800 hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px] hover:border-green-800"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-59.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-full grow shrink-0 h-[33px] w-8"
                          />
                          <div className="box-border caret-transparent grow shrink-0 min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
                            <p className="text-lg font-bold box-border caret-transparent leading-[18px] text-nowrap my-[18px]">
                              List your yard
                            </p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white text-2xl font-extrabold box-border caret-transparent hidden tracking-[-0.24px] leading-[28.8px] min-h-0 min-w-0 text-left mb-5 md:text-5xl md:font-black md:block md:tracking-[-0.48px] md:leading-[57.6px] md:min-h-[auto] md:min-w-[auto]">
                    Try Hosting on Swimply
                  </h3>
                  <h3 className="text-white text-[22px] font-extrabold box-border caret-transparent block tracking-[-0.24px] leading-[22px] min-h-[auto] min-w-[auto] text-center mb-0 md:text-neutral-800 md:text-5xl md:font-black md:hidden md:tracking-[-0.48px] md:leading-[57.6px] md:min-h-0 md:min-w-0 md:mb-1">
                    List your pool on Swimply
                  </h3>
                  <div className="text-white text-base font-medium box-border caret-transparent leading-[22.4px] text-center mb-0 md:text-2xl md:leading-9 md:text-left md:mb-[61px]">
                    Turn your extra space into extra income so that you can
                    pursue more of what you love.
                  </div>
                  <div className="box-border caret-transparent hidden basis-auto grow-0 min-h-0 min-w-0 w-auto md:flex md:basis-[0%] md:grow md:min-h-[auto] md:min-w-[auto] md:w-full">
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-start min-h-0 min-w-0 gap-y-2 md:gap-x-[15px] md:min-h-[auto] md:min-w-[auto] md:gap-y-[15px]">
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-0 min-w-0 gap-y-[11px] md:min-h-[auto] md:min-w-[auto]">
                        <a
                          aria-label="Go to the host landing page for List your pool"
                          href="/become-a-host"
                          className="relative text-white items-center bg-sky-500 box-border caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-0 min-w-0 gap-y-[5px] w-[35px] border border-sky-500 overflow-hidden px-3 rounded-[100px] border-solid md:h-[50px] md:max-w-[200px] md:min-h-[auto] md:min-w-[auto] md:w-auto hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px]"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-55.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-[30px] grow shrink-0 h-[33px] w-[33px]"
                          />
                          <div className="box-border caret-transparent grow shrink-0 min-h-0 min-w-[125px] md:min-h-[auto]">
                            <p className="text-lg font-bold box-border caret-transparent leading-[18px] text-nowrap my-[18px]">
                              List your pool
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-0 min-w-0 gap-y-[11px] md:min-h-[auto] md:min-w-[auto]">
                        <a
                          aria-label="Go to the host landing page for List your court"
                          href="/become-a-host/pickleball"
                          className="relative text-white items-center box-border caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-0 min-w-0 gap-y-[5px] w-[35px] border overflow-hidden px-3 rounded-[100px] border-solid border-white md:h-[50px] md:max-w-[200px] md:min-h-[auto] md:min-w-[auto] md:w-auto hover:bg-sky-800 hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px] hover:border-sky-800"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-56.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-[30px] grow shrink-0 h-[33px] w-8"
                          />
                        </a>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-0 min-w-0 gap-y-[11px] md:min-h-[auto] md:min-w-[auto]">
                        <a
                          aria-label="Go to the host landing page for List your court"
                          href="/become-a-host/tennis"
                          className="relative text-white items-center box-border caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-0 min-w-0 gap-y-[5px] w-[35px] border overflow-hidden px-3 rounded-[100px] border-solid border-white md:h-[50px] md:max-w-[200px] md:min-h-[auto] md:min-w-[auto] md:w-auto hover:bg-green-600 hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px] hover:border-green-600"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-57.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-[30px] grow shrink-0 h-[33px] w-[33px]"
                          />
                        </a>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-0 min-w-0 gap-y-[11px] md:min-h-[auto] md:min-w-[auto]">
                        <a
                          aria-label="Go to the host landing page for List your court"
                          href="/become-a-host/hoops"
                          className="relative text-white items-center box-border caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-0 min-w-0 gap-y-[5px] w-[35px] border overflow-hidden px-3 rounded-[100px] border-solid border-white md:h-[50px] md:max-w-[200px] md:min-h-[auto] md:min-w-[auto] md:w-auto hover:bg-red-500 hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px] hover:border-red-500"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-58.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-[30px] grow shrink-0 h-[33px] w-8"
                          />
                        </a>
                      </div>
                      <div className="items-center box-border caret-transparent gap-x-[11px] flex flex-col h-[50px] justify-start min-h-0 min-w-0 gap-y-[11px] md:min-h-[auto] md:min-w-[auto]">
                        <a
                          aria-label="Go to the host landing page for List your yard"
                          href="/become-a-host/homes"
                          className="relative text-white items-center box-border caret-transparent gap-x-[5px] flex h-[35px] justify-start max-w-[35px] min-h-0 min-w-0 gap-y-[5px] w-[35px] border overflow-hidden px-3 rounded-[100px] border-solid border-white md:h-[50px] md:max-w-[200px] md:min-h-[auto] md:min-w-[auto] md:w-auto hover:bg-green-800 hover:shadow-[rgba(0,0,0,0.11)_0px_4px_15px_1px] hover:border-green-800"
                        >
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-59.svg"
                            alt="Icon"
                            className="box-border caret-transparent basis-[30px] grow shrink-0 h-[33px] w-8"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full md:hidden md:min-h-0 md:min-w-0">
                    <div className="box-border caret-transparent flex basis-[0%] flex-col grow justify-end min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0 md:w-auto">
                      <a
                        href="/become-a-host"
                        className="relative items-center bg-sky-500 box-border caret-transparent flex h-[54px] justify-center min-h-[auto] align-middle w-full border px-5 py-3 rounded-[64px] border-solid border-transparent md:h-20 md:min-h-0 md:w-[190px] hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]"
                      >
                        <div className="text-white items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center min-h-[auto] min-w-[auto] gap-y-2 md:min-h-0 md:min-w-0">
                          List your pool
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[612_/_418] box-border caret-transparent w-full">
                  <picture className="box-border caret-transparent object-cover">
                    <img
                      alt="Try hosting image"
                      src="https://c.animaapp.com/mhktpn46U9Eif8/assets/pool-try-hosting-layer.png"
                      className="absolute text-transparent box-border h-full object-cover w-full rounded-3xl inset-0 md:rounded-[30px]"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </section>
          <div className="bg-white box-border caret-transparent hidden w-full md:block">
            <img
              src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-60.svg"
              alt="Icon"
              className="text-sky-50 aspect-[1440_/_150] box-border caret-transparent w-full -mb-1.5"
            />
          </div>
          <section className="items-center bg-sky-50 box-border caret-transparent flex flex-col justify-center  -mt-20 pt-[100px] pb-[35px] px-[max(2%,18px)] md: md:mt-0 md:pt-0 md:pb-[65px] md:px-[4%]">
            <div className="items-center box-border caret-transparent gap-x-3 flex flex-col  gap-y-3 w-full md:[align-items:normal] md:gap-x-[31px] md:gap-y-[31px]">
              <h3 className="text-neutral-800 text-2xl font-extrabold box-border caret-transparent tracking-[-0.24px] leading-[28.8px] text-center mb-1 md:text-5xl md:font-black md:tracking-[-0.48px] md:leading-[57.6px] md:text-left">
                Things people ask us
              </h3>
              <div className="text-xl items-center box-border caret-transparent gap-x-[15px] flex gap-y-[15px] md:text-base">
                <button className="relative text-base font-bold items-center bg-sky-500 caret-transparent flex justify-center tracking-[-0.2px] leading-[25.6px] text-center align-middle w-[115px] border pt-1.5 pb-2 rounded-[105px] border-solid border-transparent md:text-xl md:leading-8 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]">
                  <div className="text-white text-base items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[25.6px] gap-y-2 md:text-xl md:leading-8">
                    Guests
                  </div>
                </button>
                <button className="relative text-base font-bold items-center bg-sky-500/10 caret-transparent flex justify-center tracking-[-0.2px] leading-[25.6px] text-center align-middle w-[115px] border pt-1.5 pb-2 rounded-[105px] border-solid border-transparent md:text-xl md:leading-8 hover:shadow-[rgba(0,0,0,0.05)_0px_8px_10px_0px]">
                  <div className="text-sky-500 text-base items-center box-border caret-transparent gap-x-2 flex basis-[0%] grow justify-center leading-[25.6px] gap-y-2 md:text-xl md:leading-8">
                    Hosts
                  </div>
                </button>
              </div>
              <div className="box-border caret-transparent gap-x-0 grid grid-cols-[1fr] justify-between gap-y-0 w-full mx-auto md:gap-x-[50px] md:grid-cols-[1fr_1fr] md:gap-y-[50px]">
                <div className="box-border caret-transparent flex basis-[0%] flex-col grow w-full md:w-auto">
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            How does booking work?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Choose your date and time, then click Book Now. -
                          Pools with the{" "}
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-53.svg"
                            alt="Icon"
                            className="text-sky-500 text-sm box-border caret-transparent h-[22px] leading-[22.4px] mb-[-3px] w-[22px] md:text-lg md:leading-[28.8px]"
                          />
                          Instant Book icon are confirmed immediately. - Others
                          require host approval (you’ll hear back within 24
                          hours). You’re only charged once the booking is
                          confirmed. Once confirmed you will get all the
                          information you need including the address, how to
                          enter and how to exit and anything else you’ll need to
                          enjoy your swim!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            What&#39;s included in the booking?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Each listing shows what’s included — some have hot
                          tubs, bathrooms, grills, speakers, etc. Check the
                          amenities section and photos for details. Some
                          listings even offer premium amenities and experiences
                          for an additional cost.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            How many people can I bring with me?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Every pool has its own guest limit but range from 10
                          guests all the way to 100 guests. Some hosts allow
                          extra guests for a fee. All this information is listed
                          clearly on every pools profile.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Will I have access to a bathroom?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          95% of Swimplys offer restroom access. Restroom access
                          and info is listed on every profile.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Will the host be home during my swim?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          It depends. Some hosts stay home, others leave.
                          Listings will indicate this, or you can ask the host
                          directly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Will the host greet me when I arrive?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          It’s up to you. Some hosts only offer self serve
                          experience, others greet guests in person. You can
                          always request a self-serve experience by messaging
                          the host.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Where is Swimply available?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Swimply is available in 150+ cities across the U.S.,
                          Canada, and Australia — including Los Angeles, New
                          York, Miami, Toronto, Sydney, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent flex basis-[0%] flex-col grow w-full md:w-auto">
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Can I rent more than just pools?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Yes! Swimply also offers hot tubs, sports courts
                          (pickleball, basketball, tennis), backyards, event
                          spaces, and even entire homes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            What happens if the weather is bad?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Check the listing’s weather policy. Many hosts offer
                          refunds or reschedules for bad weather.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Is it safe and private?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Yes. All hosts are verified. Many listings are fully
                          private, and guest reviews help you book with
                          confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            What if I have an issue during my booking?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Contact Swimply support through the app or website —
                          we’re here to help.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Can I book last minute?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Absolutely. Many pools offer{" "}
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-53.svg"
                            alt="Icon"
                            className="text-sky-500 text-sm box-border caret-transparent h-[22px] leading-[22.4px] mb-[-3px] w-[22px] md:text-lg md:leading-[28.8px]"
                          />
                          Instant Book, so you can book and swim same-day.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Are there rules I need to follow?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Yes — each host sets house rules. You’ll see them
                          before booking. Be respectful, arrive on time, and
                          leave the space as you found it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            Can I bring my pet?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          Some hosts allow pets, others don’t. Check the listing
                          for pet policies, or message the host directly. Look
                          out for listings with a dedicated Pet Swim option —
                          perfect for dogs!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent mb-4 pb-4 border-b-black/10 border-b md:mb-5 md:pb-5">
                    <div className="box-border caret-transparent">
                      <button className="text-[13.3333px] bg-transparent caret-transparent text-center w-full p-0">
                        <div className="items-center box-border caret-transparent flex justify-between">
                          <div className="text-zinc-800 text-sm font-medium box-border caret-transparent leading-[30.24px] md:text-xl">
                            What is the Swimply Premium Pass?
                          </div>
                          <img
                            src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-61.svg"
                            alt="Icon"
                            className="text-sky-500 box-border caret-transparent h-9 w-9"
                          />
                        </div>
                      </button>
                      <div className="box-border caret-transparent h-0 w-full overflow-hidden">
                        <p className="text-zinc-800 text-sm box-border caret-transparent leading-[22.4px] pb-[23px] md:text-lg md:leading-[28.8px] md:pb-[12.8px]">
                          For $19.99 per month, the Premium Pass offers benefits
                          like $0 service fees on bookings up to $250, $0
                          cancellation fees, priority support, and access to
                          exclusive deals.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
