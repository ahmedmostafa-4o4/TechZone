import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from './Product';
import Loader from '../reusableComponents/Loader';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const productsUrl = 'http://127.0.0.1:8000/api/products';
  const maxProductsToShow = 10;

  const { t } = useTranslation();

  const fetchProducts = async () => {
    axios.get(productsUrl).then((res) => {
      setAllProducts(res.data);
      const randomProducts = res.data
        .sort(() => 0.5 - Math.random())
        .slice(0, maxProductsToShow);
      setFilteredProduct(randomProducts);
    });
  };

  const handleSearch = (e) => {
    const searchValue = e.toLowerCase();
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );
    setFilteredProduct(
      filtered.length > 0 ? filtered : allProducts.slice(0, maxProductsToShow)
    );
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-page" style={{ float: 'center' }}>
      <Container>
        <h1 className="headar10">{t('products-page10')}</h1>
        <div className="group">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="icon10" />
          <input
            placeholder={t('search')}
            type="search"
            className="input10"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </Container>

      <div className="products" id="products">
        {filteredProduct
          .slice(0, maxProductsToShow)
          .map(
            (product) =>
              product.isActive === 'on' && (
                <Product product={product} key={product.id} />
              )
          )}
      </div>

      {filteredProduct.length === 0 && <Loader />}
    </div>
  );
}

export default ProductList;
