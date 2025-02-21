import { useState } from "react";
import { FaFilter, FaSort } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const productsData = [
  {
    id: 1,
    name: "Men's Denim Jacket",
    price: 45.0,
    category: "Jackets",
    image: "/images/denim-jacket.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black"],
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 35.0,
    category: "Dresses",
    image: "/images/summer-dress.jpg",
    sizes: ["S", "M", "L"],
    colors: ["Red", "White"],
  },
  {
    id: 3,
    name: "Casual Hoodie",
    price: 50.0,
    category: "Hoodies",
    image: "/images/hoodie.jpg",
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Gray"],
  },
  {
    id: 4,
    name: "Formal Shirt",
    price: 40.0,
    category: "Shirts",
    image: "/images/formal-shirt.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue"],
  },
];

const ShopNow = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [maxPrice, setMaxPrice] = useState(100);
  const [sortOption, setSortOption] = useState("");

  // Filter products by price
  const filterProducts = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    setFilteredProducts(productsData.filter((p) => p.price <= value));
  };

  // Sort products
  const sortProducts = (option) => {
    let sortedProducts = [...filteredProducts];
    if (option === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sortedProducts);
    setSortOption(option);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">
        Shop Now
      </h2>

      {/* Filters & Sorting */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        {/* Price Filter */}
        <div>
          <label className="block font-semibold flex items-center gap-2">
            <FaFilter /> Filter by Price:
          </label>
          <input
            type="range"
            min="20"
            max="100"
            value={maxPrice}
            onChange={filterProducts}
            className="w-full mt-2"
          />
          <span className="block text-gray-700">Up to ${maxPrice}</span>
        </div>

        {/* Sorting Dropdown */}
        <div>
          <label className="block font-semibold flex items-center gap-2">
            <FaSort /> Sort by:
          </label>
          <select
            value={sortOption}
            onChange={(e) => sortProducts(e.target.value)}
            className="border border-gray-300 p-2 rounded-md mt-2"
          >
            <option value="">Select</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <NavLink
            to={`/product/${product.id}`}
            key={product.id}
            className="block bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold text-gray-800 mt-3">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default ShopNow;
