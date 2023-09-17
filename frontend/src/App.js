import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Product from "./components/products/Product";
import AddProduct from "./components/products/AddProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Profile from "./components/profile/Profile";
import Sign from "./components/SignUp/Sign";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Product />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/signup" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
