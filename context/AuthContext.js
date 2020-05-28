import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
    token: null,
    user: {}
  };
  toggleIsAuthenticated = () => {
    this.setState({isAuthenticated: !this.state.isAuthenticated })
  }
  loginApp = (token, user) => {
    this.setState({
      isAuthenticated: true,
      token: token,
      user: user
    })

    console.log(this.state, "statevalue");
  }

  logoutApp = () => {
    this.setState({
      isAuthenticated: false,
      token: null,
      user: {}
    })
    console.log(this.state, "setLogoutClick");
  }

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state, toggleIsAuthenticated: this.toggleIsAuthenticated, loginApp:this.loginApp, logoutApp: this.logoutApp }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
