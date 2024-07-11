import {mySkills} from "@/constants/mySkills";
import SharedText from "../shared/sharedText";
import Image from "next/image";

export default function AboutStack() {
  return (
    <div className="w-[90%]">
      <div className="flex flex-col gap-3">
        <SharedText textType="h4" text="기술스택 소개" />
        <SharedText
          textType="p"
          text="프로젝트 수행에 사용했고 사용가능한 기술들입니다.."
          color="text-gray-300 text-sm"
        />
      </div>
      <div className="flex flex-col xl:flex-row bg-slate-800 p-3 rounded-md gap-5 xl:justify-between">
        <ul className="flex flex-col gap-2">
          <SharedText textType="h6" text="Front-end" />
          <li className="flex gap-3">
            {mySkills.front.map((skill) => (
              <Image
                key={skill.name}
                src={skill.img}
                height={25}
                alt={skill.name}
              />
            ))}
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <SharedText textType="h6" text="Style" />
          <li className="flex gap-3">
            {mySkills.style.map((skill) => (
              <Image
                key={skill.name}
                src={skill.img}
                height={25}
                alt={skill.name}
                title={skill.name}
              />
            ))}
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <SharedText textType="h6" text="Back-end" />
          <li className="flex gap-3">
            {mySkills.back.map((skill) => (
              <Image
                key={skill.name}
                src={skill.img}
                height={25}
                alt={skill.name}
                title={skill.name}
              />
            ))}
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <SharedText textType="h6" text="Mobile" />
          <li className="flex gap-3">
            {mySkills.mobile.map((skill) => (
              <Image
                key={skill.name}
                src={skill.img}
                height={25}
                alt={skill.name}
                title={skill.name}
              />
            ))}
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <SharedText textType="h6" text="Design Tools" />
          <li className="flex gap-3">
            {mySkills.design.map((skill) => (
              <Image
                key={skill.name}
                src={skill.img}
                height={25}
                alt={skill.name}
                title={skill.name}
              />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
