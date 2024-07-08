"use client";
import SharedText from "./shared/sharedText";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-10  bg-slate-800 border-b shadow-lg transition-all ease-in-out duration-300 lg:z-0 xl:shadow-none xl:border-b-0 xl:bg-transparent xl:flex xl:justify-end xl:top-[30%] ">
      <ul
        className={`flex justify-between items-center p-5 xl:p-0 xl:flex-col xl:gap-10 transition-all ease-in-out duration-300 `}
      >
        <li className="relative group flex flex-col items-center ">
          <SharedText
            textType="span"
            text="HOME"
            className="flex xl:w-[150px]"
          />
          <div className="absolute top-0 left-0 flex items-end w-full h-full ">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group flex flex-col items-center ">
          <SharedText
            textType="span"
            text="ABOUT"
            className="flex xl:w-[150px] text-center"
          />
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group flex flex-col items-center ">
          <SharedText
            textType="span"
            text="PROJECT"
            className="flex xl:w-[150px] text-center"
          />
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group flex flex-col items-center ">
          <SharedText
            textType="span"
            text="BLOG"
            className="flex  xl:w-[150px] text-center"
          />
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group flex flex-col items-center ">
          <SharedText
            textType="span"
            text="CONTACT"
            className="flex  xl:w-[150px] text-center"
          />
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center xl:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
