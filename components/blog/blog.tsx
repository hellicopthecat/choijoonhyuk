import Link from "next/link";
import SectionLayout from "../shared/sectionLayout";
import SharedText from "../shared/sharedText";

export default function Blog() {
  return (
    <SectionLayout id="blog">
      <SharedText textType="h2" text="BLOG" />
      <div>
        <Link href={"https://hhagis.tistory.com/"}>
          <SharedText textType="h5" text="TISTORY CLICK" />
        </Link>
      </div>
    </SectionLayout>
  );
}
