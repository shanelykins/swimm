export type TestimonialCardProps = {
  variant: "iframe" | "step" | "testimonial";
  title?: string;
  emoji?: string;
  heading?: string;
  subheading?: string;
  description?: string;
  iconSrc?: string;
  iconAlt?: string;
  imageSrc?: string;
  imageAlt?: string;
  rating?: string;
  author?: string;
  testimonialText?: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  if (props.variant === "iframe") {
    return (
      <iframe
        title={props.title || "Button to launch messaging window"}
        className="fixed shadow-[rgba(23,73,77,0.15)_0px_20px_30px_0px] box-border caret-transparent h-16 w-16 z-[999] rounded-[50%] right-4 bottom-4"
      ></iframe>
    );
  }

  if (props.variant === "step") {
    return (
      <div className="items-center box-border caret-transparent gap-x-4 grid [grid-template-areas:'image''content'] grid-cols-[1fr] justify-center gap-y-4 w-full mb-6 pb-6 border-b-black/10 border-b md:gap-x-8 md:[grid-template-areas:'content_image'] md:grid-cols-[1fr_1fr] md:gap-y-8 md:mb-0 md:pb-0 md:border-b-black md:border-b-0">
        <div className="box-border caret-transparent col-end-[content] col-start-[content] row-end-[content] row-start-[content] w-full">
          <div className="text-white text-[44px] font-bold items-center bg-cyan-200 box-border caret-transparent hidden h-[86px] justify-center tracking-[-0.44px] leading-[44px] w-[86px] mb-6 rounded-[50%] md:flex">
            {props.emoji}
          </div>
          <div className="text-neutral-800 text-lg font-bold box-border caret-transparent tracking-[-0.18px] leading-[21.6px] text-center mb-2 md:text-[32px] md:font-extrabold md:tracking-[-0.32px] md:leading-[38.4px] md:text-start md:mb-0">
            {props.heading}
          </div>
          <div className="text-gray-500 text-sm font-bold box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
            {props.subheading}
          </div>
          <div className="text-gray-500 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start">
            {props.description}
            {props.iconSrc && (
              <img
                src={props.iconSrc}
                alt={props.iconAlt || "Icon"}
                className="text-sky-500 text-sm box-border caret-transparent h-[22px] tracking-[-0.14px] leading-[19.6px] mb-[-3px] text-center w-[22px] md:text-2xl md:tracking-[-0.24px] md:leading-[33.6px] md:text-start"
              />
            )}
          </div>
        </div>
        <div className="box-border caret-transparent relative aspect-[3_/_2] col-end-[image] col-start-[image] row-end-[image] row-start-[image] transform-none w-full overflow-hidden rounded-[20px] md:rotate-[3.0000011085596214deg]">
          <img
            alt={props.imageAlt || ""}
            src={props.imageSrc}
            className="absolute text-transparent box-border h-full object-contain w-full inset-0"
          />
        </div>
      </div>
    );
  }

  if (props.variant === "testimonial") {
    return (
      <div className="items-center box-border caret-transparent bg-white shadow-[rgba(0,0,0,0.03)_12px_18px_0px_0px] flex flex-col max-w-full mx-0 px-4 py-5 rounded-3xl md:max-w-[415px] md:mx-3 md:px-10 md:py-11">
        <div className="box-border caret-transparent text-[16.8px] mb-1 md:mb-[6.3px]">
          {props.rating}
        </div>
        <div className="box-border caret-transparent text-neutral-800 text-sm font-extrabold tracking-[-0.14px] leading-[19.6px] text-center mb-1 md:text-xl md:tracking-[-0.2px] md:leading-8 md:mb-[6.3px]">
          {props.author}
        </div>
        <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.14px] leading-[19.6px] text-center md:text-lg md:tracking-[-0.18px] md:leading-[28.8px]">
          {props.testimonialText}
        </div>
      </div>
    );
  }

  return null;
};
