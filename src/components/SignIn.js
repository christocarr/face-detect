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

  onSubmitSignIn = () => {
    console.log(this.state);
    this.props.onRouteChange('home');
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="pa4 black-80">
        <form action="sign-up_submit" method="get" acceptCharset="utf-8">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6">Sign Up</legend>
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
              onClick={() => this.onSubmitSignIn()}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
              type="submit"
              value="Sign In"
            />
          </div>
          <p onClick={() => onRouteChange('register')} className="mt3">
            Register
          </p>
        </form>
      </article>
    );
  }
}

export default Signin;
