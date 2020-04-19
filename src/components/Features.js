import React from "react"

const Features = props => {
  return (
    <section className="section" id="promotion">
      <div className="container">
        <div className="row">
          <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big">
            <img
              src={require("/Users/jnmrles/Desktop/FullStack-Work/design-code-course/gatsby-test copy/src/images/LapTop.png")}
              className="rounded img-fluid d-block mx-auto"
            />
          </div>
          <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
            <ul>
              <li>
                <img
                  src={require("/Users/jnmrles/Desktop/FullStack-Work/design-code-course/gatsby-test copy/src/images/speed.png")}
                  alt=""
                />
                <div className="text">
                  <h4>Rocket Speeds</h4>
                  <p>
                    We leave our competitors in the dust. Cop seamlessly with
                    our competitive & reliable speeds
                  </p>
                </div>
              </li>
              <li data-scroll-reveal="enter right move 30px over 0.6s after 0.5s">
                <img
                  src={require("/Users/jnmrles/Desktop/FullStack-Work/design-code-course/gatsby-test copy/src/images/about1.png")}
                  alt=""
                />
                <div className="text">
                  <h4>Multi-Browser Support</h4>
                  <p>Run all your profiles across multiple browsers!</p>
                </div>
              </li>
              <li data-scroll-reveal="enter right move 30px over 0.6s after 0.6s">
                <img
                  src={require("/Users/jnmrles/Desktop/FullStack-Work/design-code-course/gatsby-test copy/src/images/support1.png")}
                  alt=""
                />
                <div className="text">
                  <h4>AutoCheckout Features</h4>
                  <p>
                    Toggle between Cart Mode and Checkout Mode to fully automate
                    your checkout experience!
                  </p>
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
