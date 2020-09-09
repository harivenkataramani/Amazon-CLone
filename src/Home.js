import React from "react";

import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="homepageimage"
        />
        <div className="home_row">
          <Product
            id="000001"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
            price={346.96}
            proimage="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="000002"
            title="KenWood KMix Stand mixer for Baking. Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
            price={8000}
            proimage="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="000003"
            title="No Doubt Budget Gaming Pc Intel core i5 3470 Processor (8 GB RAM/1TB Hard Disk/NVIDIA GT 710 2GB Graphics Card) Gaming Cabinet with RGB LED Fan Mirror Finish Tempered Glass"
            price={24999}
            proimage="https://images-na.ssl-images-amazon.com/images/I/41enUlhcXXL.jpg"
            rating={4}
          />
          <Product
            id="000004"
            title="GOLDEN FASHION CSK IPL Training Jersey 2020 with DHONI Print Round Neck Multi Color Unisex"
            price={699}
            proimage="https://images-na.ssl-images-amazon.com/images/I/410%2Bw5fDW8L.jpg"
            rating={4}
          />
          <Product
            id="000005"
            title="BLACK+DECKER WDBD15 15-Litre, 1400 Watt, 16 KPa High Suction Wet and Dry Vacuum Cleaner and Blower with HEPA Filter and Reusable Dustbag (Red/Grey)"
            price={5799}
            proimage="https://images-na.ssl-images-amazon.com/images/I/41JpPYygprL.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="000006"
            title="Lenovo Ideapad Slim 3i 10th Gen Intel Core i5 15.6 inch FHD Thin and Light Laptop (8GB/1TB/Windows 10/MS Office/Grey/1.85Kg), 81WE004WIN"
            price={45990}
            proimage="https://images-eu.ssl-images-amazon.com/images/I/41PnIUzyYML._AC_US160_FMwebp_QL70_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
