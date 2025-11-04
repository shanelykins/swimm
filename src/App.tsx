import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { EventsSection } from "@/sections/EventsSection";
import { CategoriesSection } from "@/sections/CategoriesSection";
import { GuideSection } from "@/sections/GuideSection";
import { HostingSection } from "@/sections/HostingSection";
import { AppDownloadSection } from "@/sections/AppDownloadSection";
import { FAQSection } from "@/sections/FAQSection";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="text-black text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-nunito_199a07">
      <AnnouncementBanner />
      <Header />
      <Hero />
      <EventsSection />
      <CategoriesSection />
      <GuideSection />
      <HostingSection />
      <AppDownloadSection />
      <FAQSection />
      <Footer />
      <div className="box-border caret-transparent"></div>
      <div className="absolute box-border caret-transparent block"></div>
      <iframe
        title="No content"
        role="presentation"
        src="about://blank"
        className="absolute box-border caret-transparent h-0 top-[-9999px] w-0"
      ></iframe>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent">
          <iframe
            title="Button to launch messaging window"
            className="fixed shadow-[rgba(23,73,77,0.15)_0px_20px_30px_0px] box-border caret-transparent h-16 w-16 z-[999] rounded-[50%] right-4 bottom-4"
          ></iframe>
        </div>
      </div>
    </body>
  );
};
