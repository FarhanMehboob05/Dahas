import React, { useState } from "react";

const Carousel = () => {
  const items = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a description for Product 1.",
      price: "$10",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a description for Product 2.",
      price: "$20",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a description for Product 3.",
      price: "$30",
      category: "Accessories",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is a description for Product 4.",
      price: "$40",
      category: "Home",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Product 5",
      description: "This is a description for Product 5.",
      price: "$50",
      category: "Sports",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Product 6",
      description: "This is a description for Product 6.",
      price: "$60",
      category: "Toys",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [addedToCart, setAddedToCart] = useState({}); // Track button state for each item

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setAddedToCart((prevState) => ({
      ...prevState,
      [item.id]: "Added",
    }));

    setTimeout(() => {
      setAddedToCart((prevState) => ({
        ...prevState,
        [item.id]: "Add to Cart",
      }));
    }, 2000);
  };

  return (
    <div className="relative p-8 bg-gray-50">
      {/* Top Seller Header */}
      <h2 className="text-center text-3xl font-bold text-primary mb-8">
        Top Seller Products
      </h2>

      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
            >
              <div className="bg-white h-full flex flex-col items-center p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full border h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="font-bold text-lg text-primary">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.category}</p>
                <p className="text-md text-gray-700 mb-4 text-center">
                  {item.description}
                </p>
                <p className="text-lg font-semibold text-secondary">
                  {item.price}
                </p>
                <button
                  className="mt-4 bg-accent text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                  onClick={() => addToCart(item)}
                >
                  {addedToCart[item.id] || "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-black transition-colors"
        onClick={prevSlide}
      >
        &#60;
      </button>
      <button
        className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-black transition-colors"
        onClick={nextSlide}
      >
        &#62;
      </button>
    </div>
  );
};

export default Carousel;
