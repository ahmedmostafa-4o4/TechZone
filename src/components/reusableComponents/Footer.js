import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTiktok,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SuccessMessage from './SuccessMessage';
import { useTranslation } from 'react-i18next';

function Footer() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    fetch('http://127.0.0.1:8000/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
          console.log(data.errors);
        } else {
          setErrors({});
        }
      })
      .finally(() => {
        document
          .querySelector('.message')
          .classList.replace('hide-message', 'show-message');
        setTimeout(() => {
          return document
            .querySelector('.message')
            .classList.replace('show-message', 'hide-message');
        }, 3000);
      });
  };
  return (
    <>
      <section className="widget_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer_widget">
                <Link to={'/'}>
                  <img
                    className="logo-footer"
                    src="/images/footer-logo.png"
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <div className="footer_widget">
                <h3>{t('social_media')}</h3>
                <p>{t('social_media_description')}</p>
                <section className="widget_social">
                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{
                      backgroundColor: '#1877F2',
                      borderRadius: '40%',
                      width: '42px'
                    }}
                    href="https://www.facebook.com/techzones.site"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>

                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{
                      backgroundColor: '#25D366',
                      borderRadius: '40%',
                      width: '40px'
                    }}
                    href="https://wa.me/201007489872"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>

                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{
                      backgroundColor: '#D44638',
                      borderRadius: '40%',
                      width: '40px'
                    }}
                    href="mailto:info@techzones.site?subject=استفسار%20حول%20خدمات%20TechZone&body=مرحبًا،%20أرغب%20في%20المزيد%20من%20المعلومات%20حول%20خدماتكم."
                    role="button"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>

                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{
                      background: '#010101',
                      borderRadius: '40%',
                      width: '40px'
                    }}
                    href="https://www.tiktok.com/@techzones.site"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>

                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{
                      backgroundColor: '#0077B5',
                      borderRadius: '40%',
                      width: '40px'
                    }}
                    href="#!"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>

                  <a
                    data-mdb-ripple-init
                    className="btn text-white btn-floating m-1"
                    style={{
                      backgroundColor: '#333',
                      borderRadius: '40%',
                      width: '40px'
                    }}
                    href="#!"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </section>
              </div>
            </div>

            <div className="col-md-4">
              <div className="footer_widget">
                <h3>{t('subscribe')}</h3>
                <div className="subscribe_form">
                  <form
                    className="subscribe_form"
                    noValidate={true}
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="email"
                      name="EMAIL"
                      id="subs-email"
                      className="form_input"
                      placeholder={t('subscribe_email_placeholder')}
                      value={email || ''}
                      onChange={(e) => setEmail(e.target.value)}
                      style={errors.email && { borderColor: 'red' }}
                    />
                    <button type="submit" className="submit">
                      {t('subscribe_button')}
                    </button>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_section">
        <div className="copyright">
          {' '}
          &copy;2024
          <Link to={'/'}>
            <b> TechZone</b>
          </Link>
        </div>
      </footer>
      <SuccessMessage
        message={errors.email ? errors.email[0] : 'Thank you for subscribtion'}
        bg={errors.email ? 'red' : 'green'}
      />
    </>
  );
}

export default Footer;
