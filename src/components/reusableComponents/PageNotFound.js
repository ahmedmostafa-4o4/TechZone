import { useTranslation } from 'react-i18next';

function PageNotFound() {
  const { t } = useTranslation();
  return (
    <div className="page-not-found">
      <div className="cont_principal cont_error_active">
        <div className="cont_error">
          <h1>{t('oops')}</h1>
          <p>{t('page_not_found')}</p>
        </div>
        <img src="/images/404-Error.png"></img>
        {/* <div className="cont_aura_1"></div>
        <div className="cont_aura_2"></div> */}
      </div>
    </div>
  );
}

export default PageNotFound;
