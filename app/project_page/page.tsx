import ProjectPage from "@/components/project_page/projectPage";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: "PROJECT",
};
export default function Page() {
  return <ProjectPage />;
}
