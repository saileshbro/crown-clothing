import React from 'react'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../redux/user.actions'
const Header = ({ currentUser, setCurrentUser }) => {
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
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		currentUser: state.user.currentUser,
	}
}
export default connect(mapStateToProps, { setCurrentUser })(Header)
