import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

export const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Yout cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
export default withRouter(connect(mapStateToProps)(CartDropdown))
