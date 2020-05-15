import React, { Children } from "react"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"

const stripePromise = loadStripe("pk_test_a2GPRzou3AZJwheUdfCFx7rU00LMG7R8Up")

const Checkout = () => {
  console.log("hello")
  const handleClick = async event => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your plan
        { plan: "prod_HHNKv91jQtCSvX", quantity: 1 },
      ],
      successUrl: "https://kyotoscripts.netlify.app/success",
      cancelUrl: "https://kyotoscripts.netlify.app/",
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }
  return (

       <a href="#Products">SUBSCRIBE</a>

  )
}
export default Checkout
