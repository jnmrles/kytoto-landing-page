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
import TopIcon from "../components/TopIcon"
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

        </div>
        <div className="testClass">
          <Checkout />
          <div className="titleWrapper"></div>
        </div>
        <Wave />
      </div>
      <div className="Cards" id="Cards">


        <Features />
      </div>

      <div id="success">
        <Section
          image={
            "https://uploads-ssl.webflow.com/5a833accbd255a0001fb8c90/5a833acdbd255a0001fb8cf8_Asset%2010.svg"
          }
          logo={require("../images/logo-react.png")}
          title="Optimized"
          text=" Our software is built with practical applications of Computer Science theory and Algorithms to ensure our space time trade-offs"
        />
      </div>

      <div className="ProductGroup" id="Cards">
        <div className="ProductCard">
          <div className="container" id="Products">
            <div className="card-deck mr-4">

            <div className="card ">
                <div className="card-header">
                  <img src={require("../images/k.png")} width="50" /> Kyoto AIO
                </div>
                <div className="card-body">
                  <h5> Automated Checkout Extension:</h5>

                  <p className="card-text">
                    ✅Naked, Soto, Hollywood, Caliroots, Yme Universe, JunkYard,
                    SkateDeluxe, Zalando (All Regions), FootShop, FootDistrict,
                    etc!
                  </p>
                  <p className="card-text">
                    ✅Regular Updates to include any new Raffle sites
                  </p>
                  <p className="card-text">✅Multiple Activations</p>
                  <p className="card-text">✅Easy Set-Up</p>
                </div>
                <div className="card-footer text-center">
                  <button>COMING SOON</button>
                  </div>
                  </div>



              <div className="card ">
                <div className="card-header">
                  <img src={require("../images/k.png")} width="50" /> Kyoto ATC
                </div>
                <div className="card-body">
                  <h5>Automated Add-to-Cart Extension:</h5>
                  <p className="card-text">✅Supports All Raffle Sites</p>
                  <p className="card-text">
                    ✅Naked, Soto, Hollywood, Caliroots, Yme Universe, JunkYard,
                    SkateDeluxe, Zalando (All Regions), FootShop, FootDistrict,
                    etc!
                  </p>
                  <p className="card-text">
                    ✅Regular Updates to include any new Raffle sites
                  </p>
                  <p className="card-text">✅Multiple Activations</p>
                  <p className="card-text">✅Easy Set-Up</p>
                </div>
                <div className="card-footer text-center">
                  <div id="raffle-btn">
                  <button>COMING SOON</button>

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
