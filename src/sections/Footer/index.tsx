import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterApps } from "@/sections/Footer/components/FooterApps";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative bg-slate-800 box-border caret-transparent gap-x-[60px] grid [grid-template-areas:'logo''links''apps''social''region''copy'] grid-cols-[1fr] gap-y-[50px] z-[5] pt-12 pb-[110px] px-8 md:[grid-template-areas:'logo_logo_logo''links_apps_social''copy_copy_region'] md:grid-cols-[3fr_1fr_1fr] md:pt-[51.2px] md:pb-[83.2px] md:px-[50px]">
      <img
        src="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-62.svg"
        alt="Icon"
        className="text-white box-border caret-transparent col-end-[logo] col-start-[logo] row-end-[logo] row-start-[logo] h-[30px] w-[137px]"
      />
      <FooterLinks />
      <FooterApps />
      <FooterSocial />
      <FooterBottom
        variant="copyright"
        copyrightText="©2025 Swimply, Inc. All rights reserved."
        termsLink="/termsandconditions"
        privacyLink="/privacy"
      />
      <FooterBottom
        variant="default"
        countryText="USA (English)"
        countryIconUrl="https://c.animaapp.com/mhktpn46U9Eif8/assets/icon-66.svg"
      />
    </footer>
  );
};
