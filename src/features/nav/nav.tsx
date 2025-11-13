import { Link as ScrollLink } from 'react-scroll';

import { configService } from '../../config/config.service';

import './nav.scss';

const Nav = () => {
  return (
    <div className='navSection'>
      <ul>
        {configService.sections.map((s, i) => (
          <li key={i}>
            <ScrollLink
              to={s.id}
              spy={true}
              smooth={'easeInOutQuad'}
              duration={700}
              className={`fa ${s.classes}`}
              title={s.title}
              activeClass='active'
              offset={-10}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
