import Image from "next/image";
import profileImg from "@/public/1.jpg";
import SharedText from "../shared/sharedText";
export default function AboutHeader() {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-16">
        <div className="w-52 h-52 overflow-hidden rounded-full flex justify-center items-center">
          <Image
            src={profileImg}
            alt="프로필이미지"
            className="rounded-full "
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col items-center md:items-start md:gap-1 ">
            <SharedText textType="h4" text="최 준 혁" />
            <SharedText
              textType="p"
              text="91.05.04"
              className="text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-3">
            <SharedText
              textType="p"
              text="브라우저에 본인이 만드는 앱이 보이는것에 큰 매력을 느껴 웹 개발의
          길을 걷고 있습니다."
              className="text-center md:text-left"
            />
            <SharedText
              textType="p"
              text="현재 프론트엔드를 전문적으로 다루고 있으며 근성있고 도전을
          좋아하는 개발자 최준혁입니다."
              className="text-center md:text-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
