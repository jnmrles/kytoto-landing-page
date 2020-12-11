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
          {/* <Link to="/page-2/">Purchase</Link> */}
          <div className="Logos">
            {/* <img src={require("../images/logo-sketch.png")} width="50" />
            <img src={require("../images/logo-figma.png")} width="50" />
            <img src={require("../images/logo-studio.png")} width="50" />
            <img src={require("../images/logo-framer.png")} width="50" />
            <img src={require("../images/logo-react.png")} width="50" />
            <img src={require("../images/logo-swift.png")} width="50" /> */}
            {/* <img src="data:image/jpeg;base64,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"></img> */}
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
            <div className="card-deck">


              <div className="card ">
                <div className="card-header">
                  <img src={require("../images/k.png")} width="50" /> ATC
                  EXTENSION $15/Month
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
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick"/>
<input type="hidden" name="hosted_button_id" value="R8DWVTE38UPMC"/>
<table>
<tr><td><input type="hidden" name="on0" value="USERNAME"/>USERNAME</td></tr><tr><td><input type="text" name="os0" maxlength="200"/></td></tr>
</table>
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
</form>

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
