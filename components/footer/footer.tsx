import SharedText from "../shared/sharedText";

export default function Footer() {
  return (
    <div className="flex justify-center items-center h-[100px]">
      <SharedText
        textType="span"
        text={`\u00a9 ${new Date().getFullYear()}. ChoiJoonHyuk All rights reserved`}
      />
    </div>
  );
}
