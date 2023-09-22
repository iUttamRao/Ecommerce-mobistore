import React, { useState } from 'react';
import './products.css';
import ProductCard from '../ProductCard/ProductCard';
import productData from '../../utilities/placeholder/productData';

const Products = () => {
  const shuffledProducts = [...productData].sort(() => Math.random() - 0.5);
  const [search, setSearch] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);

  const uniqueBrands = [...new Set(productData.map(product => product.brand))].filter(Boolean);

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prevSelectedBrands => {
      if (prevSelectedBrands.includes(brand)) {
        return prevSelectedBrands.filter(b => b !== brand);
      } else {
        return [...prevSelectedBrands, brand];
      }
    });
  };

  const filteredProducts = shuffledProducts.filter((product) => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesSearch = search === '' || product.name.toLowerCase().includes(search.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <>
      <div className='search-input'>
        <input
          type="text"
          placeholder='Search Products'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='brand-filter'>
        <span>Filter by Brand:</span>
        {uniqueBrands.map((brand) => (
          <label key={brand} className="brand-checkbox">
            <input
              type="checkbox"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandToggle(brand)}
            />
            {brand}
          </label>
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} search={search} />
        ))}
      </div>
    </>
  );
}

export default Products;
