import { Container } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

function Nav(props) {
  const { handleSideBar } = props;
  const { t } = useTranslation();

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav
      className="nav"
      style={{
        backgroundColor: isHomePage ? '#111e91' : '#FFFFFF',
        color: isHomePage ? '#E3F2FD' : '#000000'
      }}
    >
      <Container>
        <div className="lang">
          <button
            className="toggle-btn"
            onClick={handleSideBar}
            style={{ color: isHomePage ? '#E3F2FD' : '#000000' }}
          >
            {' '}
            <MenuOpenIcon />
          </button>
          <LanguageSwitcher />
        </div>

        <div className="links">
          <NavLink
            to={'/'}
            style={{ color: isHomePage ? '#E3F2FD' : '#000000' }}
          >
            {t('nav_home')}
          </NavLink>
          <NavLink
            to={'/services'}
            style={{ color: isHomePage ? '#E3F2FD' : '#000000' }}
          >
            {t('nav_services')}
          </NavLink>
          <NavLink
            to={'/products'}
            style={{ color: isHomePage ? '#E3F2FD' : '#000000' }}
          >
            {t('nav_products')}
          </NavLink>
          <NavLink
            to={'/contact-us'}
            style={{ color: isHomePage ? '#E3F2FD' : '#000000' }}
          >
            {t('nav_contact_us')}{' '}
          </NavLink>
          <NavLink
            to={'/about-us'}
            style={{ color: isHomePage ? '#E3F2FD' : '#000000' }}
          >
            {t('nav_about_us')}
          </NavLink>
        </div>
        <div className="logo">
          <Link to={'/'}>
            <img
              src="/images/WhatsApp_Image_2024-08-16_at_16.09.45_c79cecd8-removebg-preview.png"
              alt="Logo"
            />
          </Link>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
