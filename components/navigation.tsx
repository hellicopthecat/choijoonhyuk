"use client";
import SharedText from "./shared/sharedText";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-10 bg-slate-800 border-b shadow-lg  p-5 lg:p-0 lg:shadow-none lg:border-b-0 lg:bg-transparent lg:static ">
      <ul
        className={`flex justify-between lg:flex-col lg:gap-10 lg:absolute lg:right-0 lg:top-[5%] xl:top-[30%] transition-all ease-in-out duration-300 `}
      >
        <li className="relative group ">
          <SharedText textType="span" text="HOME" className=" lg:w-[150px]" />
          <div className="absolute top-0 left-0 flex items-end w-full h-full ">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center lg:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group ">
          <SharedText textType="span" text="ABOUT" className=" lg:w-[150px]" />
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center lg:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group ">
          <SharedText
            textType="span"
            text="PROJECT"
            className=" lg:w-[150px]"
          />
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center lg:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group ">
          <SharedText textType="span" text="BLOG" className=" lg:w-[150px]" />
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center lg:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
        <li className="relative group ">
          <SharedText
            textType="span"
            text="CONTACT"
            className="lg:flex w-[150px]"
          />
          <div className="absolute top-0 left-0 flex items-end w-full h-full">
            <div className=" h-[1px] w-full bg-white scale-x-[0] group-hover:scale-x-[1] origin-center lg:origin-right transition-all ease-in-out duration-100"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
