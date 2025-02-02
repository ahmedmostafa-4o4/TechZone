import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loader from '../reusableComponents/Loader';
import LoadingPage from '../reusableComponents/LoadingPage';

function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading] = useState(false);
  const { id } = useParams();
  console.log(id);
  const imageUrl = 'http://127.0.0.1:8000/storage';

  const getProduct = async () => {
    const req = await axios.get(`http://127.0.0.1:8000/api/product/${id}`);
    const res = await req.data;
    setProduct(res);
  };

  // const placeOrderPopup = () => {
  //   Swal.fire({
  //     title: 'Place your order',
  //     showClass: {
  //       popup: `animate__animated animate__fadeInUp animate__faster`
  //     },
  //     hideClass: {
  //       popup: `animate__animated animate__fadeOutDown animate__faster`
  //     },
  //     html: `
  //       <input type="text" id="client_name" class="swal2-input" placeholder="Your Name">
  //       <input type="text" id="phone" class="swal2-input" placeholder="Phone Number">
  //       <input type="number" id="quantity" class="swal2-input" placeholder="Quantity" min="1">
  //       <textarea id="message" class="swal2-textarea" placeholder="Message"></textarea>
  //     `,
  //     focusConfirm: false,
  //     showCancelButton: true,
  //     confirmButtonText: 'Place',
  //     preConfirm: () => {
  //       const client_name = document.getElementById('client_name').value;
  //       const phone = document.getElementById('phone').value;
  //       const quantity = document.getElementById('quantity').value;
  //       const message = document.getElementById('message').value;

  //       if (!client_name || !phone || !quantity || !message) {
  //         Swal.showValidationMessage('Please fill in all fields');
  //         return false;
  //       }

  //       return {
  //         client_name: client_name,
  //         phone: phone,
  //         quantity: +quantity,
  //         message: message
  //       };
  //     }
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       const totalPrice = (+product.price * result.value.quantity).toFixed(1);
  //       setLoading(true);
  //       axios
  //         .post(
  //           'http://127.0.0.1:8000/api/place-order',
  //           {
  //             client_name: result.value.client_name,
  //             phone_number: result.value.phone,
  //             product_name: product.name,
  //             quantity: result.value.quantity,
  //             price: product.price,
  //             total_price: totalPrice,
  //             message: result.value.message
  //           },
  //           {
  //             headers: {
  //               Accept: 'application/json',
  //               'Content-Type': 'application/json'
  //             }
  //           }
  //         )
  //         .then(({ data }) => {
  //           setLoading(false);
  //           Swal.fire({
  //             title: 'Success!',
  //             text: `Product: ${product.name} | Quantity: ${result.value.quantity} | Total: ${totalPrice} EG`,
  //             icon: 'success'
  //           });
  //           console.log('Response from server:', data.message);
  //         })
  //         .catch((error) => {
  //           setLoading(false);
  //           Swal.fire({
  //             title: 'Error!',
  //             text: `There was an issue placing your order. Please try again later.`,
  //             icon: 'error'
  //           });
  //         });
  //     }
  //   });
  // };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="product-page">
        {product ? (
          <Container>
            <div className="product-image">
              <img src={`${imageUrl}/${product.image}`} alt="" />
            </div>
            <div className="product-detailes">
              <p className="category">{product.category}</p>
              <p className="product-name">{product.name}</p>
              <p className="description">{product.description}</p>
              <p className="price">{product.price} EGP</p>
              <button>
                {' '}
                <a href={product.url} style={{ color: 'white' }}>
                  Place Now
                </a>{' '}
              </button>
            </div>
          </Container>
        ) : (
          <Loader />
        )}
      </div>
      {loading && <LoadingPage />}
    </>
  );
}

export default ProductPage;
