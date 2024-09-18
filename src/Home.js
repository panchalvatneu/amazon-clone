import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lXretRKRL._SX3000_.jpg"
          alt="latest deal on alexa"
        />
        <div className="home__row">
          <Product
            id="123423164"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={19.99}
            image="https://m.media-amazon.com/images/I/61BFOf9Ap-L._AC_UF1000,1000_QL80_.jpg"
            rating={3}
          />
          <Product
            id="491538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://m.media-amazon.com/images/I/71+tbc5GkoL._AC_SX569_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title='Samsung LC49RG90SSUXEN Curved 49" LED Gaming Monitor'
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61MZfowYoaL._AC_SY300_SX300_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81a-vuydLTL._AC_SX425_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN Curved 49' LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120X1440"
            price={1094.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81QEJYyspjL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
