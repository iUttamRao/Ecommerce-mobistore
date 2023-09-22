import React from 'react'
import "./wishlist.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearWishlist, removeFromWishlist } from '../../redux/reducer/ecomReducer'
import Navbar from '../../component/Navbar/Navbar'

const Wishlist = () => {
  const {wishlist} = useSelector(state => state.ecom)
  const dispatch = useDispatch()
  const handleRemoveFromWishlist = (product) =>{
    dispatch(removeFromWishlist(product))
  }

  const handleClearWishlist = () =>{
      dispatch(clearWishlist())
  }
  return (
    <>
    <Navbar />
    <div className='wishlist-container'>
      <h2>WishList</h2>
      {wishlist.length === 0 ? (
        <div className="wishlist-empty">
        <p>Your Wishlist is currently empty</p>
        <div className="start-shopping">
          <Link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
            <span>Start Shopping</span>
          </Link>
        </div>
      </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
          </div>
          <div className="wishlist-items">
            {wishlist &&
              wishlist.map((wishlistItem) => (
                <div className="wishlist-item" key={wishlistItem.id}>
                  <div className="wishlist-product">
                    <img src={wishlistItem.images} alt={wishlistItem.name} />
                    <div>
                      <h3>{wishlistItem.name}</h3>
                      <p>{wishlistItem.briefSpecs}</p>
                      <button onClick={() => handleRemoveFromWishlist(wishlistItem)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="wishlist-product-price">${wishlistItem.price}</div>
                </div>
              ))}
          </div>
          <div className="wishlist-summary">
            <button className="clear-btn" onClick={() => handleClearWishlist()}>
              Clear
            </button>
            <div className="wishlist-checkout">
              <div className="continue-shopping">
                <Link to="/home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div></>
  )
}

export default Wishlist