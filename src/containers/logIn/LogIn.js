import React, { Component } from 'react';

import { validateLogin } from './helperFunctions';
// import PropTypes from 'prop-types';

// import styles from './LogIn.modules.css';

class LogIn extends Component {
  state = {
    email: 'bla.bla@asd.as',
    password: '123asdASD@',
    confirmPassword: '123asdASD@',
    errorEmail: '',
    errorPassword: '',
    errorConfirmPassword: '',
  };

  onSubmitHandler = () => {
    const { email, password, confirmPassword } = this.state;
    const validationData = validateLogin({email, password, confirmPassword});
    this.setState({
      errorEmail: validationData.email,
      errorPassword: validationData.password,
      errorConfirmPassword: validationData.confirmPassword,
    });
    if(validationData.validated) {
      this.props.history.push('/content');
    }
  };

  onElementBlurHandler = () => {};

  render() {
    console.log(' Login.js');

    const { email, password, confirmPassword, errorEmail, errorPassword, errorConfirmPassword } = this.state;
    
    return (
      <div>
        <h1>Hello</h1>
        <p>Enter your email:</p>
        <input
          type="text"
          value={email}
          onChange={event => this.setState({email: event.target.value})}
          onBlur={this.onElementBlurHandler}
        />
        {errorEmail && <p>{errorEmail}</p>}
        <p>Enter your password:</p>
        <input
          type="text"
          value={password}
          onChange={event => this.setState({password: event.target.value})}
          onBlur={this.onElementBlurHandler}
        />
        <button onClick={() => {console.log('missingLogic');}}>Show password</button>
        {errorPassword && <p>{errorPassword}</p>}
        <p>Confirm password:</p>
        <input
          type="text"
          value={confirmPassword}
          onChange={event => this.setState({confirmPassword: event.target.value})}
          onBlur={this.onElementBlurHandler}
        />
        {errorConfirmPassword && <p>{errorConfirmPassword}</p>}
        <br/>
        <button onClick={this.onSubmitHandler}>Submit</button>
      </div>
    );
  }
}

// LogIn.propTypes = {};

// LogIn.defaultProps = {};

export default LogIn;
