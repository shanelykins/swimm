export type FooterColumnProps = {
  title: string;
  links: Array<{
    title: string;
    href?: string;
    text: string;
  }>;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="box-border caret-transparent w-full">
      <p className="text-white text-sm font-medium box-border caret-transparent leading-[21px] mb-[15px] md:mb-5">
        {props.title}
      </p>
      <ul className="box-border caret-transparent list-none pl-0">
        {props.links.map((link, index) => (
          <li key={index} className="box-border caret-transparent mb-3">
            <a
              title={link.title}
              href={link.href}
              className="text-white text-sm box-border caret-transparent"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
