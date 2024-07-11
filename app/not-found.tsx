import SectionLayout from "@/components/shared/sectionLayout";
import SharedText from "@/components/shared/sharedText";

export default function Notfound() {
  return (
    <SectionLayout className="h-dvh flex flex-col items-center justify-center">
      <SharedText textType="h2" text="404 NOT FOUND" />
      <SharedText textType="h4" text="찾을 수 없는 페이지입니다." />
      <a href="/">
        <SharedText textType="h6" text={`GO HOME \u2192`} />
      </a>
    </SectionLayout>
  );
}
