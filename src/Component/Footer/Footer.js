import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-facebook-f"></i>
            </a>

            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>FOOD GHOR
                </h6>
                <p>
                  This is foodghor online service. You can order at 10AM from
                  10PM.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Rice
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Fish
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Brief
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Chicken
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Services
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3"></i>Dhaka,Mirput-10
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  foodghor@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i>+8801712616161
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          Copyright:©2022
          <a class="text-reset mx-1 fw-bold" href="/">
            foodghor.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
