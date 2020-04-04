import StripeCheckout from 'react-stripe-checkout'
import React from 'react'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_qdysRqn7siRcRjbiOIuxtZVE00gtvoLfsT'
  const onToken = token => {
    console.log(token)
    alert('Payment Successful!')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Yout total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton
