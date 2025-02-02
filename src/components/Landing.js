import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function Landing() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="landing">
        <Container>
          <div className="hero-content animate__animated animate__fadeInDown">
            <h1>{t('hero-content_h1')}</h1>
            {/* <p>
            {t('hero-content_p1')}
          </p> */}
            <p>{t('hero-content_p2')}</p>

            <button>
              <Link to={'about-us'}>{t('button_about_us')}</Link>
            </button>
          </div>
          <div className="landing-image ">
            <img
              src="/images/home-landing-removebg-preview.png"
              alt=""
              className="animate__animated animate__fadeInLeft"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
export default Landing;
