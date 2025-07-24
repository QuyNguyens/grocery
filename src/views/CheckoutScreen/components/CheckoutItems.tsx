import { CartItem } from 'constants/product'
import React from 'react'

type CheckoutItemsProps = {
    cartItems: CartItem[];
}

const CheckoutItems = ({cartItems}: CheckoutItemsProps) => {
    
  return (
    <div>CheckoutItems</div>
  )
}

export default CheckoutItems