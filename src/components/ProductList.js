import { Container } from 'react-bootstrap';
import CategoryCarousel from './CategoryCarousel';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from './Product';
import Loader from './Loader';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next'; 

function ProductList() {
  // Initialize product as an array
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]); // Create a state for filtered products
  const productsUrl = 'http://127.0.0.1:8000/api/products';

  const { t } = useTranslation();
  
  const fetchProducts = async () => {
    // Fetch data from the API and set it to state
    axios.get(productsUrl).then((res) => {
      const shuffledProducts = res.data
        .sort(() => 0.5 - Math.random()); // Shuffle the products
      setProduct(shuffledProducts); // Set shuffled products
      setFilteredProduct(shuffledProducts); // Initially set filtered products to shuffled products
    });
  };

  const handleSearch = (e) => {
    const searchValue = e.toLowerCase(); // Convert search input to lowercase
    const filtered = product.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    ); // Filter products by name, ensuring case insensitivity
    setFilteredProduct(filtered); // Update the state with filtered products
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
            onChange={(e) => handleSearch(e.target.value)} // Use handleSearch without additional logic here
          />
        </div>
        <CategoryCarousel handleCategories={handleCategories} />
      </Container>

      {filteredProduct.length ? ( // Display the filtered products
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
