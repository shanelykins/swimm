import { FAQColumn } from "@/sections/FAQSection/components/FAQColumn";

export const FAQSection = () => {
  return (
    <section className="items-center bg-sky-50 box-border caret-transparent flex flex-col justify-center w-full -mt-20 pt-[100px] pb-[35px] md:mt-0 md:pt-0 md:pb-[65px]">
      <div className="items-center box-border caret-transparent gap-x-3 flex flex-col  md: mx-auto gap-y-3 w-full px-[max(2%,18px)] md:px-[4%]">
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
          <FAQColumn />
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
                    (pickleball, basketball, tennis), backyards, event spaces,
                    and even entire homes.
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
                    Check the listing’s weather policy. Many hosts offer refunds
                    or reschedules for bad weather.
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
                    private, and guest reviews help you book with confidence.
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
                    Contact Swimply support through the app or website — we’re
                    here to help.
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
                    Yes — each host sets house rules. You’ll see them before
                    booking. Be respectful, arrive on time, and leave the space
                    as you found it.
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
                    Some hosts allow pets, others don’t. Check the listing for
                    pet policies, or message the host directly. Look out for
                    listings with a dedicated Pet Swim option — perfect for
                    dogs!
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
                    For $19.99 per month, the Premium Pass offers benefits like
                    $0 service fees on bookings up to $250, $0 cancellation
                    fees, priority support, and access to exclusive deals.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
