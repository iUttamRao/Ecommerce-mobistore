import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, addToWishlist, setProduct } from '../../redux/reducer/ecomReducer';
import { PRODUCT } from '../../router/keys';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product, search }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        alert("Item Added to cart")
    };

    const handleAddToWishlist = (product) => {
        dispatch(addToWishlist(product))
        alert("Item Added to wishlist")
    };

    const handleProduct =(product) =>{
        dispatch(setProduct(product));
        navigate(PRODUCT);
    }

    const isSearchEmpty = search.trim() === '';
    if (isSearchEmpty) {
        return (
            <div className="product-card">
                <Link to={`/product/${product.id}`}><img src={product.images} alt={product.name} onClick={() =>handleProduct(product)} /></Link>
                <h2>{product.name}</h2>
                <p>Price:<b> ${product.price}</b></p>
                <p>{product.briefSpecs}</p>
                <button onClick={()=>handleAddToCart(product)}>
                    Add to Cart
                </button>
                <button onClick={()=>handleAddToWishlist(product)}>
                    <FaHeart />
                </button>
            </div>
        )
    }

    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()); 

    if(!matchesSearch){
        return null;
    }

    return (
        <div className="product-card">
            <img src={product.images} alt={product.name} onClick={() =>handleProduct(product)} />
            <h2>{product.name}</h2>
            <p>Price:<b> ${product.price}</b></p>
            <p>{product.briefSpecs}</p>
            <button onClick={()=>handleAddToCart(product)}>
                Add to Cart
            </button>
            <button onClick={()=>handleAddToWishlist(product)}>
                 <FaHeart />
            </button>
        </div>
    )
}

export default ProductCard