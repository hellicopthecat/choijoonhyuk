"use client";
import RowCont from "@/components/shared/rowCont";
import SharedText from "@/components/shared/sharedText";
import {IMyProject} from "@/types/type";
import {useState} from "react";

export default function UpdateComp({item}: {item: IMyProject["update"]}) {
  const [slide, setSlide] = useState(false);
  return (
    <div>
      <RowCont className="gap-3">
        <SharedText textType="h6" text="Update Log" />
        <button
          onClick={() => setSlide((prev) => !prev)}
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
      {item.length === 0 ? (
        <div>
          <SharedText
            textType="p"
            text="개발중이거나 업데이트로그가 없습니다."
          />
        </div>
      ) : (
        item.map((logs) => (
          <div
            key={logs.id}
            className={` ${
              slide ? " scale-y-100 h-full" : "scale-y-0 h-0"
            } origin-top transition ease-in-out duration-300`}
          >
            <SharedText textType="h6" text={`ver. ${logs.ver}`} />
            <div className="flex gap-2">
              <SharedText textType="h6" text="업데이트 날짜" />
              <SharedText textType="span" text={logs.date} />
            </div>
            <div>
              <SharedText textType="h6" text="업데이트 내용" />
              <ul>
                {logs.updateDesc.map(({id, desc}) => (
                  <li key={id}>
                    <SharedText textType="p" text={desc} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
