import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "../context/CartContext"; // Import the cart context

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // Access addToCart function from context
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  // Sample product data (Replace with real data fetching logic)
  const product = {
    id: id,
    name: "Blue And Black Panelled Collared T-Shirt",
    sku: "MT2301L-SM1-BBL",
    originalPrice: 1990,
    discountPrice: 995,
    image: "https://yourimageurl.com/product.jpg",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Elevate your casual wardrobe with our Men's Blue and Black Collared T-Shirt. The panelled design adds a modern touch to the classic collared t-shirt.",
    careInstructions: [
      "Machine or hand wash at up to 30°C/86°F.",
      "Do not iron directly on prints/embroidery.",
      "Avoid drying in direct sunlight.",
      "Use a gentle cycle.",
    ],
  };

  // Handle "Add to Cart" functionality
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountPrice,
      image: product.image,
      size,
      quantity,
    });
  };

  // Handle "Buy Now" functionality
  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.discountPrice,
      image: product.image,
      size,
      quantity,
    });
    navigate("/checkout");
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Image */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-gray-600">SKU: {product.sku}</p>

        {/* Price Section */}
        <div className="mt-2">
          <span className="text-lg text-gray-500 line-through">
            Rs.{product.originalPrice}
          </span>
          <span className="text-xl font-bold text-red-600 ml-2">
            Rs.{product.discountPrice}
          </span>
        </div>

        {/* Size Selection */}
        <div className="mt-4">
          <p className="font-semibold">Size:</p>
          <div className="flex gap-2 mt-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                className={`px-4 py-2 border rounded-md ${
                  size === s ? "bg-black text-white" : "bg-gray-200"
                }`}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center gap-4">
          <p className="font-semibold">Quantity:</p>
          <div className="flex items-center border rounded-md">
            <button
              className="p-2"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              <FaMinus />
            </button>
            <span className="px-4">{quantity}</span>
            <button className="p-2" onClick={() => setQuantity(quantity + 1)}>
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            className="bg-black text-white px-6 py-3 rounded-md"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-md"
            onClick={handleBuyNow}
          >
            Buy It Now
          </button>
        </div>

        {/* Product Description */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Product Description</h2>
          <p className="text-gray-700 mt-2">{product.description}</p>
        </div>

        {/* Care Instructions */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Care Instructions</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {product.careInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
