export const HeroImage = () => {
  return (
    <picture className="absolute box-border caret-transparent block h-3/5 object-cover w-full z-[1] left-0 top-0 md:h-full">
      <img
        alt="pool"
        sizes="100vw"
        src="https://c.animaapp.com/mhktpn46U9Eif8/assets/fall-hero-outdoor-mobile.png"
        className="box-border caret-transparent h-full object-cover w-full"
      />
    </picture>
  );
};
