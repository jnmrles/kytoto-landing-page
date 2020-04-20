import React from "react"
import Header from "../components/header"
import "../layouts/layout.css"
import SEO from "../components/seo"
import IndexPage from "./index"
const Success = () => (
  <>
    <SEO title="Success" />
    <Header />

    <div class="jumbotron text-center">
      <h1 class="display-3">Thank You!</h1>
      <p class="lead">
        <strong>Please check your email</strong> for further instructions on how
        to complete your account setup.
      </p>
      <hr />
      <p>
        Having trouble? <a href={IndexPage}>Contact us</a>
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-sm" href="/" role="button">
          Continue to homepage
        </a>
      </p>
    </div>
  </>
)

export default Success
