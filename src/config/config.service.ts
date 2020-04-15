import { ILink, ISections, IProjectSection, IContactLink, IQuotes } from './config.interface';
import { SectionNames } from './config.enum';

import Content from '../features/content/content';
import Footer from '../features/footer/footer';
import Nav from '../features/nav/nav';
import Projects from '../features/projects/projects';
import Quotes from '../features/quotes/quotes';

const baseUrl: string = 'http://www.peteplays.com';

const links: ILink[] = [
  {
    name: 'Content',
    // path: '/content',
    path: '(/|/content)',
    comp: Content,
  },
  {
    name: 'Footer',
    path: '/footer',
    comp: Footer,
  },
  {
    name: 'Nav',
    path: '/nav',
    comp: Nav,
  },
  {
    name: 'Projects',
    path: '/projects',
    comp: Projects,
  },
  {
    name: 'Quotes',
    path: '/quotes',
    comp: Quotes,
  },
]

const sections: ISections[] = [
  {
    name: SectionNames.TopSection,
    id: 'floatingMenuTopSection',
    classes: 'fa-dot-circle-o',
    title: 'PetePlays'
  },
  {
    name: SectionNames.QuotesSection,
    id: 'floatingMenuQuotesSection',
    classes: 'fa-ellipsis-v fa-ellipsis-c',
    title: 'Guitarist Quotes'
  },
  {
    name: SectionNames.ProjectSection,
    id: 'floatingMenuProjectSection',
    classes: 'fa-square',
    title: 'Projects'
  },
  {
    name: SectionNames.MoreSection,
    id: 'floatingMenuMoreSection',
    classes: 'fa-ellipsis-v fa-ellipsis-c',
    title: 'Tune in Later'
  },
  {
    name: SectionNames.FooterSection,
    id: 'floatingMenuFooterSection',
    classes: 'fa-dot-circle-o',
    title: 'Contact Info'
  }
];

const projectSection: IProjectSection[] = [
  {
    'title': 'Play\'s Lotto',
    'link': 'https://plays-lotto.herokuapp.com/',
    'description': 'This is an app for a user and teammates to estimate the effort of a given task.'
  },
  {
    'title': 'Finding a new office',
    'link': 'https://new-home.herokuapp.com/',
    'description': 'This is an app where the user can enter where they live and where they would like the `new` office location.'
  },
  {
    'title': 'Pete\'s Food Blog',
    'link': 'https://peteplays.wordpress.com/',
    'description': 'Check out some awesome food. (There is a lot of pizza)'
  },
  {
    'title': 'CODE talk',
    'link': 'https://vimeo.com/84447257',
    'description': 'I took the Android side of the age old debate... Android VS. iOS.  Check out the debate!'
  },
  {
    'title': 'CHS Tech Girl',
    'link': 'http://www.chstechgirl.com/from-a-dance-instructor-to-a-software-engineer/',
    'description': 'Suzelle Santos came by our office to interview our team about CODEcamp.'
  }
]

const contactLinks: IContactLink[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/peterschnabel',
    icon: 'fa-linkedin-square'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/peteplays',
    icon: 'fa-github-square'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/peteplays',
    icon: 'fa-twitter-square'
  },
  {
    name: 'Email',
    link: 'mailto:plays.dev@gmail.com',
    icon: 'fa-envelope-square'
  }
];

const quotes: IQuotes[] = [
  {
    'Eric Clapton': 'If you hand me a guitar, I\'ll play the blues. That\'s the place I automatically go'
  },
  {
    'Stevie Ray Vaughan': 'I\'m just doing the best I can now to keep this going... trying to grow up and remain young at the same time'
  },
  {
    'Jimi Hendrix': 'Knowledge speaks, but wisdom listens'
  },
  {
    'Jimmy Page': 'I believe every guitar player inherently has something unique about their playing. They just have to identify what makes them different and develop it'
  },
  {
    'John Mayer': 'Who I am as a guitarist is defined by my failure to become Jimi Hendrix'
  },
  {
    'John Mayer': 'They say stay in the lines, but there\'s always something better on the other side'
  }
]

export class ConfigService {
  readonly baseUrl: string;
  readonly links: ILink[];
  readonly sections: ISections[];
  readonly projectSection: IProjectSection[];
  readonly contactLinks: IContactLink[];
  readonly quotes: IQuotes[];

  constructor() {
    this.baseUrl = baseUrl;
    this.links = links;
    this.sections = sections;
    this.projectSection = projectSection;
    this.contactLinks = contactLinks;
    this.quotes = quotes;
  }

  getSectionId(sectionName: SectionNames) {
    return this.sections.find(s => s.name === sectionName)?.id || '';
  }
}

export const configService = new ConfigService();
