"use client";
import SharedText from "@/components/shared/sharedText";
import {myProjects} from "@/constants/myProjects";
import Link from "next/link";
import {useParams} from "next/navigation";
import UpdateComp from "../update/updateComp";
import ProjectDesc from "../description/ProjectDesc";
import SectionLayout from "@/components/shared/sectionLayout";

export default function Modal() {
  const {id} = useParams<Partial<{id: string}>>();
  const project = myProjects.find((pj) => pj.id + "" === id);
  return (
    <SectionLayout className="2xl:h-full">
      <SharedText textType="h4" text={project?.title + ""} />
      <ProjectDesc desc={project?.desc + ""} />
      <UpdateComp id={Number(id)} item={project?.update || []} />
      <Link href={"/#project_page"}>
        <SharedText textType="h6" text="뒤로가기" />
      </Link>
    </SectionLayout>
  );
}
