import React, { useEffect, useState } from "react";
import CarouselMenu from "../Component/Header/Carousel";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Home = () => {
  const [services, setServices] = useState([]);
  const [priceOrder, setPriceOrder] = useState(false);
  useEffect(() => {
    window.document.title = "FoodGhor-Home";
    fetch("https://server-gamma-ochre.vercel.app/api/food?qrt=6")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [priceOrder]);
  if (priceOrder) {
    services.sort((a, b) => (a.price > b.price ? 1 : -1));
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
            <div className="col-md-10">
              <div className="row serviceCard">
                {services.length > 0 ? (
                  services.map((item, idx) => (
                    <div key={idx} className="col-md-4 ">
                      <AnimationOnScroll
                        animateIn={
                          idx & 1
                            ? "animate__fadeInRightBig"
                            : "animate__fadeInLeftBig"
                        }
                      >
                        <div className="card my-3 cardImg">
                          <PhotoProvider>
                            <PhotoView src={item.img}>
                              <img
                                src={item.img}
                                className="card-img-top img-fluid"
                                alt="food"
                              />
                            </PhotoView>
                          </PhotoProvider>
                          <div className="card-body">
                            <h4 className="card-title">{item.title}</h4>
                            <h5>Price:{item.price} Tk</h5>
                            <h5>Rating:{item.rating}</h5>
                            <div className="addToCart">
                              <div>
                                <Link
                                  to={`/single-food/${item._id}`}
                                  className="btn btn-sm btn-primary"
                                >
                                  View Details
                                </Link>
                              </div>
                              <div>
                                <i
                                  title="Add To Cart"
                                  className="fas fa-shopping-cart"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimationOnScroll>
                    </div>
                  ))
                ) : (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                )}
              </div>
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
