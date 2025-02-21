import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [orderComplete, setOrderComplete] = useState(false);
  const [error, setError] = useState("");

  const handleOrderComplete = (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      setError("Please select a payment method.");
      return;
    }

    if (
      (paymentMethod === "easypaisa" ||
        paymentMethod === "jazzcash" ||
        paymentMethod === "bank") &&
      !transactionId
    ) {
      setError("Please enter a valid transaction ID.");
      return;
    }

    setError("");
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Order Successful!
          </h2>
          <p className="text-gray-700">
            Thank you for your purchase. Your order has been completed
            successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-primary text-center border-b-2 border-secondary pb-2 flex items-center justify-center">
          <FaCreditCard className="mr-3 text-secondary" /> Checkout
        </h2>
        <form onSubmit={handleOrderComplete} className="mt-8">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-gray-500" />
              <input
                type="text"
                placeholder="First name"
                required
                className="pl-10 px-4 py-3 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
              />
            </div>
            <div className="relative">
              <FaUser className="absolute left-3 top-4 text-gray-500" />
              <input
                type="text"
                placeholder="Last name"
                required
                className="pl-10 px-4 py-3 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-500" />
              <input
                type="email"
                placeholder="Email address"
                required
                className="pl-10 px-4 py-3 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-3 top-4 text-gray-500" />
              <input
                type="number"
                placeholder="Phone number"
                required
                className="pl-10 px-4 py-3 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
              />
            </div>
          </div>

          {/* Address Info */}
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-500" />
              <input
                type="text"
                placeholder="Street address"
                required
                className="pl-10 px-4 py-3 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="City"
              required
              className="px-4 py-3 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="State"
              required
              className="px-4 py-3 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
            />
            <input
              type="number"
              placeholder="Zip Code"
              required
              className="px-4 py-3 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
            />
          </div>

          {/* Payment Methods */}
          <h3 className="text-xl font-semibold text-primary mt-8">
            Payment Method
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 mt-4">
            {["easypaisa", "jazzcash", "bank", "cod"].map((method) => (
              <label
                key={method}
                className="flex items-center cursor-pointer bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-5 h-5 accent-accent"
                />
                <span className="ml-2 text-gray-800 capitalize">{method}</span>
              </label>
            ))}
          </div>

          {/* Transaction ID for Certain Payment Methods */}
          {(paymentMethod === "easypaisa" ||
            paymentMethod === "jazzcash" ||
            paymentMethod === "bank") && (
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 font-semibold">Owner: 0305xxxxx</p>
              <p className="text-gray-800 font-semibold">
                Account Title: Alixxxxxxxxxxxxxx
              </p>
              <input
                type="text"
                placeholder="Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none mt-2"
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-500 mt-4 text-sm font-semibold flex items-center">
              <FaExclamationCircle className="mr-2" /> {error}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              className="px-6 py-3 bg-transparent border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              Pay later
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-green-700 transition-colors flex items-center"
            >
              <FaCheckCircle className="mr-2" /> Pay now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

// import React, { useState } from "react";

// let Checkout = () => {
//   let [paymentMethod, setPaymentMethod] = useState("");
//   let [transactionId, setTransactionId] = useState("");
//   let [orderComplete, setOrderComplete] = useState(false);
//   let [error, setError] = useState("");

//   let handleOrderComplete = (e) => {
//     e.preventDefault();

//     if (!paymentMethod) {
//       setError("Please select a payment method.");
//       return;
//     }

//     if (
//       (paymentMethod === "easypaisa" ||
//         paymentMethod === "jazzcash" ||
//         paymentMethod === "bank") &&
//       !transactionId
//     ) {
//       setError("Please enter a valid transaction ID.");
//       return;
//     }

//     setError("");
//     setOrderComplete(true);
//   };

//   if (orderComplete) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
//           <h2 className="text-3xl font-bold text-green-600 mb-4">
//             Order Successful!
//           </h2>
//           <p className="text-gray-700">
//             Thank you for your purchase. Your order has been completed
//             successfully.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
//         <h2 className="text-3xl font-bold text-primary text-center border-b-2 border-secondary pb-2">
//           Checkout
//         </h2>
//         <form onSubmit={handleOrderComplete} className="mt-8">
//           <div className="grid sm:grid-cols-2 gap-6">
//             <input
//               type="text"
//               placeholder="First name"
//               required
//               className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
//             />
//             <input
//               type="text"
//               placeholder="Last name"
//               required
//               className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
//             />
//             <input
//               type="email"
//               placeholder="Email address"
//               required
//               className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
//             />
//             <input
//               type="number"
//               placeholder="Phone number"
//               required
//               className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
//             />
//           </div>

//           <div className="grid sm:grid-cols-2 gap-6 mt-6">
//             <input
//               type="text"
//               placeholder="Street address"
//               required
//               className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
//             />
//             <input
//               type="text"
//               placeholder="City"
//               required
//               className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
//             />
//             <input
//               type="text"
//               placeholder="State"
//               required
//               className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
//             />
//             <input
//               type="number"
//               placeholder="Zip Code"
//               required
//               className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none transition-colors"
//             />
//           </div>

//           <h3 className="text-xl font-semibold text-primary mt-8">
//             Payment Method
//           </h3>
//           <div className="grid gap-4 sm:grid-cols-2 mt-4">
//             <label className="flex items-center cursor-pointer bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
//               <input
//                 type="radio"
//                 name="payment"
//                 value="easypaisa"
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="w-5 h-5 accent-accent"
//               />
//               <span className="ml-2 text-gray-800">EasyPaisa</span>
//             </label>
//             <label className="flex items-center cursor-pointer bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
//               <input
//                 type="radio"
//                 name="payment"
//                 value="jazzcash"
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="w-5 h-5 accent-accent"
//               />
//               <span className="ml-2 text-gray-800">JazzCash</span>
//             </label>
//             <label className="flex items-center cursor-pointer bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
//               <input
//                 type="radio"
//                 name="payment"
//                 value="bank"
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="w-5 h-5 accent-accent"
//               />
//               <span className="ml-2 text-gray-800">Bank Transfer</span>
//             </label>
//             <label className="flex items-center cursor-pointer bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
//               <input
//                 type="radio"
//                 name="payment"
//                 value="cod"
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className="w-5 h-5 accent-accent"
//               />
//               <span className="ml-2 text-gray-800">Cash on Delivery</span>
//             </label>
//           </div>

//           {(paymentMethod === "easypaisa" ||
//             paymentMethod === "jazzcash" ||
//             paymentMethod === "bank") && (
//             <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//               <p className="text-gray-800 font-semibold">Owner: 0305xxxxx</p>
//               <p className="text-gray-800 font-semibold">
//                 Account Title: Alixxxxxxxxxxxxxx
//               </p>
//               <input
//                 type="text"
//                 placeholder="Transaction ID"
//                 value={transactionId}
//                 onChange={(e) => setTransactionId(e.target.value)}
//                 className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 border-gray-200 rounded-lg focus:border-accent outline-none mt-2"
//               />
//             </div>
//           )}

//           {error && (
//             <p className="text-red-500 mt-4 text-sm font-semibold">{error}</p>
//           )}

//           <div className="flex justify-end gap-4 mt-8">
//             <button
//               type="button"
//               className="px-6 py-3 bg-transparent border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors"
//             >
//               Pay later
//             </button>
//             <button
//               type="submit"
//               className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-green-700 transition-colors"
//             >
//               Pay now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
// //
