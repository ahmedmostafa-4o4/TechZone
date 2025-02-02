import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Home from './components/Home';
import Nav from './components/reusableComponents/dNav';
import ServicePage from './components/ServicePage';
import Overlay from './components/reusableComponents/Overlay';
import SideBar from './components/reusableComponents/SideBar';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import ProductList from './components/ProductList';
import Footer from './components/reusableComponents/Footer';
import ScrollToTop from './components/reusableComponents/ScrollToTop';
import PageNotFound from './components/reusableComponents/PageNotFound';
import 'react-i18next';
import ProductPage from './components/ProductPage';
import { useTranslation } from 'react-i18next';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSideBar = () => {
    if (
      document.querySelector('.sidebar').classList.contains('side-bar-open')
    ) {
      document.body.classList.remove('side-bar-open');
      document.querySelector('.sidebar').classList.remove('side-bar-open');
      setIsOpen(false);
    } else {
      document.body.classList.add('side-bar-open');
      document.querySelector('.sidebar').classList.add('side-bar-open');
      setIsOpen(true);
    }
  };
  const { t } = useTranslation();
  return (
    <>
      <a
        href="https://wa.me/201007489872?text=%F0%9F%91%8B%20*%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%81%D8%B1%D9%8A%D9%82%20%D8%B9%D9%85%D9%84%20TechZone!*%20%F0%9F%91%8B%0A%0A%F0%9F%93%9D%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%B9%D8%B6%20%D8%A7%D9%84%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%20%D9%81%D9%8A%20*%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85!*%20%F0%9F%93%9C%0A%0A%F0%9F%99%8F%20*%D8%B4%D9%83%D8%B1%D9%8B%D8%A7%20%D9%84%D9%83%D9%85!*%20%F0%9F%99%8F"
        id="whatsapp-button"
        target="_blank"
      >
        <img src="/images/whatsapp-icon-design.png" alt="تواصل عبر واتساب" />
      </a>
      {isOpen ? <Overlay handleSideBar={handleSideBar} /> : null}
      <Nav handleSideBar={handleSideBar} />
      <SideBar handleSideBar={handleSideBar} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/services/web-development"
          element={
            <ServicePage
              img="/images/web-development.png"
              header={t('web_development_header')}
              description={t('web_development_description')}
              services={[
                {
                  imgServices: '/images/techzone.png',
                  headerServices: t('techzone-header'),
                  paragraphServices: t('techzone-paragraph'),
                  LinkServices: 'https://techzones.site'
                },
                {
                  imgServices: '/images/makani.png',
                  headerServices: t('Makani-header'),
                  paragraphServices: t('Makani-paragraph'),
                  LinkServices: 'https://makani.techzones.site'
                },
                {
                  imgServices: '/images/kingfood.png',
                  headerServices: t('kingfood-header'),
                  paragraphServices: t('kingfood-paragraph'),
                  LinkServices: 'https://kingfood.info'
                }
              ]}
            />
          }
        />

        <Route
          path="/services/digital-marketing"
          element={
            <ServicePage
              img="/images/digital-marketing.png"
              header={t('digital_marketing_header')}
              description={t('digital_marketing_description')}
              services={[
                {
                  imgServices:
                    '/images/461929117_1076303747833707_8900972727108875819_n.jpg',
                  paragraphServices: t('marketing1-paragraph'),
                  LinkServices:
                    'https://wa.me/201007489872?text=%F0%9F%91%8B%20*%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%81%D8%B1%D9%8A%D9%82%20TechZone!%20%F0%9F%91%8B%0A%0A%D9%83%D9%86%D8%AA%20%D8%A3%D9%88%D9%91%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%A7%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82*%20%F0%9F%92%BC%20%D9%88%D8%A7%D9%84%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AD%D8%A9%20%D9%84%D8%AF%D9%8A%D9%83%D9%85%20%F0%9F%92%B0.%0A%0A%F0%9F%99%8F%20*%D8%B4%D9%83%D8%B1%D9%8B%D8%A7%20%D9%84%D9%83%D9%85!*%20%F0%9F%99%8F'
                },

                {
                  imgServices: '/images/Digita-Marketing-Service2.png',
                  paragraphServices: t('marketing2-paragraph'),
                  LinkServices:
                    'https://wa.me/201007489872?text=%F0%9F%91%8B%20*%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%81%D8%B1%D9%8A%D9%82%20TechZone!%20%F0%9F%91%8B%0A%0A%D9%83%D9%86%D8%AA%20%D8%A3%D9%88%D9%91%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%A7%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82*%20%F0%9F%92%BC%20%D9%88%D8%A7%D9%84%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AD%D8%A9%20%D9%84%D8%AF%D9%8A%D9%83%D9%85%20%F0%9F%92%B0.%0A%0A%F0%9F%99%8F%20*%D8%B4%D9%83%D8%B1%D9%8B%D8%A7%20%D9%84%D9%83%D9%85!*%20%F0%9F%99%8F'
                }
              ]}
            />
          }
        />

        <Route
          path="/services/arduino-projects"
          element={
            <ServicePage
              img="/images/arduino-projects.png"
              header={t('arduino_projects_header')}
              description={t('arduino_projects_description')}
            />
          }
        />

        <Route
          path="/services/ui-ux"
          element={
            <ServicePage
              img="/images/ui-ux.png"
              header={t('ui_ux_header')}
              description={t('ui_ux_description')}
            />
          }
        />

        <Route
          path="/services/seo"
          element={
            <ServicePage
              img="/images/seo.png"
              header={t('seo_header')}
              description={t('seo_description')}
            />
          }
        />

        <Route
          path="/services/app-development"
          element={
            <ServicePage
              soon={t('soon')}
              img="/images/app-development.png"
              header={t('app_development_header')}
              description={t('app_development_description')}
            />
          }
        />

        <Route
          path="/services/web-hosting"
          element={
            <ServicePage
              img="/images/web-hosting.png"
              header={t('web_hosting_header')}
              description={t('web_hosting_description')}
            />
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
