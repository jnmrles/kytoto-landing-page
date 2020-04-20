import React, { Children } from "react"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"

const stripePromise = loadStripe("pk_test_yjYZdixoJgv2HYUuo9kRdp3Q00IG5bkzg5")

const Checkout = () => {
  console.log("hello")
  const handleClick = async event => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your plan
        { plan: "plan_H88dh6PSCHJWGD", quantity: 1 },
      ],
      successUrl: "https://kyotoscripts.netlify.app/success",
      cancelUrl: "https://kyotoscripts.netlify.app/canceled",
    })
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }
  return (
    <button role="link" onClick={handleClick}>
      Subscribe
    </button>
  )
}
export default Checkout
