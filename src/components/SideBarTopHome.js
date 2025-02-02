import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';

function UncontrolledExampleTop() {
  const {t} = useTranslation();

  return (
    <div className='carousel-container'>
              <div className="title">
          <FontAwesomeIcon icon={faBolt} />
            <h1  style={{ letterSpacing: '1px' }} >{t('carousel-container')}</h1>
          </div>
      <Carousel className='carousel1' interval={2500}>

        <Carousel.Item>
        <a href="https://wa.me/201007489872?text=🔥 *مرحبًا فريق TechZone!* 🔥%0A%0A💼 أود الاستفسار عن *خدمات تصميم مواقع الويب* التي تقدمونها.%0A%0A✨ لقد سمعت الكثير عن *احترافيتكم في تقديم حلول مبتكرة* و *تصميم واجهات مستخدم مميزة*!%0A%0A🌐 أرغب في معرفة المزيد حول كيف يمكنكم مساعدتي في *إنشاء موقع ويب مميز* لأعمالي. %0A%0Aشكراً لكم! 🙏" target="_blank">
            <img src='/images/Web-Service.png' alt="Web Development"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://wa.me/201007489872?text=🚀 *مرحبًا أبطال TechZone!* 🚀%0A%0A🎯 أنا مهتم بـ *خدمات التسويق الرقمي والإعلانات على السوشيال ميديا* التي تقدمونها.%0A%0A💡 لقد سمعت أنكم *تتفوقون في استراتيجيات جذب العملاء* و *زيادة التفاعل عبر الإنترنت*!%0A%0A📈 أريد معرفة كيف يمكن لـ TechZone أن تساعدني في *تحقيق نجاح كبير وزيادة الانتشار* لأعمالي من خلال حملاتكم الفعّالة.%0A%0A🙌 شكرًا لكم! ونتطلع للتعاون معكم قريبًا. 💼" target="_blank">
            <img src='/images/Digita-Marketing-Service.png' alt="Digital Marketing"/>
          </a>
        </Carousel.Item>
        <Carousel.Item>
        <a href="https://wa.me/201007489872?text=🌟 *مرحبًا فريق TechZone!* 🌟%0A%0A🔍 أنا عميل متحمس للابتكار، وأبحث عن حلول *Arduino* مخصصة تلبي احتياجات مشروعي.%0A%0A🤖 لقد سمعت عن *الاحترافية والإبداع* التي تتمتعون بها في تصميم وتطوير مشاريع *Arduino*، وأرغب في معرفة كيف يمكن لفريقكم مساعدتي في *تحويل أفكاري إلى واقع*!%0A%0A💡 مشروعي يتطلب دقة وابتكار، وأنا واثق أنكم الأفراد المناسبون لتحقيق ذلك!%0A%0A📩 أود معرفة المزيد حول *الخدمات التي تقدمونها* وكيف يمكننا العمل معًا لجعل مشروع *Arduino* الخاص بي ناجحًا. شكرًا لكم! 🙌" target="_blank">
            <img src='/images/arduino-Service.png' alt="Arduino Projects"/>
          </a>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default UncontrolledExampleTop;
