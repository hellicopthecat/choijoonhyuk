import SharedText from "../shared/sharedText";

export default function AboutInfo() {
  return (
    <div className="flex flex-col gap-12 xl:flex-row xl:gap-20">
      <div className="flex flex-col gap-5">
        <div className="relative flex items-center gap-3">
          <SharedText
            textType="span"
            text=""
            className="absolute w-2 h-full bg-blue-300"
          />
          <SharedText textType="h4" text="학력" className=" ml-4" />
        </div>
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
        <div className="relative flex items-center gap-3">
          <SharedText
            textType="span"
            text=""
            className="absolute w-2 h-full bg-blue-300"
          />
          <SharedText textType="h4" text="교육과정" className=" ml-4" />
        </div>
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
        <div className="relative flex items-center gap-3">
          <SharedText
            textType="span"
            text=""
            className="absolute w-2 h-full bg-blue-300"
          />
          <SharedText textType="h4" text="자격증" className=" ml-4" />
        </div>
        <SharedText textType="p" text="유동관리사 3급" />
        <SharedText textType="p" text="중등학교2급정교사 (미술)" />
      </div>
    </div>
  );
}
