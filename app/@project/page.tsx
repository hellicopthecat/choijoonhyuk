import ProjectCard from "@/components/project/projectCard";
import SectionLayout from "@/components/shared/sectionLayout";
import SharedText from "@/components/shared/sharedText";
import {myProjects} from "@/constants/myProjects";

export default function Page() {
  return (
    <SectionLayout className="2xl:h-dvh">
      <SharedText textType="h2" text="PROJECTS" />
      <div className="grid gap-10 grid-cols-auto-fit-500 w-[80%]">
        {myProjects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </SectionLayout>
  );
}
