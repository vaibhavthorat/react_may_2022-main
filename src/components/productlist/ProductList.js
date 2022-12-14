import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateHandler = (title, price) => {
    navigate({
      pathname: "/productdetails",
      search: `?${createSearchParams({
        title,
        price,
      })}`,
    });
  };

  return (
    <>
      <h1 className="text-center bg-primary text-white">Product List</h1>

      <div className="container-fluid">
        <div className="row">
          {products.map((prod, ind) => (
            <div className="col-sm-3" key={ind}>
              <div className="card">
                <img
                  src={prod.images[0]}
                  className="card-img-top"
                  alt="image not available"
                  width="200"
                  height="200"
                />
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">{prod.description}</p>
                  <p className="card-text">Price: {prod.price}</p>
                  <p className="card-text">Rating: {prod.rating}</p>
                  <p className="card-text">
                    <button>
                      <Link to={`/productdetails/${prod.id}`}>
                        View Details
                      </Link>
                    </button>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        navigateHandler(prod.title, prod.price);
                      }}
                    >
                      query param
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
