import {ReactNode} from "react";
interface ISectionLayout {
  id?: string;
  children: ReactNode;
  className?: string;
}
export default function SectionLayout({
  id,
  children,
  className,
}: ISectionLayout) {
  return (
    <section
      id={id}
      className={`${className} flex flex-col gap-10 p-10 lg:p-20 transition-all duration-300 ease-in-out`}
    >
      {children}
    </section>
  );
}
