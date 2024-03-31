import About from "./pages/About";
import Help from "./pages/Help";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import SellerServices from "./pages/SellerServices";

import ContactUs from "./pages/ContactUs";
import SellerMenu from "./pages/SellerMenu";
import AddProduct from "./pages/AddProduct";
import MilkSubscription from "./pages/MilkSubscription";
import DairyProducts from "./pages/AddDairyProducts";
import Animal from "./pages/Animal";
import FarmOwners from "./pages/FarmOwners";
import DairyProduct from "./pages/DairyProduct";
import PredictBreedandPrice from "./pages/PredictBreedandPrice";
import ProductDesciption from "./pages/ProductDesciption";
import OtpPage from "./pages/OtpPage";
import ResetPassword from "./pages/ResetPassword";
import { OtpProvider } from "./components/OtpContext";
import ResetOTP from "./pages/ResetOTP";
import AddtoCart from "./pages/AddtoCart";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <OtpProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/otpPage" element={<OtpPage />} />
          <Route path="/resetOtp" element={<ResetOTP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sellerMenu" element={<SellerMenu />} />
          <Route path="/add-animal" element={<AddProduct />} />
          <Route path="/milksubscription" element={<MilkSubscription />} />
          <Route path="/dairy-products" element={<DairyProducts />} />
          <Route path="/my-services" element={<SellerServices />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/farmOwners" element={<FarmOwners />} />
          <Route path="/dairyProducts" element={<DairyProduct />} />
          <Route path="/productDescription" element={<ProductDesciption />} />
          <Route path="/predictBreed" element={<PredictBreedandPrice />} />
        </Routes>
      </OtpProvider>
    </>
  );
}

export default App;