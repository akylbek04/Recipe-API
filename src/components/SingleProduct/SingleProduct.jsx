import "./SingleProduct.css";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

export const SingleProduct = ({
  strMealThumb,
  strMeal,
  strCategory,
  strArea,
  strInstructions,
  idMeal,
  handlePass,
  product
}) => {


  const navigate = useNavigate()
  const handleNavigate = (obj) => {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn) {
      navigate("/instructions");
      handlePass(obj)
    } else {
      alert("PLease login first");
      navigate("/login");
    }
  };

  console.log(product, "product");

  return (
    <Card className="col-sm-3 p-0 m-0 card-meal">
      <img alt="Sample" src={strMealThumb} className="img-fluid" />
      <CardBody>
        <CardTitle tag="h6">{strMeal}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="p">
          {strCategory}
        </CardSubtitle>
        <CardText>
          {strInstructions.split(".")[0]}
          <Button
            onClick={() => handleNavigate(product)}
            className="borber border-0 rounded-0 p-0 m-0 read-more"
            tag="p"
          >
            read more
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
};
