import {ReactNode} from "react";

export default function RowCont({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`flex items-end ${className}`}>{children}</div>;
}
