import ProjectCard from "@/components/project/projectCard";
import SectionLayout from "@/components/shared/sectionLayout";
import SharedText from "@/components/shared/sharedText";
import {myProjects} from "@/constants/myProjects";

export default function Page() {
  return (
    <SectionLayout>
      <SharedText textType="h2" text="PROJECTS" />
      <div className="grid grid-flow-row gap-5 md:grid-cols-2 lg:grid-flow-row lg:grid-cols-2 xl:grid-flow-row xl:grid-cols-3 2xl:grid-flow-xol 2xl:grid-cols-5">
        {myProjects.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </SectionLayout>
  );
}
