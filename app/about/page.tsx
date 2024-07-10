import About from "@/components/about/about";
import {Metadata} from "next";
export const metadata: Metadata = {
  title: "ABOUT",
};
export default function Page() {
  return <About />;
}
