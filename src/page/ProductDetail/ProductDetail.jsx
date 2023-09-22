import React from 'react'
import "./productDetail.css"
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../../component'
import { FaHeart } from 'react-icons/fa'
import { addToCart, addToWishlist } from '../../redux/reducer/ecomReducer'

const ProductDetail = () => {
    const {product} = useSelector(state=> state.ecom);
    const dispatch = useDispatch();
    const splitSpecs = product.briefSpecs.split(", ")

    const handleAddToCart = (product) => {
      dispatch(addToCart(product))
      alert("Item Added to cart")
  };

  const handleAddToWishlist = (product) => {
      dispatch(addToWishlist(product))
      alert("Item Added to wishlist")
  };
  return (
    <>
    <Navbar />
    <div className="mobiledetail-container">
      <div className="mobiledetail-image">
        <img src={product.images} alt="Mobile" />
      </div>
      <div className="mobiledetail-details">
      <h2>{product.name}</h2>
      <p className="mobiledetail-brand">Brand: {product.brand}</p>
      <p className="mobiledetail-price">Price: ${product.price}</p>
      <button style={{marginRight:"5px"}}onClick={()=>handleAddToCart(product)}>
        Add to Cart
      </button>
      <button onClick={()=>handleAddToWishlist(product)}>
        <FaHeart />
      </button>
      <div className="mobiledetail-brief-specs">
        <h3>Brief Specifications:</h3>
        <ul>
          <li>Screen Size/Type: {splitSpecs[0]}</li>
          <li>Processor: {splitSpecs[1]}</li>
          <li>Storage: {splitSpecs[2]}</li>
          <li>Camera: {splitSpecs[3]}</li>
        </ul>
      </div>
      <div className="mobiledetail-reviews">
        <h3>Reviews:</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, perspiciatis laudantium repellendus beatae quo modi eligendi ad reiciendis voluptatum ex earum itaque architecto quia eum commodi unde accusantium blanditiis officiis!</p>
        <h3>Rating:</h3>
        <p>❤️ ❤️ ❤️ (3/5)  </p>
      </div>
    </div>
    </div>
    </>
  )
}

export default ProductDetail