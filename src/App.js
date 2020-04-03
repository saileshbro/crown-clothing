import React, { Component } from 'react'
import './App.css'
import HomePage from './pages/homepage/homepage.component'
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SigninSignup from './pages/signin-signup/signin-signup.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUSer } from './redux/user.actions'

class App extends Component {
	unsubscribeFromAuth = null
	componentDidMount() {
		const { setCurrentUSer } = this.props
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)
				userRef.onSnapshot(snapshot => {
					setCurrentUSer({
						id: snapshot.id,
						...snapshot.data(),
					})
				})
			} else {
				setCurrentUSer(userAuth)
			}
		})
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SigninSignup} />
				</Switch>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		setCurrentUSer: user => dispatch(setCurrentUSer(user)),
	}
}
export default connect(null, mapDispatchToProps)(App)
