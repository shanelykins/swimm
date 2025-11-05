export const StatsSection = () => {
  return (
    <section className="relative items-center bg-violet-950 box-border caret-transparent flex flex-col justify-center w-full z-[3] py-16 md:py-20">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]" style={{ height: '30px', transform: 'translateY(-99%)' }}>
        <svg className="relative block w-full" style={{ height: '30px' }} viewBox="0 0 1200 30" preserveAspectRatio="none">
          <path d="M0,15 Q30,0 60,15 T120,15 Q150,0 180,15 T240,15 Q270,0 300,15 T360,15 Q390,0 420,15 T480,15 Q510,0 540,15 T600,15 Q630,0 660,15 T720,15 Q750,0 780,15 T840,15 Q870,0 900,15 T960,15 Q990,0 1020,15 T1080,15 Q1110,0 1140,15 T1200,15 L1200,30 L0,30 Z" fill="#4c1d95" />
        </svg>
      </div>

      <div className="items-center box-border caret-transparent gap-x-[17px] flex justify-center max-w-[1440px] mx-auto gap-y-[17px] w-full px-[4%]">
        <img
          alt="Over 4 million experiences hosted"
          src="https://c.animaapp.com/mhktpn46U9Eif8/img/image.png"
          className="box-border caret-transparent h-[50px] w-full object-contain md:h-[75px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]" style={{ height: '30px', transform: 'translateY(99%)' }}>
        <svg className="relative block w-full" style={{ height: '30px' }} viewBox="0 0 1200 30" preserveAspectRatio="none">
          <path d="M0,0 L1200,0 L1200,15 Q1170,30 1140,15 T1080,15 Q1050,30 1020,15 T960,15 Q930,30 900,15 T840,15 Q810,30 780,15 T720,15 Q690,30 660,15 T600,15 Q570,30 540,15 T480,15 Q450,30 420,15 T360,15 Q330,30 300,15 T240,15 Q210,30 180,15 T120,15 Q90,30 60,15 T0,15 Z" fill="#4c1d95" />
        </svg>
      </div>
    </section>
  );
};
