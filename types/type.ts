export interface IMyProject {
  id: number;
  title: string;
  team: boolean;
  developStart: number;
  firstBuildDate: number;
  projectType: string;
  front: Array<{name: string; badge: string}>;
  stateManager?: Array<{name: string; badge: string}>;
  back?: Array<{name: string; badge: string}>;
  elseStack?: Array<{name: string; badge: string}>;
  desc: string;
  gitHub: string;
  update: Array<{ver: string; date: string; desc: string}>;
}
