import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-5 grid col-end-[links] col-start-[links] row-end-[links] row-start-[links] grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-y-5">
      <FooterColumn
        title="About us"
        links={[
          { title: "Careers", href: "/careers", text: "Careers" },
          {
            title: "Swimply Shop",
            href: "https://shop.swimply.com/",
            text: "Swimply Shop",
          },
          {
            title: "Gift Cards",
            href: "https://shop.swimply.com/products/swimply-com-gift-card",
            text: "Gift Cards",
          },
          { title: "Blog", href: "/blog", text: "Blog" },
          {
            title: "Help",
            href: "https://swimply.zendesk.com/hc/en-us",
            text: "Help",
          },
          {
            title: "Trust & Safety",
            href: "https://swimply.zendesk.com/hc/en-us/categories/360006026333-Trust-Safety",
            text: "Trust & Safety",
          },
          { title: "Media Inquiries", text: "Media Inquiries" },
          {
            title: "Collaboration Inquiries",
            href: "https://docs.google.com/forms/d/17fhXeyaq3sSOGlTqNvzz74OrV900N_9xEEUf905w3W0",
            text: "Collaboration Inquiries",
          },
          { title: "Explore", href: "/explore", text: "Explore" },
          { title: "Public Pools", href: "/pools-in", text: "Public Pools" },
        ]}
      />
      <FooterColumn
        title="Hosting"
        links={[
          { title: "List a Pool", href: "/become-a-host", text: "List a Pool" },
          {
            title: "List Tennis",
            href: "/become-a-host/tennis",
            text: "List Tennis",
          },
          {
            title: "List Pickleball",
            href: "/become-a-host/pickleball",
            text: "List Pickleball",
          },
          {
            title: "List Basketball",
            href: "/become-a-host/hoops",
            text: "List Basketball",
          },
          {
            title: "Host Resources Center",
            href: "https://swimply.zendesk.com/hc/en-us/categories/30126909098387-Hosts",
            text: "Host Resources Center",
          },
        ]}
      />
      <FooterColumn
        title="Neighbors"
        links={[
          {
            title: "Neighbor Support",
            href: "/neighbors",
            text: "Neighbor Support",
          },
        ]}
      />
      <FooterColumn
        title="Popular destinations"
        links={[
          {
            title: "Los Angeles",
            href: "/explore/us-ca-los-angeles/pool",
            text: "Los Angeles",
          },
          {
            title: "New York",
            href: "/explore/us-ny-new-york/pool",
            text: "New York",
          },
          {
            title: "Portland",
            href: "/explore/us-or-portland/pool",
            text: "Portland",
          },
          {
            title: "Atlanta",
            href: "/explore/us-ga-atlanta/pool",
            text: "Atlanta",
          },
          {
            title: "Austin",
            href: "/explore/us-tx-austin/pool",
            text: "Austin",
          },
          {
            title: "Houston",
            href: "/explore/us-tx-houston/pool",
            text: "Houston",
          },
          {
            title: "Dallas",
            href: "/explore/us-tx-dallas/pool",
            text: "Dallas",
          },
          {
            title: "Toronto",
            href: "/explore/ca-on-toronto/pool",
            text: "Toronto",
          },
        ]}
      />
    </div>
  );
};
