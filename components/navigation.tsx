"use client";
import Link from "next/link";
import SharedText from "./shared/sharedText";
import {useEffect, useRef, useState} from "react";
import dynamic from "next/dynamic";

export default function Navigation() {
  const [height, setHeight] = useState(400);
  const [isXl, setXl] = useState(false);
  useEffect(() => {
    const handleResize = () => setXl(window.innerWidth >= 1280);
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleHeight = () => setHeight(window.scrollY + 400);
    handleHeight();
    window.addEventListener("scroll", () => {
      if (height > 400) {
        setHeight(400);
      } else if (height > window.screenY) {
        setHeight((prev) => prev + 400);
      } else if (height < window.screenY) {
        setHeight((prev) => prev - 400);
      }
    });
  }, [height]);
  return (
    <nav
      className={`sticky top-0 z-10  bg-slate-800 border-b shadow-lg transition-all ease-in-out duration-300
      xl:nav_slide xl:absolute xl:shadow-none xl:border-b-0 xl:bg-transparent xl:right-0 `}
      style={isXl ? {top: height} : {}}
    >
      <ul
        className={`flex justify-between items-center p-5 xl:p-0 xl:flex-col xl:gap-10 transition-all ease-in-out duration-300 `}
      >
        <li className="relative group flex flex-col items-center ">
          <Link href={"/#"} className="z-50">
            <SharedText
              textType="span"
              text="HOME"
              className="flex xl:w-[150px]"
            />
          </Link>
          <div className="absolute top-0 left-0 flex items-end w-full h-full ">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group flex flex-col items-center ">
          <Link href={"/#about"} className="z-50">
            <SharedText
              textType="span"
              text="ABOUT"
              className="flex xl:w-[150px] text-center"
            />
          </Link>
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group flex flex-col items-center ">
          <Link href={"/#project_page"} className="z-50">
            <SharedText
              textType="span"
              text="PROJECT"
              className="flex xl:w-[150px] text-center"
            />
          </Link>
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group flex flex-col items-center ">
          <Link href={"/#blog"} className="z-50">
            <SharedText
              textType="span"
              text="BLOG"
              className="flex  xl:w-[150px] text-center"
            />
          </Link>
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group flex flex-col items-center ">
          <Link href={"/#contact"} className="z-50">
            <SharedText
              textType="span"
              text="CONTACT"
              className="flex  xl:w-[150px] text-center"
            />
          </Link>
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
