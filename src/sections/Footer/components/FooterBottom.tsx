export type FooterBottomProps = {
  variant: string;
  copyrightText?: string;
  termsLink?: string;
  privacyLink?: string;
  countryText?: string;
  countryIconUrl?: string;
};

export const FooterBottom = (props: FooterBottomProps) => {
  if (props.variant === "copyright") {
    return (
      <div className="items-end box-border caret-transparent flex gap-x-[34px] basis-[0%] flex-col-reverse grow flex-wrap-reverse col-end-[copy] col-start-[copy] row-end-[copy] row-start-[copy] gap-y-3 md:items-center md:flex-row">
        <p className="text-white text-sm box-border caret-transparent flex my-3.5">
          {props.copyrightText}
        </p>
        <div className="items-start box-border caret-transparent gap-x-[15px] flex basis-[0%] flex-col grow gap-y-[15px] md:items-center md:gap-x-6 md:flex-row md:gap-y-6">
          <a
            title="Terms of Service"
            href={props.termsLink}
            className="text-white text-sm box-border caret-transparent flex underline text-nowrap md:no-underline"
          >
            Terms of Service
          </a>
          <a
            title="Privacy Policy"
            href={props.privacyLink}
            className="text-white text-sm box-border caret-transparent flex underline text-nowrap md:no-underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="items-end box-border caret-transparent flex relative col-end-[region] col-start-[region] row-end-[region] row-start-[region] justify-end">
      <button
        type="button"
        className="text-white text-sm items-center bg-transparent caret-transparent flex justify-between min-w-[186px] text-center w-full border p-[11px] rounded-[13px] border-solid border-white md:w-auto"
      >
        {props.countryText}
        <img
          src={props.countryIconUrl}
          alt="Icon"
          className="box-border caret-transparent h-6 w-6"
        />
      </button>
    </div>
  );
};
