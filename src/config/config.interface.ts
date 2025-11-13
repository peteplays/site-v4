import type { ComponentType } from 'react';

export interface IConfig {
  links: ILink[];
}

export interface ILink {
  name: string;
  path: string;
  comp: ComponentType<any>;
}

export interface ISections {
  name: string;
  id: string;
  classes: string;
  title: string;
}

export interface IProjectSection {
  title: string;
  link: string;
  description: string;
}

export interface IContactLink {
  name: string;
  link: string;
  icon: string;
}

export interface IQuotes {
  [k: string]: string;
}
