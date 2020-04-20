import React, { Children } from "react"
import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"

const stripePromise = loadStripe("pk_live_pG1geCh96qebYNajdBZV21FK00HoAVMAWG")

const Checkout = () => {
  console.log("hello")
  const handleClick = async event => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: [
        // Replace with the ID of your plan
        { plan: "raffle", quantity: 1 },
      ],
      successUrl: "https://example.com/success",
      cancelUrl: "https://example.com/cancel",
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
