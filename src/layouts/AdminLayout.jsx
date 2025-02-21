import { Outlet, NavLink } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
        <nav>
          <ul>
            <li className="py-2 hover:bg-gray-200 px-3 rounded">
              <NavLink to="/admin/dashboard" className="block">
                Dashboard
              </NavLink>
            </li>
            <li className="py-2 hover:bg-gray-200 px-3 rounded">
              <NavLink to="/admin/orders" className="block">
                Orders
              </NavLink>
            </li>
            <li className="py-2 hover:bg-gray-200 px-3 rounded">
              <NavLink to="/admin/products" className="block">
                Products
              </NavLink>
            </li>
            <li className="py-2 hover:bg-gray-200 px-3 rounded">
              <NavLink to="/admin/categories" className="block">
                Categories
              </NavLink>
            </li>
            <li className="py-2 hover:bg-gray-200 px-3 rounded">
              <NavLink to="/admin/sub-categories" className="block">
                Sub-Categories
              </NavLink>
            </li>
            <li className="py-2 hover:bg-gray-200 px-3 rounded">
              <NavLink to="/admin/transactions" className="block">
                Transactions
              </NavLink>
            </li>
            <li className="py-2 hover:bg-gray-200 px-3 rounded">
              <NavLink to="/admin/settings" className="block">
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4">
          <NavLink to="/admin/dashboard">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </NavLink>
        </header>

        {/* Page Content */}
        <div className="p-5 border border-red-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
