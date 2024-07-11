import SectionLayout from "../shared/sectionLayout";
import SharedText from "../shared/sharedText";
import Image from "next/image";
import AboutHeader from "./aboutHeader";
import AboutStack from "./aboutStack";
import AboutInfo from "./aboutInfo";

export default function About() {
  return (
    <SectionLayout id="about">
      <SharedText textType="h2" text="ABOUT" />
      <AboutHeader />
      <AboutStack />
      <AboutInfo />
    </SectionLayout>
  );
}
