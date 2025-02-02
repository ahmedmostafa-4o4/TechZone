import { useNavigate } from 'react-router-dom';
function Product(props) {
  const navigate = useNavigate();
  const { product } = props;
  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    }
    return str;
  };

  const imageUrl = 'http://127.0.0.1:8000/storage';

  //   const StarRating = (rating) => {
  //     // Round rating to the nearest 0.5
  //     const roundedRating = Math.round(rating * 2) / 2;
  //     const stars = [];

  //     // Generate stars based on roundedRating
  //     for (let i = 1; i <= 5; i++) {
  //       if (i <= roundedRating) {
  //         stars.push(<FontAwesomeIcon icon={faStar} />);
  //       } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
  //         stars.push(<FontAwesomeIcon icon={faStarHalf} />);
  //       } else {
  //         stars.push(<FontAwesomeIcon icon={regularStar} />);
  //       }
  //     }
  //     console.log(rating);
  //     return stars;
  //   };

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="category">{product.category}</div>
      <div className="product-img">
        <img src={`${imageUrl}/${product.image}`} alt="" />
      </div>

      <div className="product-content">
        <h4 className="product-name">{truncateString(product.name, 40)}</h4>
        {/* <div className="reviews">{StarRating(++product.rating.rate)}</div> */}
        <span className="product-price">{product.price} EG</span>
      </div>
    </div>
  );
}
export default Product;
