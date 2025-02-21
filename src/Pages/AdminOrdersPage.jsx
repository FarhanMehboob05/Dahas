import React, { useState } from "react";

export default function AdminOrderPage() {
    const [orders, setOrders] = useState([
        {
            id: 1,
            customer: "Farhan",
            date: "2023-10-01",
            status: "Pending",
            total: 99.99,
        },
        {
            id: 2,
            customer: "Hamza Khan",
            date: "2023-10-02",
            status: "Shipped",
            total: 149.99,
        },
        {
            id: 3,
            customer: "ZULFI Bukhari",
            date: "2023-10-03",
            status: "Delivered",
            total: 199.99,
        },
    ]);

    // Update order status
    const updateStatus = (id, newStatus) => {
        setOrders(
            orders.map((order) =>
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    return (
        <div className="min-h-screen bg-neutral-100 p-4 sm:p-6">
            {/* Page Header */}
            <header className="mb-6">
                <h1 className="text-2xl sm:text-4xl font-bold text-primary">
                    Admin Order Page
                </h1>
                <p className="text-sm sm:text-base text-secondary">
                    Manage and track customer orders
                </p>
            </header>

            {/* Search and Filters */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search orders..."
                    className="flex-1 p-2 border border-primary rounded"
                />
                <select className="p-2 border border-primary rounded">
                    <option value="">All Statuses</option>
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </div>

            {/* Order Table */}
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full min-w-[600px]">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="p-3 sm:p-4 text-left">Order ID</th>
                            <th className="p-3 sm:p-4 text-left">Customer</th>
                            <th className="p-3 sm:p-4 text-left">Date</th>
                            <th className="p-3 sm:p-4 text-left">Status</th>
                            <th className="p-3 sm:p-4 text-left">Total</th>
                            <th className="p-3 sm:p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-b">
                                <td className="p-3 sm:p-4 text-primary">{order.id}</td>
                                <td className="p-3 sm:p-4 text-primary">{order.customer}</td>
                                <td className="p-3 sm:p-4 text-primary">{order.date}</td>
                                <td className="p-3 sm:p-4">
                                    <select
                                        value={order.status}
                                        onChange={(e) => updateStatus(order.id, e.target.value)}
                                        className={`p-2 rounded text-sm sm:text-base ${order.status === "Pending"
                                                ? "bg-yellow-200 text-yellow-800"
                                                : order.status === "Shipped"
                                                    ? "bg-blue-200 text-blue-800"
                                                    : "bg-green-200 text-green-800"
                                            }`}
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Shipped">Shipped</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                </td>
                                <td className="p-3 sm:p-4 text-secondary">
                                    ${order.total.toFixed(2)}
                                </td>
                                <td className="p-3 sm:p-4">
                                    <button className="bg-accent text-white px-3 py-1 rounded hover:bg-secondary transition-colors text-sm sm:text-base">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}