import { Logo } from "@/sections/Header/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";

export const Header = () => {
  return (
    <header className="sticky items-center box-border caret-transparent grid [grid-template-areas:'logo_center_menu'] grid-cols-[auto_1fr_auto] w-full z-[56] px-5 py-2.5 left-0 top-0 md:px-[60px]">
      <Logo />
      <div className="box-border caret-transparent col-end-[center] col-start-[center] row-end-[center] row-start-[center]">
        <div className="items-center box-border caret-transparent flex justify-end">
          <DesktopNav />
        </div>
      </div>
      <MobileMenuButton />
    </header>
  );
};
