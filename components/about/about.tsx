import SectionLayout from "../shared/sectionLayout";
import SharedText from "../shared/sharedText";
import Image from "next/image";
import profileImg from "@/public/1.jpg";
export default function About() {
  return (
    <SectionLayout id="about">
      <SharedText textType="h2" text="ABOUT" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-16">
          <div className="w-52 h-52 overflow-hidden rounded-full">
            <Image src={profileImg} alt="프로필이미지" />
          </div>
          <div className="flex flex-col items-center md:items-start md:gap-3 ">
            <SharedText textType="h4" text="최 준 혁" />
            <SharedText
              textType="p"
              text="91.05.04"
              className="text-gray-400"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <SharedText
            textType="h5"
            text="근성있고 도전을 좋아하는 개발자 최준혁입니다."
            className="text-center md:text-left text-nowrap"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <SharedText textType="h4" text="학력" />
        <div className="flex flex-col gap-1 md:flex-row md:gap-2">
          <SharedText textType="p" text="강릉원주대학교 교육대학원 " />
          <SharedText
            textType="p"
            text="2019.08 (졸)"
            className="text-gray-400"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <SharedText textType="p" text="강릉원주대학교 미술학과 " />
          <SharedText
            textType="p"
            text="2017.03 (졸)"
            className="text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <SharedText textType="h4" text="교육과정" />
        <div>
          <SharedText
            textType="p"
            text="프로젝트 기반 프론트엔드(React,Vue)웹&앱 SW개발"
            className="text-nowrap"
          />
          <SharedText
            textType="p"
            text="2023.02 ~ 2023.08"
            className="text-gray-400"
          />
        </div>
        <div>
          <SharedText
            textType="p"
            text="(출판)영상을 활용한 편집디자인(포토샵,일러스트,인디자인,E-Book)"
          />
          <SharedText
            textType="p"
            text="2022.05 ~ 2022.09"
            className="text-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <SharedText textType="h4" text="자격증" />
        <SharedText textType="p" text="유동관리사 3급" />
        <SharedText textType="p" text="중등학교2급정교사 (미술)" />
      </div>
    </SectionLayout>
  );
}
