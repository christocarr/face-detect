import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      sigInPassword: '',
    };
  }

  onEmailChange = ev => {
    this.setState({ signInEmail: ev.target.value });
  };

  onPasswordChange = ev => {
    this.setState({ sigInPassword: ev.target.value });
  };

  onSubmitSignIn = (ev) => {
    ev.preventDefault()
    fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.sigInPassword
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
      
    })
    .catch(err => console.log(err))
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="pa4 black-80">
        <form acceptCharset="utf-8" action="submit" method="get" onSubmit={(ev) => this.onSubmitSignIn(ev)}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6">Sign In</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">
                Email address
              </label>
              <input
                onChange={this.onEmailChange}
                className="pa2 input-reset ba bg-transparent w-100 measure"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={this.onPasswordChange}
                className="b pa2 input-reset ba bg-transparent"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className="mt3">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
              value="Sign In"
            />
          </div>
          <p onClick={() => onRouteChange('register')} className="mt3 pointer">
            Register
          </p>
        </form>
      </article>
    );
  }
}

export default Signin;
