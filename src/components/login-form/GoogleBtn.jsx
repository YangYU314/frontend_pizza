import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const CLIENT_ID = '<your Client ID>';


class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login (response) {
    if(response.Zi.access_token){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.Zi.access_token
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }


  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={CLIENT_ID}
          buttonText='GOOGLE'
          onSuccess={ this.login }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
      { this.state.accessToken ? <h5>Your Access Token: <br/><br/> { this.state.accessToken }</h5> : null }

    </div>
    )
  }
}

export default GoogleBtn;