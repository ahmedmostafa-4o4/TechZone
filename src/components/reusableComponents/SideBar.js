import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function SideBar(props) {
  const { handleSideBar } = props;
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const closeAll = () => {
    handleSideBar();
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to={'/'} onClick={closeAll}>
            {t('nav_home')}
          </Link>
        </li>

        <div className="products-sideBar">
          <li>
            <Link to={'/products'} onClick={closeAll} className="sidebar-link0">
              {t('nav_products')}
            </Link>
          </li>
        </div>

        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            {t('nav_services')}
          </button>
          {isOpen && (
            <ul className="dropdown-list">
              <li>
                <Link to="/services/web-development" onClick={closeAll}>
                  {t('nav_web_dev')}
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" onClick={closeAll}>
                  {t('nav_marketing')}
                </Link>
              </li>
              <li>
                <Link to="/services/arduino-projects" onClick={closeAll}>
                  {t('nav_arduino')}
                </Link>
              </li>
              {/* <li>
                <Link to="/services/seo" onClick={closeAll}>
                  {t('nav_seo')}
                </Link>
              </li>
              <li>
                <Link to="/services/web-hosting" onClick={closeAll}>
                  {t('nav_hosting')}
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux" onClick={closeAll}>
                  {t('nav_ui_ux')}
                </Link>
              </li> */}
              <li>
                <Link to="/services/app-development" onClick={closeAll}>
                  {t('nav_app_dev')}
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to={'/contact-us'} onClick={closeAll}>
            {t('nav_contact_us')}
          </Link>
        </li>
        <li>
          <Link to={'/about-us'} onClick={closeAll}>
            {t('nav_about_us')}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
