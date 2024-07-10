import Blog from "@/components/blog/blog";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: "BLOG",
};
export default function Page() {
  return <Blog />;
}
