import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user/user.actions'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden, setCurrentUser }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{currentUser ? (
					<Link className='option' onClick={() => auth.signOut()} to='#'>
						SIGN OUT
					</Link>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
				{!hidden && <CartDropdown />}
				<CartIcon />
			</div>
		</div>
	)
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
	return {
		currentUser,
		hidden,
	}
}
export default connect(mapStateToProps, { setCurrentUser })(Header)
