import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faServer,
  faCode,
  faMobileAlt,
  faSearch,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';
import { Container, Carousel } from 'react-bootstrap';
import WhatWedo from './WhatWeDo';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function Services() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <WhatWedo />
      <div className="services">
        <Container>
          <div className="title" style={{ textAlign: 'center' }}>
            <FontAwesomeIcon icon={faHandshake} />
            <h1>{t('services_title')}</h1>
          </div>

          {!isMobile ? (
            <div
              className="cards-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >
              {[
                {
                  icon: faRocket,
                  title: t('service_fast_performance'),
                  desc: t('service_fast_performance_desc')
                },
                {
                  icon: faServer,
                  title: t('service_reliable_hosting'),
                  desc: t('service_reliable_hosting_desc')
                },
                {
                  icon: faCode,
                  title: t('service_development'),
                  desc: t('service_development_desc')
                },
                {
                  icon: faMobileAlt,
                  title: t('service_innovative_apps'),
                  desc: t('service_innovative_apps_desc')
                },
                {
                  icon: faSearch,
                  title: t('service_effective_seo'),
                  desc: t('service_effective_seo_desc')
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="e-card"
                  style={{
                    margin: '10px',
                    width: '200px',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div className="image"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="infotop">
                    <FontAwesomeIcon icon={service.icon} className="icon" />
                    <br />
                    {service.title}
                    <br />
                    <div className="name">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="carousel-container">
              <Carousel interval={2500}>
                {[
                  {
                    icon: faRocket,
                    title: t('service_fast_performance'),
                    desc: t('service_fast_performance_desc')
                  },
                  {
                    icon: faServer,
                    title: t('service_reliable_hosting'),
                    desc: t('service_reliable_hosting_desc')
                  },
                  {
                    icon: faCode,
                    title: t('service_development'),
                    desc: t('service_development_desc')
                  },
                  {
                    icon: faMobileAlt,
                    title: t('service_innovative_apps'),
                    desc: t('service_innovative_apps_desc')
                  },
                  {
                    icon: faSearch,
                    title: t('service_effective_seo'),
                    desc: t('service_effective_seo_desc')
                  }
                ].map((service, index) => (
                  <Carousel.Item key={index}>
                    <div
                      className="e-carde"
                      style={{
                        margin: '-35px auto',
                        width: '300px',
                        textAlign: 'center',
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      <div className="image"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="infotop">
                        <FontAwesomeIcon icon={service.icon} className="icon" />
                        <br />
                        {service.title}
                        <br />
                        <div className="name">{service.desc}</div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}

export default Services;
