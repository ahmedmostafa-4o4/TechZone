import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import SuccessMessage from './reusableComponents/SuccessMessage';

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [is, setIs] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    setIs(true);
    e.preventDefault();
    setLoading(true);
    // Create a new FormData object
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('message', formData.message);

    // Now make the actual POST request
    fetch('https://techzones.site/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
          setIs(true);
        } else {
          setErrors({});
          document
            .querySelector('.message')
            .classList.replace('hide-message', 'show-message');
          setTimeout(() => {
            return document
              .querySelector('.message')
              .classList.replace('show-message', 'hide-message');
          }, 3000);
        }
      })
      .finally(() => {
        setLoading(false);
        setIs(false);
      });
  };

  return (
    <div className="contact">
      <Container>
        <div className="title">
          <FontAwesomeIcon icon={faPhone} />
          <h1>{t('contact_us')}</h1>
        </div>

        <div className="contact-details">
          <div>
            <h2>{t('contact_details')}:</h2>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: '#5291ff' }}
                />
                <strong> {t('email')}:</strong>{' '}
                <a href="mailto:info@techzone.com">info@techzone.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} style={{ color: '#005eff' }} />
                <strong> {t('phone')}:</strong> 01007489872
              </li>
            </ul>
          </div>

          <div>
            <h2>{t('business_hours')}:</h2>
            <ul>
              <li>{t('saturday_thursday')}</li>
              <li>{t('friday_closed')}</li>
            </ul>
          </div>
        </div>

        <div className="form-map">
          <form onSubmit={handleSubmit}>
            <div className="name">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder={t('first_name')}
                  value={formData.firstName}
                  onChange={handleChange}
                  style={errors.firstName && { borderColor: 'red' }}
                />
                {errors.firstName && <p>{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder={t('last_name')}
                  value={formData.lastName}
                  onChange={handleChange}
                  style={errors.lastName && { borderColor: 'red' }}
                />
                {errors.lastName && <p>{errors.lastName}</p>}
              </div>
            </div>

            <div style={{ display: 'block' }}>
              <input
                type="text"
                name="email"
                placeholder={t('email')}
                value={formData.email}
                onChange={handleChange}
                style={errors.email && { borderColor: 'red' }}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div style={{ display: 'block' }}>
              <textarea
                cols="30"
                rows="10"
                placeholder={t('message')}
                value={formData.message}
                onChange={handleChange}
                name="message"
                style={errors.message && { borderColor: 'red' }}
              ></textarea>
              {errors.message && <p>{errors.message}</p>}
            </div>

            <button type="submit">
              {loading ? t('loading') : t('submit')}
            </button>
          </form>

          <div className="map" id="map">
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3479.1024271617503!2d30.851353562166345!3d29.308670975405047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDE4JzMxLjIiTiAzMMKwNTAnNTUuNiJF!5e0!3m2!1sar!2seg!4v1725551254939!5m2!1sar!2seg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </Container>

      {is && errors && (
        <SuccessMessage message="Failed sending data" bg="red" />
      )}
      {!errors && <SuccessMessage message="Your Message Sent Successfully" />}
    </div>
  );
}

export default Contact;
