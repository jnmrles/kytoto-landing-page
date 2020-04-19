import React from "react"

const Features = props => {
  return (
    <section className="section" id="promotion">
      <div className="container">
        <div className="row">
          <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big">
            <img
              src={require("../images/laptop.png")}
              className="rounded img-fluid d-block mx-auto"
            />
          </div>
          <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
            <ul>
              <li>
                <div
                  data-sal="slide-left"
                  data-sal-delay="300"
                  data-sal-easing="ease-out-back"
                >
                  <img src={require("../images/speed.png")} alt="" />
                  <div className="text">
                    <h4>Rocket Speeds</h4>
                    <p>
                      We leave our competitors in the dust. Cop seamlessly with
                      our competitive & reliable speeds
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div
                  data-sal="slide-right"
                  data-sal-delay="400"
                  data-sal-easing="ease"
                >
                  <img src={require("../images/about1.png")} alt="" />
                  <div className="text">
                    <h4>Multi-Browser Support</h4>
                    <p>Run all your profiles across multiple browsers!</p>
                  </div>
                </div>
              </li>
              <li>
                <div
                  data-sal="slide-left"
                  data-sal-delay="500"
                  data-sal-easing="ease"
                >
                  <img src={require("../images/support1.png")} alt="" />
                  <div className="text">
                    <h4>AutoCheckout Features</h4>
                    <p>
                      Toggle between Cart Mode and Checkout Mode to fully
                      automate your checkout experience!
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
