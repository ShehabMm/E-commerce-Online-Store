import { Helmet } from "react-helmet-async";

import React from "react";

const App = () => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="ecommerce.css" />
        <title>E-commerce store</title>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Martian+Mono:wght@300&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        </style>

        <script defer src="/ecommerce.js"></script>
      </Helmet>

      <>
        <div className="continue">
          <img
            className="newpic2"
            src="/yellow-glowing-lines-black-background/nwe.jpg"
            alt=""
          />
          <img
            className="newpic"
            src="/yellow-glowing-lines-black-background/daniil-komov-3A8ZdnS2v1w-unsplash.jpg"
            alt=""
          />
          <div className="container" id="container">
            <nav className="navbar">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">News</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
              </ul>
            </nav>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="main">
              <div className="main-img">
                <div className="parent-img">
                  {/* <img src="/way-concept-illustration/young-handsome-man-choosing-clothes-shop.jpg" alt=""> */}
                </div>
                <h1 className="title">Online Store </h1>
                <h2 className="hh2" id="headTitle" />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br />
                  Sapiente epellendus facilis deleniti consequatur harum
                  aspernatur!
                </p>
              </div>
              <br />
              <br />
              <br />
              <div className="papa">
                <a href="" id="discover">
                  DISCOVER
                </a>
                <a href="" className="secondary">
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
          <br />
          {/* section2 */}
          <section>
            <div className="section2">
              <div className="thegrand">
                <div className="titleparent">
                  <h1 className="hh">LATEST PRODUCTS</h1>
                </div>
                <div className="cards" id="card1">
                  <div className="imagepapa">
                    <img
                      className="firsttshirt"
                      src="/T-shirts/4.jfif"
                      alt=""
                    />
                  </div>
                  <div className="h2papa">
                    <h2>DARK-GRAY T-SHIRT</h2>
                  </div>
                  <div className="pppapa">
                    <h3>
                      Lorem ipsum dolor one unique do it it itsit amet
                      consectetur adipisicing elit. Nisi, autem.
                    </h3>
                  </div>
                  <div className="papabuttons">
                    <button href="#" className="myButton">
                      buy
                    </button>
                    <div className="price">20$</div>
                  </div>
                </div>
                <div className="cards">
                  <div className="imagepapa">
                    <img className="firsttshirt" src="/T-shirts/3.jpg" alt="" />
                  </div>
                  <div className="h2papa">
                    <h2>LIGHT-BLUE T-SHIRT</h2>
                  </div>
                  <div className="pppapa">
                    <h3>
                      Lorem ipsum dolor one unique do it it itsit amet
                      consectetur adipisicing elit. Nisi, autem.
                    </h3>
                  </div>
                  <div className="papabuttons">
                    <button href="#" className="myButton">
                      buy
                    </button>
                    <div className="price">10$</div>
                  </div>
                </div>
                <div className="cards">
                  <div className="imagepapa">
                    <img
                      className="firsttshirt"
                      src="/T-shirts/2.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="h2papa">
                    <h2>LIGHT GRAY T-SHIRT</h2>
                  </div>
                  <div className="pppapa">
                    <h3>
                      Lorem ipsum dolor one unique do it it itsit amet
                      consectetur adipisicing elit. Nisi, autem.
                    </h3>
                  </div>
                  <div className="papabuttons">
                    <button href="#" className="myButton">
                      buy
                    </button>
                    <div className="price">13$</div>
                  </div>
                </div>
                <div className="cards">
                  <div className="imagepapa">
                    <img
                      className="firsttshirt"
                      src="/T-shirts/1.jfif"
                      alt=""
                    />
                  </div>
                  <div className="h2papa">
                    <h2>BLACK T-SHIRT</h2>
                  </div>
                  <div className="pppapa">
                    <h3 className="ngn">
                      big sized T-shirt with special offer
                    </h3>
                  </div>
                  <div className="papabuttons">
                    <button href="#" className="myButton">
                      buy
                    </button>
                    <div className="price">50$</div>
                  </div>
                </div>
              </div>
            </div>
            <article className="close" id="close">
              ✖
            </article>{" "}
            <br />
            <br />
            <section className="black screen" id="noway">
              <br />
            </section>
            <div className="final">
              <button id="finalbtn">Proceed</button>
              <article className="totalpr">total</article>
              <article className="zero" id="finaliseprice">
                0$
              </article>
            </div>
          </section>
        </div>
        {/* //section3// */}
        <section className="product">
          <h2 className="product-category">best selling</h2>
          <button className="pre-btn">&lt;</button>
          <button className="nxt-btn">&gt;</button>
          <div className="product-container">
            <div className="product-card">
              <img src="/T-shirts/3.jpg" alt="image" />
              <span className="discount">50% off</span>
              <button className="card-button">add to wishlist</button>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <span className="new-price">2000$</span>
                <span className="actual-price">800$</span>
              </div>
            </div>
            {/* //.. another products..// */}
            <div className="product-card">
              <img src="/T-shirts/2.jpeg" alt="image" />
              <span className="discount">50% off</span>
              <button className="card-button">add to wishlist</button>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <span className="new-price">20$</span>
                <span className="actual-price">80$</span>
              </div>
            </div>
            {/* //.. another products..// */}
            <div className="product-card">
              <img src="/T-shirts/4.jfif" alt="image" />
              <span className="discount">50% off</span>
              <button className="card-button">add to wishlist</button>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <span className="new-price">20$</span>
                <span className="actual-price">80$</span>
              </div>
            </div>
            {/* //.. another products..// */}
            <div className="product-card">
              <img src="/T-shirts/3.jpg" alt="image" />
              <span className="discount">50% off</span>
              <button className="card-button">add to wishlist</button>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <span className="new-price">25$</span>
                <span className="actual-price">80$</span>
              </div>
            </div>
            {/* //.. another products..// */}
            <div className="product-card">
              <img src="/T-shirts/3.jpg" alt="image" />
              <span className="discount">50% off</span>
              <button className="card-button">add to wishlist</button>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <span className="new-price">20$</span>
                <span className="actual-price">80$</span>
              </div>
            </div>
            {/* //.. another products..// */}
            <div className="product-card">
              <img src="/T-shirts/3.jpg" alt="image" />
              <span className="discount">50% off</span>
              <button className="card-button">add to wishlist</button>
              <div className="product-info">
                <h2 className="product-brand">brand</h2>
                <span className="new-price">20$</span>
                <span className="actual-price">80$</span>
              </div>
            </div>
          </div>
        </section>
        {/* new section4  */}
        <section className="section4">
          <h2 className="social">social links</h2>
          <img
            className="icons"
            id="abs"
            src="/yellow-glowing-lines-black-background/tap-here.png"
            alt=""
          />
          <div className="parentico">
            <img
              className="icons"
              id="face"
              src="/yellow-glowing-lines-black-background/facebook.png"
              alt=""
            />
            <img
              className="icons"
              id="insta"
              src="/yellow-glowing-lines-black-background/instagram.png"
              alt=""
            />
            <img
              className="icons"
              id="snab"
              src="/yellow-glowing-lines-black-background/snapchat.png"
              alt=""
            />
            <img
              className="icons"
              id="tik"
              src="/yellow-glowing-lines-black-background/tik-tok.png"
              alt=""
            />
            <img
              className="icons"
              id="youtube"
              src="/yellow-glowing-lines-black-background/youtube.png"
              alt=""
            />
          </div>
          <p className="fininsh">
            Copyright ©2023 All rights reserved | This template is made by
            Shehab Eldin.
          </p>
        </section>
      </>
    </div>
  );
};

export default App;
