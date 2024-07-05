import {IMyProject} from "@/types/type";
import SharedText from "../shared/sharedText";
import ProjectBadge from "./projectBadge";
import RowCont from "../shared/rowCont";
import Image from "next/image";
import githubIcons from "@/public/codeSvg/github.svg";
import Link from "next/link";

export default function ProjectCard({item}: {item: IMyProject}) {
  return (
    <div className="flex flex-col gap-3 ">
      <RowCont className="gap-2">
        <SharedText
          textType="h5"
          text={item.title}
          className={item.title.length < 10 && "text-nowrap"}
        />
        <ProjectBadge team={item.team} />
      </RowCont>
      <SharedText textType="p" text={item.projectType} color="text-gray-400" />
      <RowCont className="gap-5">
        <RowCont className="gap-3 ">
          <SharedText color="text-gray-400" textType="h6" text="시작일" />
          <SharedText
            color="text-gray-400"
            textType="p"
            text={new Date(item.developStart).toLocaleDateString("ko-KR")}
          />
        </RowCont>
        <RowCont className="gap-3">
          <SharedText color="text-gray-400" textType="h6" text="게시일" />
          <SharedText
            color="text-gray-400"
            textType="p"
            text={new Date(item.firstBuildDate).toLocaleDateString("ko-KR")}
          />
        </RowCont>
      </RowCont>
      <div className="flex flex-col gap-2">
        <RowCont className="gap-5">
          {item.front.map((stack) => (
            <Image
              key={stack.name}
              src={stack.badge}
              alt={stack.name}
              height={24}
            />
          ))}
        </RowCont>
        <RowCont className="gap-5">
          {item.stateManager?.map((stack) => (
            <Image
              key={stack.name}
              src={stack.badge}
              alt={stack.name}
              height={24}
            />
          ))}
        </RowCont>
        <RowCont className="gap-5">
          {item.back?.map((stack) => (
            <Image
              key={stack.name}
              src={stack.badge}
              alt={stack.name}
              height={24}
            />
          ))}
        </RowCont>
      </div>
      <div>
        <SharedText textType="p" text="설명" />
        <SharedText textType="p" text={item.desc} />
      </div>
      <Link href={item.gitHub}>
        <Image
          src={githubIcons}
          alt="githubIcon"
          width={35}
          className="bg-white rounded-full"
        />
      </Link>
    </div>
  );
}
