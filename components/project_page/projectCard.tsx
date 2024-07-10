import {IMyProject} from "@/types/type";
import SharedText from "../shared/sharedText";
import ProjectBadge from "./projectBadge";
import RowCont from "../shared/rowCont";
import Image from "next/image";
import githubIcons from "@/public/codeSvg/github.svg";
import Link from "next/link";
import UpdateComp from "./update/updateComp";
import ProjectDesc from "./description/ProjectDesc";

export default function ProjectCard({item}: {item: IMyProject}) {
  return (
    <div className="flex flex-col gap-3 ">
      <RowCont className="gap-2">
        <SharedText
          textType="span"
          text=""
          className=" bg-sky-300 w-1 h-full"
        />
        <SharedText textType="h5" text={item.title} />
        <ProjectBadge team={item.team} />
      </RowCont>
      <SharedText textType="p" text={item.projectType} color="text-gray-400" />
      <RowCont className="gap-5">
        <RowCont className="gap-3 ">
          <SharedText
            color="text-gray-400"
            textType="h6"
            text="시작일"
            className="text-nowrap"
          />
          <SharedText
            color="text-gray-400"
            textType="p"
            text={new Date(item.developStart).toLocaleDateString("ko-KR")}
            className="text-nowrap"
          />
        </RowCont>
        <RowCont className="gap-3">
          <SharedText
            color="text-gray-400"
            textType="h6"
            text="게시일"
            className="text-nowrap"
          />
          <SharedText
            color="text-gray-400"
            textType="p"
            text={new Date(item.firstBuildDate).toLocaleDateString("ko-KR")}
            className="text-nowrap"
          />
        </RowCont>
      </RowCont>
      <div className="flex gap-3">
        {item.front.map((stack) => (
          <Image
            key={stack.name}
            src={stack.badge}
            alt={stack.name}
            width={24}
            height={24}
          />
        ))}

        {item.stateManager?.map((stack) => (
          <Image
            key={stack.name}
            src={stack.badge}
            alt={stack.name}
            width={24}
            height={24}
          />
        ))}

        {item.back?.map((stack) => (
          <Image
            key={stack.name}
            src={stack.badge}
            alt={stack.name}
            width={24}
            height={24}
          />
        ))}
      </div>

      <RowCont className="gap-5">
        <Link href={item.gitHub}>
          <Image
            src={githubIcons}
            alt="githubIcon"
            width={25}
            className="bg-white rounded-full"
          />
        </Link>
        <Link href={item.gitHub}>
          <SharedText textType="p" text="Go GitHub" />
        </Link>
      </RowCont>
      <Link href={`/project_page/${item.id}`}>
        <SharedText textType="p" text={`Go Detail \u2192`} />
      </Link>
    </div>
  );
}
