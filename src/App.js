import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Components
import Header from "./components/header_footer/Header";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/shop";
import SignIn_Up from "./pages/signIn-signUp/signIn_signUp";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div
        style={{
          marginTop: "100px"
        }}
      >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signIn" component={SignIn_Up} />
        </Switch>
      </div>
    );
  }
}

export default App;
