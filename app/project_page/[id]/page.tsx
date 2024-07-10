import PJModal from "@/components/project_page/pjModal/pjModal";
import {myProjects} from "@/constants/myProjects";
export async function generateMetadata({
  params,
}: {
  params: Partial<{id: string}>;
}) {
  const project = myProjects.find((pj) => pj.id + "" === params.id);

  return {
    title: project?.title,
  };
}
export default function Page() {
  return <PJModal />;
}
