import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import ShopNow from "./Pages/ShopNow";
import ShoppingCart from "./pages/ShoppingCart";
import OrderHistory from "./pages/OrderHistory";
import CheckOut from "./pages/CheckOut";
import ProductDetails from "./Pages/ProductDetails";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard";
import AdminCategories from "./pages/AdminCategoriesPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminProductsPage from "./pages/AdminProductsPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import StoreLocator from "./Pages/StoreLocator";
import TrackYourOrder from "./Pages/TrackYourOrder";
import ReplacementPolicy from "./Pages/ReplacementPolicy";

import Shipping from "./Pages/Shipping";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    // <Router>
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="categories" element={<AdminCategories />} />
        <Route path="orders" element={<AdminOrdersPage />} />
        <Route path="products" element={<AdminProductsPage />} />
      </Route>
      {/* Customer Routes (Under MainLayout) */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privay-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="store-locator" element={<StoreLocator />} />
        <Route path="track-order" element={<TrackYourOrder />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="replacement-policy" element={<ReplacementPolicy />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="shop" element={<ShopNow />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="order-history" element={<OrderHistory />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
    // </Router>
  );
}

export default App;
