import {ReactNode} from "react";

export default function SectionLayout({children}: {children: ReactNode}) {
  return (
    <section className="flex flex-col gap-10 p-10 lg:p-20 transition-all duration-300 ease-in-out">
      {children}
    </section>
  );
}
