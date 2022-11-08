import React, { useEffect, useState } from "react";
import CarouselMenu from "../Component/Header/Carousel";
import { Link } from "react-router-dom";
const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/food?qrt=3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <CarouselMenu />
      <div className="services container my-4">
        <h3>Servicess</h3>
        <hr />
        <div className="row mt-3">
          <div className="col-md-1">
            <h4>Filter</h4>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Price
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Rating
              </label>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              {services &&
                services.map((item) => (
                  <div className="col-md-4">
                    <div class="card">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
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
      <div className="seeAllbtn text-center mb-5">
        <Link to="/services" className="nav-link">
          <button className="btn btn-outline-secondary">See all</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
