import Footer from '../footer/footer';
import Nav from '../nav/nav';
import Projects from '../projects/projects';
import Quotes from '../quotes/quotes';

import { configService } from '../../config/config.service';
import { SectionNames } from '../../config/config.enum';

import './content.scss';

const Content = () => {
  return (
    <div>
      <Nav />

      <div
        className='sb-bg sb-bg-1'
        id={configService.getSectionId(SectionNames.TopSection)}
      >
        <div className='textCenter plays-banner'>
          <h1 className='fontStyle'>peteplays</h1>
        </div>
      </div>

      <div className='sb-color'>
        <h2 className='textCenter fontStyle'>Plug IN. Tune UP. Rock OUT.</h2>
      </div>

      <div className='sb-bg sb-bg-2' />
      <Quotes
        sectionId={configService.getSectionId(SectionNames.QuotesSection)}
      />

      <div className='sb-bg sb-bg-3' />
      <Projects
        sectionId={configService.getSectionId(SectionNames.ProjectSection)}
      />

      <div className='sb-bg sb-bg-4' />
      <div
        className='sb-color'
        id={configService.getSectionId(SectionNames.MoreSection)}
      >
        <h2 className='textCenter fontStyle'>
          There is always more around the corner... Stay tuned!
        </h2>
      </div>

      <div className='sb-bg sb-bg-5' />

      <Footer
        sectionId={configService.getSectionId(SectionNames.FooterSection)}
      />
    </div>
  );
};

export default Content;
