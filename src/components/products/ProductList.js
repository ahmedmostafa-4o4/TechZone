import { Container } from 'react-bootstrap';
import CategoryCarousel from '../reusableComponents/CategoryCarouselts/CategoryCarousel';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from './Product';
import Loader from '../reusableComponents/Loader';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const productsUrl = 'http://127.0.0.1:8000/api/products';

  const { t } = useTranslation();

  const fetchProducts = async () => {
    axios.get(productsUrl).then((res) => {
      const shuffledProducts = res.data.sort(() => 0.5 - Math.random());
      setProduct(shuffledProducts);
      setFilteredProduct(shuffledProducts);
    });
  };

  const handleSearch = (e) => {
    const searchValue = e.toLowerCase();
    const filtered = product.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
    setFilteredProduct(filtered);
  };

  const handleCategories = (e) => {
    document
      .querySelectorAll('.product-card .category')
      .forEach((productCategory) => {
        productCategory.textContent === e
          ? (productCategory.parentElement.style.display = 'flex')
          : (productCategory.parentElement.style.display = 'none');
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <Container>
        <div className="group">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          <input
            placeholder={t('search')}
            type="search"
            className="input"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <CategoryCarousel handleCategories={handleCategories} />
      </Container>

      {filteredProduct.length ? (
        <div className="products" id="products">
          {filteredProduct.map(
            (product) =>
              product.isActive === 'on' && (
                <Product product={product} key={product.id} />
              )
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default ProductList;
