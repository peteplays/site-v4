import { createElement } from 'react';

import {
  ILink,
  ISections,
  IProjectSection,
  IContactLink,
  IQuotes,
} from './config.interface';
import { SectionNames } from './config.enum';

import Content from '../features/content/content';
import Footer from '../features/footer/footer';
import Nav from '../features/nav/nav';
import Projects from '../features/projects/projects';
import Quotes from '../features/quotes/quotes';

const BASE_URL: string = 'http://www.peteplays.com';

const sections: ISections[] = [
  {
    name: SectionNames.TopSection,
    id: 'floatingMenuTopSection',
    classes: 'fa-dot-circle-o',
    title: 'PetePlays',
  },
  {
    name: SectionNames.QuotesSection,
    id: 'floatingMenuQuotesSection',
    classes: 'fa-ellipsis-v fa-ellipsis-c',
    title: 'Guitarist Quotes',
  },
  {
    name: SectionNames.ProjectSection,
    id: 'floatingMenuProjectSection',
    classes: 'fa-square',
    title: 'Projects',
  },
  {
    name: SectionNames.MoreSection,
    id: 'floatingMenuMoreSection',
    classes: 'fa-ellipsis-v fa-ellipsis-c',
    title: 'Tune in Later',
  },
  {
    name: SectionNames.FooterSection,
    id: 'floatingMenuFooterSection',
    classes: 'fa-dot-circle-o',
    title: 'Contact Info',
  },
];

const projectSection: IProjectSection[] = [
  {
    title: 'YTMusic «≈» Spotify',
    link: 'https://flip.peteplays.com/',
    description:
      'Cross-Platform Link Converter: Share music effortlessly. Simply paste a link for any Artist, Album, or Song from YouTube Music or Spotify to instantly receive the corresponding link for that item on the other service.',
  },
  {
    title: 'Lorem Bitters',
    link: 'https://bitters.vercel.app/',
    description: 'Lorem site for bitters',
  },
  {
    title: 'Doggy ID',
    link: 'https://doggy.peteplays.com/',
    description: 'Doggy ID for service dogs',
  },
];

const contactLinks: IContactLink[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/peterschnabel',
    icon: 'fa-linkedin-square',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/peteplays',
    icon: 'fa-github-square',
  },
  {
    name: 'Email',
    link: 'mailto:plays.dev@gmail.com',
    icon: 'fa-envelope-square',
  },
];

const quotes: IQuotes[] = [
  {
    'Eric Clapton':
      "If you hand me a guitar, I'll play the blues. That's the place I automatically go",
  },
  {
    'Stevie Ray Vaughan':
      "I'm just doing the best I can now to keep this going... trying to grow up and remain young at the same time",
  },
  {
    'Jimi Hendrix': 'Knowledge speaks, but wisdom listens',
  },
  {
    'Jimmy Page':
      'I believe every guitar player inherently has something unique about their playing. They just have to identify what makes them different and develop it',
  },
  {
    'John Mayer':
      'Who I am as a guitarist is defined by my failure to become Jimi Hendrix',
  },
  {
    'John Mayer':
      "They say stay in the lines, but there's always something better on the other side",
  },
];

export class ConfigService {
  readonly baseUrl: string;
  readonly links: ILink[];
  readonly sections: ISections[];
  readonly projectSection: IProjectSection[];
  readonly contactLinks: IContactLink[];
  readonly quotes: IQuotes[];

  constructor() {
    this.baseUrl = BASE_URL;
    this.sections = sections;
    this.projectSection = projectSection;
    this.contactLinks = contactLinks;
    this.quotes = quotes;
    this.links = this.createLinks();
  }

  getSectionId(sectionName: SectionNames) {
    return (
      this.sections.find((section) => section.name === sectionName)?.id ?? ''
    );
  }

  private createLinks(): ILink[] {
    return [
      {
        name: 'Content',
        // path: '/content',
        // path: '(/|/content)',
        path: '/',
        element: createElement(Content),
      },
      {
        name: 'Footer',
        path: '/footer',
        element: createElement(Footer, {
          sectionId: this.getSectionId(SectionNames.FooterSection),
        }),
      },
      {
        name: 'Nav',
        path: '/nav',
        element: createElement(Nav),
      },
      {
        name: 'Projects',
        path: '/projects',
        element: createElement(Projects, {
          sectionId: this.getSectionId(SectionNames.ProjectSection),
        }),
      },
      {
        name: 'Quotes',
        path: '/quotes',
        element: createElement(Quotes, {
          sectionId: this.getSectionId(SectionNames.QuotesSection),
        }),
      },
    ];
  }
}

export const configService = new ConfigService();
