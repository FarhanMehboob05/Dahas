import React from "react";

const OrderHistory = () => {
  let orders = [
    {
      id: "12345",
      date: "2023-10-15",
      status: "Delivered",
      items: [
        { name: "Product A", quantity: 2, price: 25 },
        { name: "Product B", quantity: 1, price: 50 },
      ],
      total: 100,
    },
    {
      id: "67890",
      date: "2023-10-10",
      status: "Cancelled",
      items: [{ name: "Product C", quantity: 3, price: 15 }],
      total: 45,
    },
    {
      id: "54321",
      date: "2023-10-05",
      status: "Processing",
      items: [
        { name: "Product D", quantity: 1, price: 75 },
        { name: "Product E", quantity: 2, price: 30 },
      ],
      total: 135,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary border-b-2 border-secondary pb-2 mb-8">
          Order History
        </h2>
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Order # {order.id}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-800"
                      : order.status === "Cancelled"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Ordered on: {order.date}
              </p>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-100 pb-2"
                  >
                    <p className="text-gray-800">{item.name}</p>
                    <p className="text-gray-600">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-600">Total:</p>
                <p className="text-lg font-semibold text-primary">
                  ${order.total.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
