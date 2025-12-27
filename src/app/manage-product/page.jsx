"use client";
import React, { useState, useEffect, useMemo } from 'react';
import ManagePCard from '@/components/ManagePCard';
import { FaSearch, FaSortAmountDown, FaSortAmountUp, FaFilter } from 'react-icons/fa';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://asset-verse-backend.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleDeleteFromUI = (_id) => {
    setProducts(prev => prev.filter(product => product._id !== _id));
  };

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
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>

        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-700 via-purple-600 to-blue-700 bg-clip-text text-transparent pb-2'>
            Product Catalog
          </h1>
          <p className='mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed'>
            Seamlessly manage your inventory. Filter, sort, and organize your products with ease.
          </p>
        </div>

        {/* Controls Bar */}
        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-10 flex flex-col md:flex-row gap-4 justify-between items-center sticky top-4 z-20 backdrop-blur-3xl bg-white/90 supports-[backdrop-filter]:bg-white/60'>

          {/* Search */}
          <div className='relative w-full md:w-96'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <FaSearch className='text-gray-400' />
            </div>
            <input
              type="search"
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 sm:text-sm shadow-sm"
              placeholder="Search products by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Sort & Filter Results */}
          <div className='flex items-center gap-4 w-full md:w-auto'>
            <div className="relative group w-full md:w-48">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl leading-5 bg-gray-50 text-gray-700 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer sm:text-sm shadow-sm transition-all"
              >
                <option value="">Sort By...</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                {sortOrder === 'low-high' ? <FaSortAmountUp /> : sortOrder === 'high-low' ? <FaSortAmountDown /> : <span className="text-xs">▼</span>}
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div>
          <div className='flex justify-between items-center mb-6 px-2'>
            <h2 className='text-xl font-bold text-gray-800 flex items-center gap-2'>
              All Products
              <span className='px-3 py-1 bg-blue-100 text-blue-700 text-xs font-extrabold rounded-full'>
                {displayedProducts.length}
              </span>
            </h2>
          </div>

          {!loading && displayedProducts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
            </div>
          )}

          <div className='w-full overflow-x-auto rounded-3xl border border-gray-200 shadow-sm bg-white'>
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="flex bg-gray-50 p-4 font-bold text-gray-500 text-sm uppercase tracking-wider border-b border-gray-200">
                <div className="w-16 text-center">#</div>
                <div className="flex-1">Product Details</div>
                <div className="w-32">Price</div>
                <div className="w-40 text-center">Actions</div>
              </div>

              {/* List Body */}
              <div className="flex flex-col">
                {loading ? (
                  // Skeleton Rows
                  [...Array(5)].map((_, i) => (
                    <div key={i} className="animate-pulse flex items-center p-4 border-b border-gray-100 last:border-0 h-24">
                      <div className="w-16 bg-gray-200 h-6 rounded mx-2"></div>
                      <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  displayedProducts.map((product, index) => (
                    <ManagePCard
                      key={product._id}
                      product={product}
                      index={index}
                      onDelete={handleDeleteFromUI}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
