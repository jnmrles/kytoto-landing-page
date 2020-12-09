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


        <p>Refund Policies</p>
        <strong>
     Refunds and Returns are not accepted as we are a digital product. If you fail to cancel your membership prior to your renewal, a refund will not be granted.
        </strong>

      </div>
      <div className="testClass">
        <div className="titleWrapper"></div>
      </div>
      <Wave />
    </div>
  </div>
)

export default Success
