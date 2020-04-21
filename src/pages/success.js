import React from "react"
import Header from "../components/header"
import "../layouts/layout.css"
import SEO from "../components/seo"
import IndexPage from "./index"
import styled from "styled-components"
import Wave from "../components/Wave"
import Icon from "../components/Icon"
const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  left: -1px;
  bottom: -10px;
  color: black;
  z-index: 100;
`

const Success = () => (
  <div>
    <SEO title="Success" />
    <Header />

    <div className="jumbotron">
      <div className="HeroGroup">
        <div id="Icon">
          <Icon />
        </div>

        <p>Thank You!</p>
        <strong>
          Please check your email for further instructions on how to complete
          your account setup.
        </strong>
        {/* <Link to="/page-2/">Purchase</Link> */}
        {/* <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-studio.png")} width="50" />
          <img src={require("../images/logo-framer.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />
        </div> */}
      </div>
      <div className="testClass">
        <div className="titleWrapper"></div>
      </div>
      <Wave />
    </div>
  </div>
)

export default Success
