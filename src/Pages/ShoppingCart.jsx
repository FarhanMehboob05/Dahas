import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"; // Icons

const productsData = [
  {
    id: 1,
    name: "Velvet Sneaker",
    price: 20.0,
    image: "https://readymadeui.com/images/product14.webp",
    size: "XL",
    quantity: 1,
  },
  {
    id: 2,
    name: "Smart Watch Timex",
    price: 120.0,
    image: "https://readymadeui.com/images/watch5.webp",
    size: "XL",
    quantity: 1,
  },
  {
    id: 3,
    name: "Sun Glass",
    price: 50.0,
    image: "https://readymadeui.com/images/sunglass1.webp",
    size: "XL",
    quantity: 1,
  },
];

const CartItem = ({ product, onRemove, onUpdate }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
      onUpdate(product.id, quantity + amount);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg border border-gray-200">
      <div className="flex items-center gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-contain rounded"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>

          {/* Quantity Control */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-secondary text-white px-2 py-1 rounded hover:bg-secondary-dark"
            >
              <FaMinus />
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-secondary text-white px-2 py-1 rounded hover:bg-secondary-dark"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      {/* Remove Button */}
      <div className="flex items-center">
        <h4 className="text-lg font-bold text-gray-800">
          ${(product.price * quantity).toFixed(2)}
        </h4>
        <button
          onClick={() => onRemove(product.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </div>
  );
};

const Summary = ({ subtotal }) => {
  const shipping = 2.0;
  const tax = 4.0;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-primary">Order Summary</h3>
      <ul className="text-gray-800 mt-4 space-y-2">
        <li className="flex justify-between text-lg">
          Subtotal <span className="font-bold">${subtotal.toFixed(2)}</span>
        </li>
        <li className="flex justify-between text-lg">
          Shipping <span className="font-bold">${shipping.toFixed(2)}</span>
        </li>
        <li className="flex justify-between text-lg">
          Tax <span className="font-bold">${tax.toFixed(2)}</span>
        </li>
        <li className="flex justify-between text-xl font-bold text-accent">
          Total <span>${total.toFixed(2)}</span>
        </li>
      </ul>

      <div className="mt-6 space-y-2">
        <NavLink
          to="/checkout"
          className="block text-center bg-accent hover:bg-accent-dark text-white py-3 rounded-lg font-semibold transition-colors"
        >
          Proceed to Checkout
        </NavLink>
        <NavLink
          to="/"
          className="block text-center border border-gray-300 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Continue Shopping
        </NavLink>
      </div>
    </div>
  );
};

const Cart = () => {
  const [products, setProducts] = useState(productsData);

  const removeItem = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setProducts(
      products.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-primary text-center mb-6">
        Your Shopping Cart
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {products.length > 0 ? (
            products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onRemove={removeItem}
                onUpdate={updateQuantity}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>
        <Summary subtotal={subtotal} />
      </div>
    </div>
  );
};

export default Cart;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const productsData = [
//   {
//     id: 1,
//     name: "Velvet Sneaker",
//     price: 20.0,
//     image: "https://readymadeui.com/images/product14.webp",
//     size: "XL",
//     quantity: 1,
//   },
//   {
//     id: 2,
//     name: "Smart Watch Timex",
//     price: 120.0,
//     image: "https://readymadeui.com/images/watch5.webp",
//     size: "XL",
//     quantity: 1,
//   },
//   {
//     id: 3,
//     name: "Sun Glass",
//     price: 50.0,
//     image: "https://readymadeui.com/images/sunglass1.webp",
//     size: "XL",
//     quantity: 1,
//   },
// ];

// const CartItem = ({ product, onRemove, onUpdate }) => {
//   const [size, setSize] = useState(product.size);
//   const [quantity, setQuantity] = useState(product.quantity);
//   const sizes = ["SM", "MD", "XL", "XXL"];

//   const handleQuantityChange = (amount) => {
//     if (quantity + amount > 0) {
//       setQuantity(quantity + amount);
//       onUpdate(product.id, quantity + amount);
//     }
//   };

//   return (
//     <div className="grid grid-cols-3 items-center gap-4">
//       <div className="col-span-2 flex items-center gap-4">
//         <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-contain"
//           />
//         </div>

//         <div>
//           <h3 className="text-base font-bold text-gray-800">{product.name}</h3>
//           <button
//             className="text-xs text-red-500 cursor-pointer mt-0.5"
//             onClick={() => onRemove(product.id)}
//           >
//             Remove
//           </button>

//           <div className="flex gap-4 mt-4">
//             {/* Size Selector */}
//             <div className="relative group">
//               <button className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md">
//                 {size}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-2.5 fill-gray-500 inline ml-2.5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               <ul className="hidden group-hover:block absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]">
//                 {sizes.map((s) => (
//                   <li
//                     key={s}
//                     className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer"
//                     onClick={() => setSize(s)}
//                   >
//                     {s}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Quantity Selector */}
//             <div className="flex items-center border border-gray-300 rounded-md">
//               <button
//                 onClick={() => handleQuantityChange(-1)}
//                 className="px-2 py-1.5"
//               >
//                 -
//               </button>
//               <span className="mx-2">{quantity}</span>
//               <button
//                 onClick={() => handleQuantityChange(1)}
//                 className="px-2 py-1.5"
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="ml-auto">
//         <h4 className="text-base font-bold text-gray-800">
//           ${(product.price * quantity).toFixed(2)}
//         </h4>
//       </div>
//     </div>
//   );
// };

// const Summary = ({ subtotal }) => {
//   const shipping = 2.0;
//   const tax = 4.0;
//   const total = subtotal + shipping + tax;

//   return (
//     <div className="bg-gray-100 rounded-md p-4">
//       <div className="flex border border-blue-600 overflow-hidden rounded-md">
//         <input
//           type="text"
//           placeholder="Promo code"
//           className="w-full bg-white text-gray-600 text-sm px-4 py-2.5 outline-none"
//         />
//         <button className="bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
//           Apply
//         </button>
//       </div>

//       <ul className="text-gray-800 mt-8 space-y-4">
//         <li className="flex flex-wrap gap-4 text-base">
//           Subtotal{" "}
//           <span className="ml-auto font-bold">${subtotal.toFixed(2)}</span>
//         </li>
//         <li className="flex flex-wrap gap-4 text-base">
//           Shipping{" "}
//           <span className="ml-auto font-bold">${shipping.toFixed(2)}</span>
//         </li>
//         <li className="flex flex-wrap gap-4 text-base">
//           Tax <span className="ml-auto font-bold">${tax.toFixed(2)}</span>
//         </li>
//         <li className="flex flex-wrap gap-4 text-base font-bold">
//           Total <span className="ml-auto">${total.toFixed(2)}</span>
//         </li>
//       </ul>

//       <div className="mt-8 space-y-2">
//         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-md font-semibold">
//           <NavLink to="/checkout">Checkout</NavLink>
//         </button>
//         <button className="w-full border border-gray-300 text-gray-800 py-2.5 rounded-md font-semibold">
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// const Cart = () => {
//   const [products, setProducts] = useState(productsData);

//   const removeItem = (id) => {
//     setProducts(products.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//     setProducts(
//       products.map((item) => (item.id === id ? { ...item, quantity } : item))
//     );
//   };

//   const subtotal = products.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="font-sans max-w-4xl mx-auto bg-white py-4">
//       <div className="grid md:grid-cols-3 gap-4">
//         <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
//           <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
//           <hr className="border-gray-300 mt-4 mb-8" />
//           <div className="space-y-4">
//             {products.map((product) => (
//               <CartItem
//                 key={product.id}
//                 product={product}
//                 onRemove={removeItem}
//                 onUpdate={updateQuantity}
//               />
//             ))}
//           </div>
//         </div>
//         <Summary subtotal={subtotal} />
//       </div>
//     </div>
//   );
// };

// export default Cart;
