import React from 'react';
import { Star, Clock, TrendingUp, Gift, ChevronRight, ShoppingCart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome to Bazario</h1>
            <p className="text-xl mb-8">Discover unique products from trusted vendors worldwide. Your one-stop destination for quality shopping.</p>
            <button className=" px-8 py-4 rounded-lg text-lg font-semibold transition duration-300 text-white bg-blue-500 hover:bg-blue-600  " >
              Start Shopping
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-lg border border-gray-100 shadow-sm">
              <Star className="w-10 h-10 text-yellow-500" />
              <div>
                <h3 className="font-semibold">Quality Products</h3>
                <p className="text-gray-600">Curated by top vendors</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg border border-gray-100 shadow-sm">
              <Clock className="w-10 h-10 text-blue-500" />
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-gray-600">Within 24-48 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg border border-gray-100 shadow-sm">
              <TrendingUp className="w-10 h-10 text-green-500" />
              <div>
                <h3 className="font-semibold">Best Deals</h3>
                <p className="text-gray-600">Competitive prices</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg border border-gray-100 shadow-sm">
              <Gift className="w-10 h-10 text-purple-500" />
              <div>
                <h3 className="font-semibold">Rewards</h3>
                <p className="text-gray-600">Earn while shopping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Popular Categories</h2>
            <button className=" flex items-center gap-1 " style={{
                  background: 'linear-gradient(to right, #FF6B6B, #4ECDC4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-6 gap-4">
            {[
              { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format&fit=crop&q=60" },
              { name: "Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format&fit=crop&q=60" },
              { name: "Home", image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&auto=format&fit=crop&q=60" },
              { name: "Beauty", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&auto=format&fit=crop&q=60" },
              { name: "Sports", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&auto=format&fit=crop&q=60" },
              { name: "Books", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format&fit=crop&q=60" }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-40 rounded-lg overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition duration-300" />
                  <h3 className="absolute bottom-4 left-4 text-white font-semibold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <button className="text-blue-600 flex items-center gap-1 hover:text-blue-700">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
              { name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
              { name: "Camera Lens", price: 299.99, image: "https://th.bing.com/th/id/OIP.S3T9nuRpKbixcnzJmwJ26wHaE7?rs=1&pid=ImgDetMain" },
              { name: "Leather Bag", price: 149.99, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&auto=format&fit=crop&q=60" }
            ].map((product, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition duration-300">
                    <ShoppingCart className="w-5 h-5 text-blue-600" />
                  </button>
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-600 font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=2070&auto=format&fit=crop&q=60" 
                alt="Special Offer 1" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Summer Collection</h3>
                <p className="mb-4">Up to 50% off on selected items</p>
                <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60" 
                alt="Special Offer 2" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Tech Gadgets</h3>
                <p className="mb-4">Latest arrivals with special prices</p>
                <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}