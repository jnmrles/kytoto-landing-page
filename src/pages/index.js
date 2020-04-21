import React, { useState } from "react"
import Link from "gatsby-link"
import Card from "../components/Card"
import "../layouts/layout.css"
import Header from "../components/header"
import Wave from "../components/Wave"
import Section from "../components/Section"
import Features from "../components/Features"
import Lottie from "react-lottie"
import Checkout from "../components/Checkout"
const IndexPage = () => {
  const [style, setStyle] = useState({ display: "block" })
  const handleBoxToggle = () => setStyle({ display: "none" })
  return (
    <div>
      <Header />
      <div className="Hero">
        <div className="HeroGroup">
          <img src={require("../images/ktitle.png")} width="300" />
          <p>A New Era of E-Commerce Automation.</p>
          {/* <Link to="/page-2/">Purchase</Link> */}
          <div className="Logos">
            <img src={require("../images/logo-sketch.png")} width="50" />
            <img src={require("../images/logo-figma.png")} width="50" />
            <img src={require("../images/logo-studio.png")} width="50" />
            <img src={require("../images/logo-framer.png")} width="50" />
            <img src={require("../images/logo-react.png")} width="50" />
            <img src={require("../images/logo-swift.png")} width="50" />
          </div>
        </div>
        <div className="testClass">
          <Checkout />
          <div className="titleWrapper"></div>
        </div>
        <Wave />
      </div>
      <div className="Cards" id="Cards">
        {/* <div className="CardGroup">
        <Card
          title="Naked ATC"
          text="10 sections"
          image={require("../images/wallpaper.jpg")}
        />
        <Card
          title="Soto ATC"
          text="12 sections"
          image={require("../images/wallpaper2.jpg")}
        />
        <Card
          title="HollyWood ATC"
          text="5 sections"
          image={require("../images/wallpaper3.jpg")}
        />
        <Card
          title="Kyoto AIO"
          text="10 sections"
          image={require("../images/wallpaper4.jpg")}
        />
      </div> */}

        <Features />
      </div>

      <Section
        image={
          "https://uploads-ssl.webflow.com/5a833accbd255a0001fb8c90/5a833acdbd255a0001fb8cf8_Asset%2010.svg"
        }
        logo={require("../images/logo-react.png")}
        title="Optimized"
        text=" Our software is built with practical applications of Computer Science theory and Algorithms to ensure our space time trade-offs"
      />

      <div className="ProductGroup" id="Cards">
        <div className="ProductCard">
          {/* <div className="text-center">
            <div className="card text-white bg-primary mb-3">
              <div className="card-header">
                <img src={require("../images/k.png")} width="50" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  \n the bulk \n of the content.
                </p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  \n the bulk \n of the content.
                </p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  \n the bulk \n of the content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div> */}
          <div className="container">
            <div className="card-deck">
              <div className="card ">
                <div className="card-header">
                  <img src={require("../images/k.png")} width="50" /> AIO
                </div>
                <div className="card-body">
                  <h5>Automated Cart & Checkout Features:</h5>
                  <p className="card-text">✅Raffle sites</p>
                  <p className="card-text">✅Shopify</p>
                  <p className="card-text">✅Supreme</p>
                  <p className="card-text">✅Stripe</p>
                  <p className="card-text">✅SNS</p>
                  <p className="card-text">✅Stripe</p>
                </div>

                <div className="card-footer text-center">
                  <a href="#" className="btn btn-outline-dark">
                    Coming Soon...
                  </a>
                </div>
              </div>

              <div className="card ">
                <div className="card-header">
                  <img src={require("../images/k.png")} width="50" /> RAFFLE
                </div>
                <div className="card-body">
                  <h5>Automated Add-to-Cart Extension:</h5>
                  <p className="card-text">✅Supports All Raffle Sites</p>
                  <p className="card-text">
                    ✅Naked, Soto, Hollywood, Caliroots, etc.
                  </p>
                  <p className="card-text">
                    ✅Regular Updates to include any new Raffle sites
                  </p>
                  <p className="card-text">✅Easy Set-Up</p>
                </div>
                <div className="card-footer text-center">
                  <div id="raffle-btn">
                    <Checkout />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
