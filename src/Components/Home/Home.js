import React from "react";
import Footer from "../Footer/Footer";
import "./Home.css";
import Product from "./Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
          alt=""
        />
        <div className="products">
          <div className="home__row">
            <Product
              id={1}
              title="Nulaxy Laptop Stand, Ergonomic Aluminum Laptop Mount Nulaxy Laptop Stand, Ergonomic Aluminum Laptop Mount"
              image="https://m.media-amazon.com/images/I/8173Or14LpL._AC_UL320_.jpg "
              price={50.2}
              rating={5}
            />
            <Product
              id={2}
              title="Samsung Galaxy Tab S7 Wi-Fi, Mystic Black - 128 GB"
              image="https://m.media-amazon.com/images/I/71W5ZdS+sEL._AC_UL320_.jpg"
              price={50.25}
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id={3}
              title="Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display"
              image="https://m.media-amazon.com/images/I/A1A2yQlAXCL._AC_UL320_.jpg"
              price={562.5}
              rating={5}
            />
            <Product
              id={4}
              title="Skytech Archangel Gaming Computer PC Desktop – Ryzen 5 3600 3.6GHz"
              image="https://m.media-amazon.com/images/I/81W7WT+OmsL._AC_UL320_.jpg"
              price={1049}
              rating={5}
            />
            <Product
              id={5}
              title="Lenovo Tab M10 Plus, 10.3 FHD Android Tablet"
              image="https://m.media-amazon.com/images/I/71sfODG+c+L._AC_UL320_.jpg"
              price={1500.99}
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id={6}
              title="Acer Chromebook Spin 311 Convertible Laptop, Intel Celeron N4020, 11.6 HD Touch"
              image="https://m.media-amazon.com/images/I/71c5W9NxN5L._AC_UL320_.jpg"
              price={999.0}
              rating={5}
            />
            <Product
              id={6}
              title="Samsung Galaxy Tab S7 Wi-Fi, Mystic Black - 128 GB"
              image="https://m.media-amazon.com/images/I/71rw+F2aLHL._AC_UL320_.jpg"
              price={1250.24}
              rating={5}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
