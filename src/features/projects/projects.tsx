import React from 'react';

import { configService } from '../../config/config.service';

import './projects.scss';

const Projects = ({ sectionId }: { sectionId: string }) => {
  return (
    <div className='projectSection fontStyle sb-color' id={sectionId}>
      <h2 className='textCenter'>
        Projects
      </h2>

      <ul>
        {configService.projectSection.map((p, i) =>
          <li key={i}>
            <div className='projectSectionSite'>
              <a
                href={p.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-globe' />
                {p.title}
              </a>
            </div>
            <div className='projectSectionDescription'>
              {p.description}
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Projects;


//   <div className='project-section-record' *ngFor='let project of projects'>
//   <div className='project-section-site'>
//     <a href='{{project.link}}' target='_blank'>
//       <i className='fa fa-globe'></i>
//       {{ project.title }}
//     </a>
//   </div>
//   <div className='project-section-description'>
//     <p>{{ project.description }}</p>
//   </div>
// </div>
