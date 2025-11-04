import { GuideStep } from "@/sections/GuideSection/components/GuideStep";
import { Link } from "react-router-dom";

export const GuideSection = () => {
  return (
    <section className="items-center box-border caret-transparent flex flex-col justify-center w-full py-[35px] md:py-[65px]">
      <div className="items-center box-border caret-transparent flex flex-col max-w-[375px] md:max-w-screen-xl mx-auto w-full px-[max(2%,18px)] md:px-[4%]">
      <div className="items-center box-border caret-transparent flex flex-col max-w-[1440px] w-full">
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
          <GuideStep />
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
                You’ll get clear arrival instructions before your swim. When you
                arrive, Some hosts greet you personally, others let you walk
                right in #selfserve
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
                friends, the space is all yours for the time you booked. No
                sharing. No strangers.
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
                Leave the pool as you found and with quick review to help the
                next guest. Then? Book again so you can count down till your
                next Swimply!
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
      <Link
        to="/search?space_type=pool"
        className="text-white bg-sky-500 box-border caret-transparent block text-center w-full mt-[30px] px-[30px] py-[18px] rounded-[100px] md:w-auto md:mt-[50px] md:px-10 md:py-[30px]"
      >
        Find pools near me
      </Link>
      </div>
    </section>
  );
};
