import React from "react";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <div>
      <div
        id="carouselExampleCaptions about-us-banner"
        class="carousel slide php-banner hire_wordpress_carousel-caption"
        data-bs-ride="carousel "
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="img/wordpress.bg.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-md-block about-us-banner hire_php_carousel-caption">
              <p>HIRE A WORDPRESS DEVELOPER</p>
              {/* <h5 class="abu-title wordpress-title-section">HIRE A WORDPRESS DEVELOPER </h5> */}

              <h5>
                If you have a super tight budget, and you still want to have
                your
                <br /> business online presence, go with wordpress. You can get
                the features
                <br /> extended gradually as you grow.
              </h5>
              <p> Need a wordpress developer!</p>
              <Link to="/popup">
                <button type="" class="btn btn-primary js-message-popup">
                  Contact Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
