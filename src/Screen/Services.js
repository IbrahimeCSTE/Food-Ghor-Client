import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/food")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services container my-4">
      <h3>Servicess</h3>
      <hr />
      <div className="row mt-3">
        <div className="col-md-2">
          <h4>Filter</h4>
          <div class="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Price
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
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Services;
