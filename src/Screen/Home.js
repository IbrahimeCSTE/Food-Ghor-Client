import React, { useEffect, useState } from "react";
import CarouselMenu from "../Component/Header/Carousel";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
const Home = () => {
  const [services, setServices] = useState([]);
  const [priceOrder, setPriceOrder] = useState(false);
  useEffect(() => {
    window.document.title = "FoodGhor-Home";
    fetch("http://localhost:5000/api/food?qrt=3")
      .then((res) => res.json())
      .then((data) => setServices(data.reverse()));
  }, []);
  if (priceOrder) {
    services.sort((a, b) => (a.price > b.price ? 1 : -1));
  }
  if (!priceOrder) {
    services.sort((a, b) => (a.price > b.price ? -1 : 1));
  }
  return (
    <div>
      <CarouselMenu />
      <div>
        <div className="services container my-4">
          <h3>Servicess</h3>
          <hr />
          <div className="row mt-3">
            <div className="col-md-2">
              <h4>Filter</h4>
              <div class="form-check">
                <input
                  className="form-check-input"
                  onClick={() => setPriceOrder(!priceOrder)}
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Low Price
                </label>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                {services.length > 0 ? (
                  services.map((item) => (
                    <div className="col-md-6">
                      <div className="card">
                        <img
                          src={item.img}
                          className="card-img-top img-fluid"
                          alt="food"
                        />
                        <div className="card-body">
                          <h4 className="card-title">{item.title}</h4>
                          <h5>Price:{item.price} Tk</h5>
                          <h5>Rating:{item.rating}</h5>
                          <p className="card-text">{item.shortDes}</p>
                          <Link
                            to={`/single-food/${item._id}`}
                            className="btn btn-primary"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-2">
              <img
                src="https://images.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2016%2F08%2F08%2F5a3e16894259ea9075e6f0c8003891ae-dhaka.gif?auto=format%2Ccompress&format=webp&w=400&dpr=2.6"
                className="img-fluid"
                alt=""
              />
              <h5 className="my-2">
                <i className="fas mr-1 fa-map-marker-alt"></i>Mirpur,10
              </h5>
              <h5>Zip:1234</h5>
            </div>
          </div>
        </div>
        <div
          className={
            services.length > 0 ? "seeAllbtn text-center mb-5" : "d-none"
          }
        >
          <Link to="/services" className="nav-link">
            <button className="btn btn-outline-secondary">See all</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
