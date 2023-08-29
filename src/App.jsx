import "./App.css";
import { Contact } from "./components/Contact/Contact";
import { Instructions } from "./components/Instructions/Instructions";
import { Login } from "./components/Login/Login";
import { Navigation } from "./components/Navigation/Navigation";
import { NoteFoundPage } from "./components/NotFoundPage/NoteFoundPage";
import { Products } from "./components/Products/Products";
import { Homepage } from "./components/Homapage/Homepage";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const url = `https://themealdb.com/api/json/v1/1/search.php?f=a`;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("a");
  const [switchedOff, setSwitchedOff] = useState(false);
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const fetchProducts = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Bad request");
      const data = await res.json();
      setProducts(data.meals);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePass = (obj) => {
    setProduct(obj);
    localStorage.setItem('food', JSON.stringify(obj))
  };

  const handleClick = () => {
    const url = `https://themealdb.com/api/json/v1/1/search.php?f=${query.slice(
      0,
      1
    )}`;
    fetchProducts(url);
  };

  const productProp = {
    query,
    products,
    loading,
    handlePass,
  };

  const navigationProp = {
    query,
    setQuery,
    handleClick,
    setSwitchedOff,
    switchedOff,
  };

  return (
    <div className={`${switchedOff ? "App-dark" : "App"} `}>
      <Navigation {...navigationProp} />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products" element={<Products {...productProp} />}></Route>
        <Route
          path="/instructions"
          element={<Instructions product={product} />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NoteFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
