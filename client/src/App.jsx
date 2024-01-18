import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products">
              <Route path=":id" element={<Products />} />
            </Route>
            <Route path="product">
              <Route path=":id" element={<Product />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
