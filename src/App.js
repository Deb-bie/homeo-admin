import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/dashboard";
import Products from "./pages/products"
import New from "./pages/new"

import "./components/style/style.scss"
import UpdateProduct from "./pages/updateProduct/updateProduct";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard /> } />
          <Route path="/products" element={<Products />} />
          <Route  path="products/new" element={<New />  }   />
          <Route  path="products/:id" element={<UpdateProduct />  }   />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
