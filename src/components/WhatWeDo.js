import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import {
  faLaptopCode,
  faServer,
  faPaintBrush,
  faSearch,
  faMobileAlt,
  faBullhorn,
  faMicrochip,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function WhatWedo() {
  const {t} = useTranslation();
  return (
    <div className="what-we-do">
      <Container>
      <div className="icon-container">
      <FontAwesomeIcon className='icon-what_we_do' icon={faBriefcase} />
    </div>
  <h1 className="head">{t('what_we_do')}</h1>

          <div className="cards">
            <Link to={'/services/web-development'}>
              <div>
                <FontAwesomeIcon icon={faLaptopCode} />
                <h2>{t('web_development')}</h2>
                <p>{t('web_development_desc')}</p>
              </div>
            </Link>
            <Link to={'/services/digital-marketing'}>
              <div>
                <FontAwesomeIcon icon={faBullhorn} />
                <h2>{t('digital_marketing')}</h2>
                <p>{t('digital_marketing_desc')}</p>
              </div>
            </Link>
            <Link to={'/services/arduino-projects'}>
              <div>
                <FontAwesomeIcon icon={faMicrochip} />
                <h2>{t('arduino_projects')}</h2>
                <p>{t('arduino_projects_desc')}</p>
              </div>
            </Link>
            {/* <Link to={'/services/seo'}>
              <div>
                <FontAwesomeIcon icon={faSearch} />
                <h2>{t('seo')}</h2>
                <p>{t('seo_desc')}</p>
              </div>
            </Link>
            <Link to={'/services/web-hosting'}>
              <div>
                <FontAwesomeIcon icon={faServer} />
                <h2>{t('website_hosting')}</h2>
                <p>{t('website_hosting_desc')}</p>
              </div>
            </Link>
            <Link to={'/services/ui-ux'}>
              <div>
                <FontAwesomeIcon icon={faPaintBrush} />
                <h2>{t('ui_ux')}</h2>
                <p>{t('ui_ux_desc')}</p>
              </div>
            </Link> */}
            <Link to={'/services/app-development'}>
              <div>
                <FontAwesomeIcon icon={faMobileAlt} />
                <h2>{t('app_development')}</h2>
                <p>{t('app_development_desc')}</p>
              </div>
            </Link>
          </div>
        </Container>

    </div>
  );
}

export default WhatWedo;
