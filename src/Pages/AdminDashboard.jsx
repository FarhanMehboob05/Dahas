import React from "react";

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Welcome to the Admin Dashboard</h2>
      <p className="mt-2">
        Here you can manage orders, products, categories, and more.
      </p>
    </div>
  );
}

// import React from "react";

// export default function AdminDashboard() {
//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <aside className="w-64 bg-white shadow-md p-5">
//                 <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
//                 <nav>
//                     <ul>
//                         <li className="py-2 hover:bg-gray-200 px-3 rounded">Dashboard</li>
//                         <li className="py-2 hover:bg-gray-200 px-3 rounded">Orders</li>
//                         <li className="py-2 hover:bg-gray-200 px-3 rounded">Products</li>

//                         <li className="py-2 hover:bg-gray-200 px-3 rounded">Categories</li>
//                         <li className="py-2 hover:bg-gray-200 px-3 rounded">Sub-Categories</li>
//                         <li className="py-2 hover:bg-gray-200 px-3 rounded">Transactions</li>
//                         <li className="py-2 hover:bg-gray-200 px-3 rounded">Settings</li>
//                     </ul>
//                 </nav>
//             </aside>

//             {/* Main Content */}
//             <div className="flex-1 flex flex-col">
//                 {/* Navbar */}
//                 <header className="bg-white shadow p-4">
//                     <h1 className="text-xl font-bold">Dashboard</h1>
//                 </header>
//             </div>
//         </div>
//     );
// }
