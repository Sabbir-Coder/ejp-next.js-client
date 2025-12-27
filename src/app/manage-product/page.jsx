"use client"; // Make it a client component
import React, { useState, useEffect, useMemo } from 'react';
import ManagePCard from '@/components/ManagePCard';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // '' | 'low-high' | 'high-low'

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const handleDeleteFromUI = (_id) => {
    setProducts(prev => prev.filter(product => product._id !== _id));
  };

  // Filtered and sorted products
  const displayedProducts = useMemo(() => {
    let filtered = products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === 'low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, searchTerm, sortOrder]);

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-5xl font-bold mt-4 bg-linear-to-r from-purple-900 via-blue-500 to-green-100 bg-clip-text text-transparent text-center py-5'>
        Manage Products
      </h1>
      <p className='text-center md:w-2/3 mt-3 text-gray-600 mx-auto'>
        Manage Your Entire Product Catalog Effortlessly — View, Edit, and Keep Track of Every Item in One Place.
      </p>

      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mt-14'>

        <label className="input border border-gray-300 bg-white flex items-center gap-2 grow md:grow-0">
          <svg className="h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow rounded px-2 py-1"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>


        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select bg-white border border-gray-300 rounded px-2 py-1"
        >
          <option value="">Sort By Price</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      <div className='my-10'>
        <p className='mb-4 font-semibold'>Total Products: {displayedProducts.length}</p>
        {displayedProducts.map((product, index) => (
          <ManagePCard
            key={product._id}
            product={product}
            index={index}
            onDelete={handleDeleteFromUI}
          />
        ))}
      </div>
    </div>
  );
}
