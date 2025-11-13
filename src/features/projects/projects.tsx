import { configService } from '../../config/config.service';

import './projects.scss';

const Projects = ({ sectionId }: { sectionId: string }) => {
  return (
    <div className='projectSection fontStyle sb-color' id={sectionId}>
      <h2 className='textCenter'>Projects</h2>

      <ul>
        {configService.projectSection.map((p, i) => (
          <li key={i}>
            <div className='projectSectionSite'>
              <a href={p.link} target='_blank' rel='noopener noreferrer'>
                <i
                  className='fa fa-globe globeLeft'
                  style={{ marginRight: '10px' }}
                />
                {p.title}
                <i className='fa fa-globe globeRight' />
              </a>
            </div>
            <div className='projectSectionDescription'>{p.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
