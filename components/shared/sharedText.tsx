interface ITextProps {
  textType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  text: string;
  color?: string;
  className?: string | boolean;
}
export default function SharedText({
  textType,
  text,
  color = "text-white",
  className,
}: ITextProps) {
  switch (textType) {
    case "h1":
      return (
        <h1 className={`${color} ${className} font-black text-9xl `}>{text}</h1>
      );
    case "h2":
      return (
        <h2 className={`${color} ${className} font-bold text-7xl `}>{text}</h2>
      );
    case "h3":
      return (
        <h3 className={`${color} ${className} font-bold text-5xl `}>{text}</h3>
      );
    case "h4":
      return (
        <h4 className={`${color} ${className} font-semibold text-3xl `}>
          {text}
        </h4>
      );
    case "h5":
      return (
        <h5 className={`${color} ${className} font-semibold text-xl `}>
          {text}
        </h5>
      );
    case "h6":
      return (
        <h6 className={`${color} ${className} font-semibold text-lg `}>
          {text}
        </h6>
      );
    case "p":
      return <p className={`${color} ${className} `}>{text}</p>;
    case "span":
      return <span className={`${color} ${className} text-xs`}>{text}</span>;
  }
}
