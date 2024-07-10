import {myProjects} from "@/constants/myProjects";
import SectionLayout from "../shared/sectionLayout";
import SharedText from "../shared/sharedText";
import ProjectCard from "./projectCard";

export default function ProjectPage() {
  return (
    <SectionLayout id="project_page" className="2xl:h-full">
      <SharedText textType="h2" text="PROJECTS" />
      <div className="grid gap-10 grid-cols-auto-fit-500 w-[90%]">
        {myProjects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </SectionLayout>
  );
}
