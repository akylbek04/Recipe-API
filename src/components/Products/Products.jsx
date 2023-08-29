import { useState } from "react";
import { Button } from "reactstrap";
import "./Products.css";
import { SingleProduct } from "../SingleProduct/SingleProduct";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const Products = ({ products, loading, query, handlePass }) => {
  const [activePage, setActivePage] = useState(1);
  const [bookPerPage, setBookPerPage] = useState(4);
  const totalPages = Math.ceil(products.length / bookPerPage);

  const filtered =
    products.length > 0 &&
    products.filter((product) =>
      product.strMeal.toLowerCase().includes(query.toLowerCase())
    );

  const next = () => {
    if (activePage < totalPages) {
      setActivePage((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (activePage > 1) {
      setActivePage((prev) => prev - 1);
    }
  };
  const first = () => {
    if (activePage > 1) {
      setActivePage(1);
    }
  };

  const last = () => {
    if (activePage < totalPages) {
      setActivePage(totalPages);
    }
  };

  const startIndex = (activePage - 1) * bookPerPage;
  const lastIndex = activePage * bookPerPage;
  const slicedBooks = filtered.slice(startIndex, lastIndex);

  return (
    <div>
      <div className="container mt-5">
        {!loading ? (
          slicedBooks.map((product) => {
            return (
              <SingleProduct
                key={product.idMeal}
                {...product}
                product={product}
                handlePass={handlePass}
              />
            );
          })
        ) : (
          <div>not found</div>
        )}
      </div>
      <div className="pg-container  mb-5">
        <BsArrowLeft
          color="black"
          className="arrow"
          disabled={activePage === 1}
          onClick={prev}
        />

        <Button
          color="white"
          disabled={activePage === 1}
          onClick={first}
          className="rounded-0 px-2 py-0 ms-2  border border-1"
        >
          {activePage}
        </Button>
        <Button
          disabled={activePage === totalPages}
          onClick={last}
          className="rounded-0 px-2 py-0 mx-1 me-2 "
        >
          {totalPages}
        </Button>

        <BsArrowRight
          className="arrow"
          disabled={activePage === totalPages}
          onClick={next}
          color="black"
        />
      </div>
    </div>
  );
};
