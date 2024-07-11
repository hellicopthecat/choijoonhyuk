import {IMySkills} from "@/types/type";
import html from "@/public/codeSvg/html.svg";
import css from "@/public/codeSvg/css.svg";
import javascript from "@/public/codeSvg/javascript.svg";
import typescript from "@/public/codeSvg/typescript.svg";
import jquery from "@/public/codeSvg/jquery.svg";
import pug from "@/public/codeSvg/pug.svg";
import vue from "@/public/codeSvg/vue.svg";
import react from "@/public/codeSvg/react.svg";
import next from "@/public/codeSvg/next-js.svg";
import sass from "@/public/codeSvg/sass.svg";
import styledcomponent from "@/public/codeSvg/styledcomponents.svg";
import vuetify from "@/public/codeSvg/vuetify.svg";
import tailwindCss from "@/public/codeSvg/tailwindCss.svg";
import nodejs from "@/public/codeSvg/nodejs.svg";
import express from "@/public/codeSvg/express.svg";
import mongoose from "@/public/codeSvg/mongoose.png";
import apollo from "@/public/codeSvg/apollo-graphql.svg";
import prisma from "@/public/codeSvg/prisma_dark.svg";
import expo from "@/public/codeSvg/expo.svg";
import reactNative from "@/public/codeSvg/react-native.svg";
import photoshop from "@/public/codeSvg/photoshop.svg";
import illustrator from "@/public/codeSvg/illustrator.svg";
import indesign from "@/public/codeSvg/indesign.svg";
import figma from "@/public/codeSvg/figma.svg";

export const mySkills: IMySkills = {
  front: [
    {name: "HTML", img: html, desc: [""]},
    {name: "CSS", img: css, desc: [""]},
    {name: "JavaScript", img: javascript, desc: [""]},
    {name: "JQuery", img: jquery, desc: [""]},
    {name: "Pug", img: pug, desc: [""]},
    {name: "TypeScript", img: typescript, desc: [""]},
    {name: "Vue", img: vue, desc: [""]},
    {name: "React", img: react, desc: [""]},
    {name: "NextJS", img: next, desc: [""]},
  ],
  style: [
    {name: "Sass", img: sass, desc: [""]},
    {name: "Styled-Components", img: styledcomponent, desc: [""]},
    {name: "Vuetify", img: vuetify, desc: [""]},
    {name: "TailWindCSS", img: tailwindCss, desc: [""]},
  ],
  back: [
    {name: "NodeJS", img: nodejs, desc: [""]},
    {name: "Express", img: express, desc: [""]},
    {name: "Mongoose", img: mongoose, desc: [""]},
    {name: "Apollo", img: apollo, desc: [""]},
    {name: "Prisma", img: prisma, desc: [""]},
  ],
  mobile: [
    {name: "Expo", img: expo, desc: [""]},
    {name: "React-Native", img: reactNative, desc: [""]},
  ],
  design: [
    {name: "Photoshop", img: photoshop, desc: [""]},
    {name: "Illustrator", img: illustrator, desc: [""]},
    {name: "InDesign", img: indesign, desc: [""]},
    {name: "Figma", img: figma, desc: [""]},
  ],
};
