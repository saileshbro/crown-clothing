import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";
import SigninSignup from "./pages/signin-signup/signin-signup.component";
import { auth } from "./firebase/firebase.utils";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUSer: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUSer: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUSer} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SigninSignup} />
        </Switch>
      </div>
    );
  }
}

export default App;
