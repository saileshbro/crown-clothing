import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
export const CardIcon = ({ toggleCartHidden }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
)
// const mapStateToProps = ({ cart }) => {
// 	return {
// 		hidden: cart.hidden,
// 	}
// }
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})
export default connect(null, mapDispatchToProps)(CardIcon)
