import { Link } from 'react-router-dom';
import heroImg from '../assets/img/riccardo-valeriana-Bwf92EiORSI-unsplash.jpg';
import iphone6s from '../assets/img/lorenzo-rui-J7xrBW_oYJc-unsplash.jpg';
import googlePixel from '../assets/img/daniel-romero-Z9fW8Nn7D24-unsplash.jpg';
import samsung21 from '../assets/img/anh-nhat-PdALQmfEqvE-unsplash.jpg';
import '../styles/homepage.css';

const homepage = () => {
  console.log('a');
  return (
    <div className="homepage">
      <div className="banner">
        <div className="banner-txts">
          <h2>
            IF YOU ARE LOOKING FOR GOOD SMARTPHONE ,TABLET OR LAPTOP , THEN YOU
            ARE IN THE RIGHT PLACE !
          </h2>
          <h5>
            MOBILY is an online store , we provide high quality of Smartphones,
            Tablets and Laptop for you , what are you waiting , discover our
            products and services !
          </h5>
          <div className="homepage-btns">
            <button id="homepageServiceBtn" type="submit">
              <Link to="/services">DISCOVER OUR SERVICES</Link>
            </button>

            <button id="homepageContactBtn" type="submit">
              <Link to="/contact">CONTACT US</Link>
            </button>
          </div>
        </div>
        <img id="banner-img" src={heroImg} alt="hero background" />
      </div>

      <div className="top-products">
        <li>TOP PRODUCTS :</li>
        <div className="top-product-1">
          <div
            className="top-product-img"
            style={{ backgroundImage: `url(${iphone6s})` }}
          />
          <div className="top-product-info">
            <h3>IPHONE 6S</h3>
            <p>
              PRICE :
              <span>$299</span>
            </p>
            <p>
              BRAND :
              <span>APPLE</span>
            </p>
            <p>
              COLOR :
              <span>BLACK</span>
            </p>
            <button type="submit">ADD TO CART</button>
          </div>
        </div>
        <div className="top-product-1">
          <div
            className="top-product-img"
            style={{ backgroundImage: `url(${googlePixel})` }}
          />
          <div className="top-product-info">
            <h3>GOOGLE PIXEL</h3>
            <p>
              PRICE :
              <span>$299</span>
            </p>
            <p>
              BRAND :
              <span>GOOGLE</span>
            </p>
            <p>
              COLOR :
              <span>BLACK</span>
            </p>
            <button type="submit">ADD TO CART</button>
          </div>
        </div>
        <div className="top-product-1">
          <div
            className="top-product-img"
            style={{ backgroundImage: `url(${samsung21})` }}
          />
          <div className="top-product-info">
            <h3>SAMSUNG S21 PLUS</h3>
            <p>
              PRICE :
              <span>$299</span>
            </p>
            <p>
              BRAND :
              <span>SAMSUNG</span>
            </p>
            <p>
              COLOR :
              <span>BLACK</span>
            </p>
            <button type="submit">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepage;
