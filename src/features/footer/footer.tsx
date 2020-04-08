import React from 'react';

import { configService } from '../../config/config.service';

import './footer.scss';
import playsLogo from '../../assets/playsLogo.png';

const Footer = ({ sectionId }: { sectionId: string }) => {
  return (
    <div className='footerSection sb-color' id={sectionId}>
      <a href={configService.baseUrl}>
        <img
          src={playsLogo}
          alt='PetePlays logo'
          title='PetePlays'
        />
      </a>

      <ul>
        {configService.contactLinks.map((c, i) =>
          <li
            key={i}
          >
            <a
              href={c.link}
              title={c.name}
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className={`fa ${c.icon}`} />
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Footer;
