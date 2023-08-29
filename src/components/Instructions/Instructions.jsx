import "./Instructions.css";
import {BsArrowLeft} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const food = JSON.parse(localStorage.getItem("food"))

export const Instructions = ({ product = food }) => {
  const navigate = useNavigate();
  console.log(product);

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn) {
      navigate("/instructions");
    } else {
      alert("PLease login first");
      navigate("/login");
    }
  }, []);

  const back = ( ) => {
    navigate('/products')
  }

  return (
    <div className="container p-0">
      <BsArrowLeft onClick={back}  className="back-icon" />
      <img
        alt={product.strMeal}
        src={product.strMealThumb}
        style={{
          height: 200,
        }}
        top
        width="100%"
      />
      <div className="info">
        <h1>{product.strMeal}</h1>

        <p className="text-muted">{product.strCategory}</p>

        <p>{product.strInstructions}</p>
      </div>
    </div>
  );
};
