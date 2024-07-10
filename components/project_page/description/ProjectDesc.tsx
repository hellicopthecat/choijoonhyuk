"use client";
import RowCont from "@/components/shared/rowCont";
import SharedText from "@/components/shared/sharedText";
import {useState} from "react";

export default function ProjectDesc({desc}: {desc: string}) {
  const [slide, setSlide] = useState(true);
  const handleSlideDown = () => {
    setSlide((prev) => !prev);
  };
  return (
    <div>
      <RowCont className="gap-3">
        <SharedText textType="h6" text="설명" />
        <button
          onClick={handleSlideDown}
          className={`${
            slide ? "rotate-180" : "rotate-0"
          } transition ease-in-out duration-300`}
        >
          <svg
            width={20}
            height={20}
            color="white"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </RowCont>
      {slide ? (
        <div className="scale-y-100 h-full origin-top transition ease-in-out duration-300">
          <SharedText textType="p" text={desc ? desc : "미작성"} />
        </div>
      ) : (
        <div className="scale-y-0 h-0 origin-top transition ease-in-out duration-300">
          <SharedText textType="p" text={desc ? desc : "미작성"} />
        </div>
      )}
    </div>
  );
}
