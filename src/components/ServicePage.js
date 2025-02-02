import React from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function ServicePage(props) {
  const { t } = useTranslation();
  
  return (
    <div className="service-page">
      <h1 className="soon">{props.soon}</h1>
      <Container>
        <div className="service-image">
          <img src={props.img} alt="Development" />
        </div>
        <div className="content">
          <h2>{props.header}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
      </Container>
      {/* قائمة الخدمات */}
      {props.services && props.services.length > 0 && (
        <div className='pageServices'>
          <h1 className='tit'>{t('lookAtWork')}</h1>
          {props.services.map((service, index) => (
            <div key={index} className="service-item"> 
              <div className='listpageServices'>
                <h3>{service.headerServices}</h3>
                <div className='service-details'>
                  <img src={service.imgServices} alt="Service" />
                  <div className='service-description'>
                    <p dangerouslySetInnerHTML={{ __html: service.paragraphServices }} />
                  </div>
                </div>
                <a href={service.LinkServices} target="_blank" rel="noopener noreferrer">{t('viewSite')}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ServicePage;
