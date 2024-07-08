import {IMyProject} from "@/types/type";
import htmlIcon from "@/public/codeSvg/html.svg";
import jsIcon from "@/public/codeSvg/javascript.svg";
import jqueryIcon from "@/public/codeSvg/jquery.svg";
import cssIcon from "@/public/codeSvg/css.svg";
import vueIcon from "@/public/codeSvg/vue.svg";
import sassIcon from "@/public/codeSvg/sass.svg";
import vuetifyIcon from "@/public/codeSvg/vuetify.svg";
import piniaIcon from "@/public/codeSvg/pinia.svg";
import firebaseIcon from "@/public/codeSvg/firebase.svg";
import reactIcon from "@/public/codeSvg/react.svg";
import tailwindIcon from "@/public/codeSvg/tailwindCss.svg";
import expressIcon from "@/public/codeSvg/express.svg";
import tsIcon from "@/public/codeSvg/typescript.svg";
import styleCompIcon from "@/public/codeSvg/styledcomponents.svg";
import apolloIcon from "@/public/codeSvg/apollo-graphql.svg";
import graphqlIcon from "@/public/codeSvg/graphql.svg";
import reduxIcon from "@/public/codeSvg/redux.svg";
import prismaIcon from "@/public/codeSvg/Prisma_dark.svg";
import expoIcon from "@/public/codeSvg/expo.svg";
import zustandIcon from "@/public/codeSvg/zustand.svg";
import socketIOIcon from "@/public/codeSvg/socket-io.svg";

export const myProjects: Array<IMyProject> = [
  {
    id: 1,
    title: "뚜레쥬르 홈페이지 리뉴얼",
    team: true,
    developStart: new Date("2023.05.02").getTime(),
    firstBuildDate: new Date("2023.06.05").getTime(),
    projectType: "TeamProject / Publish",
    front: [
      {name: "HTML", badge: htmlIcon},
      {name: "CSS", badge: cssIcon},
      {name: "VanillaJS", badge: jsIcon},
      {name: "JQUERY", badge: jqueryIcon},
    ],
    desc: "뚜레쥬르 홈페이지 리뉴얼",
    gitHub: "",
    update: [
      {
        id: 1,
        ver: "1.0.0",
        date: "2023.06.05",
        updateDesc: [{id: 1, desc: "초기배포"}],
      },
    ],
  },
  {
    id: 2,
    title: "Escape From Danger",
    team: false,
    developStart: new Date("2023.06.15").getTime(),
    firstBuildDate: new Date("2023.07.14").getTime(),
    projectType: "Fullstack",
    front: [
      {name: "VueJS", badge: vueIcon},
      {name: "SASS", badge: sassIcon},
      {name: "Vuetify", badge: vuetifyIcon},
    ],
    stateManager: [{name: "Pinia", badge: piniaIcon}],
    back: [{name: "Firebase", badge: firebaseIcon}],
    desc: "",
    gitHub: "",
    update: [
      {
        id: 1,
        ver: "1.0.0",
        date: "2023.07.14",
        updateDesc: [{id: 1, desc: "초기배포"}],
      },
    ],
  },
  {
    id: 3,
    title: "말랑말랑 레이스",
    team: false,
    developStart: new Date("2023.08.01").getTime(),
    firstBuildDate: new Date("2023.08.29").getTime(),
    projectType: "Fullstack",
    front: [
      {name: "ReactJS", badge: reactIcon},
      {name: "TailwindCSS", badge: tailwindIcon},
    ],
    back: [
      {name: "Firebase", badge: firebaseIcon},
      {name: "Express", badge: expressIcon},
    ],
    elseStack: [{name: "SocketIO", badge: socketIOIcon}],
    desc: "",
    gitHub: "",
    update: [
      {
        id: 1,
        ver: "1.0.0",
        date: "2023.08.29",
        updateDesc: [{id: 1, desc: "초기배포"}],
      },
    ],
  },
  {
    id: 4,
    title: "인적물자관리시스템 COCOM(커컴)",
    team: false,
    developStart: new Date("2024.03.24").getTime(),
    firstBuildDate: new Date("2024.05.31").getTime(),
    projectType: "Fullstack",
    front: [
      {name: "ReactJS", badge: reactIcon},
      {name: "TypeScript", badge: tsIcon},
      {name: "Styles-Components", badge: styleCompIcon},
    ],
    stateManager: [{name: "ReduxJS", badge: reduxIcon}],
    back: [
      {name: "GraphQL", badge: graphqlIcon},
      {name: "Apollo/Server", badge: apolloIcon},
      {name: "Express", badge: expressIcon},
      {name: "Prisma", badge: prismaIcon},
    ],
    desc: "",
    gitHub: "",
    update: [
      {
        id: 1,
        ver: "1.0.0",
        date: "2023.08.29",
        updateDesc: [{id: 1, desc: "초기배포"}],
      },
    ],
  },
  {
    id: 5,
    title: "인적물자관리시스템 COCOM.Mobile(커컴모바일)",
    team: false,
    developStart: new Date("2024.06.11").getTime(),
    firstBuildDate: new Date("2024.07.01").getTime(),
    projectType: "Fullstack",
    front: [
      {name: "Expo/React-Native", badge: expoIcon},
      {name: "TypeScript", badge: tsIcon},
      {name: "Styles-Components", badge: styleCompIcon},
    ],
    stateManager: [{name: "zustand", badge: zustandIcon}],
    back: [{name: "Apollo/Server", badge: apolloIcon}],
    desc: "",
    gitHub: "",
    update: [
      {
        id: 1,
        ver: "1.0.0",
        date: "2024.07.01",
        updateDesc: [{id: 1, desc: "초기배포"}],
      },
    ],
  },
];
