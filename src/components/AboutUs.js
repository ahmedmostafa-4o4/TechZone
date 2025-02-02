import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Contact from "./Contact";


function AboutUs() {
  const {t} = useTranslation();

  return (
    <div className="about-us">
      <Container>
        <div className="title">
          <FontAwesomeIcon icon={faGlobe} />
          <h1 className="head-about">{t('about_us')}</h1>
        </div>
        <div>
          <div className="content">
            <center><h1>{t('we_always_make_best')}</h1></center>
            <br/>
            <div>
              <h3>{t('about_tech_zone')}</h3>
              <p>{t('about_tech_zone_desc')}</p>

              {/* <h3>{t('why_choose_us')}</h3>
              <p>
              <li><FontAwesomeIcon icon={faCog} className="icon-blue" /> {t('customized_solutions')}</li>
              <li><FontAwesomeIcon icon={faRocket} className="icon-blue" /> {t('innovation')}</li>
              <li><FontAwesomeIcon icon={faUserShield} className="icon-blue" /> {t('client_focused')}</li>
              </p> */}

              <h3>{t('our_mission')}</h3>
              <p>{t('our_mission_desc')}</p>
            </div>

            <Link className="hovered-btn" to={"/contact-us"}>
              <span>{t('contact_us')}</span>
            </Link>

          </div>
        <div className="about-us-image">
            <img
              src="/images/connecting-teams-concept-landing-page.png"
              alt=""
            />
          </div>
        </div>


      </Container>

<Contact />
    </div>
  );
}

export default AboutUs;
