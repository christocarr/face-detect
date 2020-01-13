import React from 'react'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }

  onNameChange = ev => {
    this.setState({ name: ev.target.value })
  }

  onEmailChange = ev => {
    this.setState({ signInEmail: ev.target.value });
  };

  onPasswordChange = ev => {
    this.setState({ sigInPassword: ev.target.value });
  };

  // onSubmitSignIn = (ev) => {
  //   ev.preventDefault()
  //   fetch('http://localhost:3001/signin', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //       email: this.state.signInEmail,
  //       password: this.state.sigInPassword
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data === 'success') {
  //       this.props.onRouteChange('home');
  //     }
      
  //   })
  //   .catch(err => console.log(err))
  // };

  render() {
    const { onRouteChange } = this.props
    return (
      <article className="pa4 black-80">
        <form action="register_submit" method="get" acceptCharset="utf-8">
          <fieldset id="register" className="ba b--transparent ph0 mh0">
            <legend className="ph0 mh0 fw6">Register</legend>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
              <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name" />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
              <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" />
            </div>
          </fieldset>
          <div className="mt3"><input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Register" /></div>
          <p onClick={() => onRouteChange('signin')} className="mt3 pointer">
            Sign In
            </p>
        </form>
      </article>
    )
  }
}

export default Register