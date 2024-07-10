import Home from "@/components/home/home";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "HOME",
};

export default function Page() {
  return <Home />;
}
