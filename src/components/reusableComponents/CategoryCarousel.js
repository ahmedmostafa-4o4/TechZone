import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function CategoryCarousel(props) {
  const carouselRef = useRef(null);
  const [category, setCategory] = useState([]);
  const categoriesUrl = 'http://127.0.0.1:8000/api/categories';
  const { t } = useTranslation();

  const { handleCategories } = props;
  const displayAll = () => {
    document.querySelectorAll('.product-card').forEach((product) => {
      product.style.display = 'flex';
    });
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -140,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 140,
      behavior: 'smooth'
    });
  };

  const fetchCategories = async () => {
    axios.get(categoriesUrl).then((res) => setCategory(res.data));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  let isDragging = false;
  let startX;
  let scrollPosition;

  const onMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollPosition = carouselRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDragging = false;
  };

  const onMouseUp = () => {
    isDragging = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollPosition - walk;
  };

  return (
    <div className="carousel" onMouseLeave={onMouseLeave}>
      <button className="allProdut" onClick={() => displayAll()}>
        {t('all')}
      </button>
      <button onClick={() => scrollLeft()}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      <ul
        ref={carouselRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {category.length
          ? category.map((category, index) => (
              <button
                key={index}
                onClick={(e) => handleCategories(e.target.textContent)}
              >
                {category.title}
              </button>
            ))
          : null}
      </ul>

      <button onClick={() => scrollRight()}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default CategoryCarousel;
