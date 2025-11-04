export type SearchLocationProps = {
  variant: "default" | "simple";
};

export const SearchLocation = (props: SearchLocationProps) => {
  if (props.variant === "simple") {
    return (
      <div className="box-border caret-transparent w-full bg-gray-200 h-px md:h-5 md:w-px"></div>
    );
  }

  return (
    <div
      type="text"
      role="combobox"
      className="box-border caret-transparent w-full bg-white flex overflow-hidden p-2 border-2 border-solid border-transparent md:w-[180px] md:pt-3.5 md:pb-4 md:px-6"
    >
      <div className="items-start box-border caret-transparent gap-x-2 flex basis-[0%] flex-row grow justify-start gap-y-2 w-full md:gap-x-[7px] md:flex-col md:justify-center md:gap-y-[7px] md:w-auto">
        <div className="text-gray-500 text-xs font-medium box-border caret-transparent hidden tracking-[-0.24px] leading-[14px] min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
          Location
        </div>
        <div className="items-center box-border caret-transparent gap-x-1 flex gap-y-1"></div>
      </div>
    </div>
  );
};
