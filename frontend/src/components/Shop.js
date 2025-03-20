import React, { useState } from 'react';
import { Filter, Search, ChevronDown, Star, Heart, ShoppingCart } from 'lucide-react';

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [sortBy, setSortBy] = useState('popular');

    const categories = ['All', 'Fashion', 'Electronics', 'Home', 'Beauty', 'Sports', 'Books'];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Shop Header */}
            <section className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-4xl font-bold text-white text-center mb-8">Discover Our Products</h1>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-64 space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-semibold mb-4 flex items-center gap-2">
                                <Filter size={20} />
                                Filters
                            </h3>

                            {/* Categories */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-3">Categories</h4>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`block w-full text-left px-2 py-1.5 rounded ${selectedCategory === category
                                                    ? 'bg-[#4ECDC4]/10 text-[#4ECDC4]'
                                                    : 'hover:bg-gray-100'
                                                }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-3">Price Range</h4>
                                <div className="space-y-4">
                                    <input
                                        type="range"
                                        min="0"
                                        max="1000"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                        className="w-full"
                                    />
                                    <div className="flex items-center justify-between">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Ratings */}
                            <div>
                                <h4 className="font-medium mb-3">Ratings</h4>
                                <div className="space-y-2">
                                    {[5, 4, 3, 2, 1].map((rating) => (
                                        <button key={rating} className="flex items-center gap-1 hover:text-[#FF6B6B]">
                                            {Array(rating).fill(null).map((_, i) => (
                                                <Star key={i} size={16} className="fill-current text-yellow-400" />
                                            ))}
                                            {Array(5 - rating).fill(null).map((_, i) => (
                                                <Star key={i} size={16} className="text-gray-300" />
                                            ))}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {/* Sort Bar */}
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
                            <span className="text-gray-600">Showing 24 products</span>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border-0 bg-transparent focus:ring-0"
                                >
                                    <option value="popular">Most Popular</option>
                                    <option value="newest">Newest</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Products */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {Array(9).fill(null).map((_, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm group">
                                    <div className="relative h-64 rounded-t-lg overflow-hidden">
                                        <img
                                            src={`https://images.unsplash.com/photo-${[
                                                '1523275335684-37898b6baf30',
                                                '1505740420928-5e560c06d30e',
                                                '1546868871-7041f2a55e12',
                                                '1590874103328-eac38a683ce7',
                                                '1511499008188-de491bbbae98',
                                                '1542291026-7eec264c27ff',
                                                '1553062407-98eeb64c6a62',
                                                '1595341888016-a392ef81b7de',
                                                '1527864550417-7fd91fc51a46'
                                            ][index]}?w=500&auto=format&fit=crop&q=60`}
                                            alt={`Product ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                        />
                                        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300">
                                            <Heart className="w-5 h-5 text-[#FF6B6B]" />
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-1 mb-2">
                                            {Array(5).fill(null).map((_, i) => (
                                                <Star key={i} size={16} className="fill-current text-yellow-400" />
                                            ))}
                                            <span className="text-sm text-gray-500">(24)</span>
                                        </div>
                                        <h3 className="font-semibold mb-2">Product Name</h3>
                                        <div className="flex items-center justify-between">
                                            <span className="text-[#FF6B6B] font-bold">$99.99</span>
                                            <button className="p-2 rounded-full bg-[#4ECDC4] text-white hover:bg-[#45b8b0] transition duration-300">
                                                <ShoppingCart size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-8 flex justify-center">
                            <div className="flex items-center gap-2">
                                {[1, 2, 3, '...', 10].map((page, index) => (
                                    <button
                                        key={index}
                                        className={`w-10 h-10 flex items-center justify-center rounded-lg ${page === 1
                                                ? 'bg-[#4ECDC4] text-white'
                                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}