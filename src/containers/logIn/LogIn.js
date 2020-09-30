/*
import React, { Component } from 'react';
import { ProductContext } from '../../App';

import { validateLogin } from './helperFunctions';

class LogIn extends Component {
  \\static contextType = ProductContext;

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
          type="email"
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
          type="password"
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

export default LogIn;

*/

// Pitati Mislava za useContext u class component 




import React, { useState, useContext } from 'react';
import { ProductContext } from '../../App';
import { useHistory } from 'react-router-dom';

import * as actionCreators from '../../context/actions';
import { validateLogin } from './helperFunctions';

import { eye, eyeSlash } from './assets';

import styles from './LogIn.module.css';


function LogIn(props) {  
  console.log(' Login.js');

  const [state, setState] = useState({
    email: 'bla.bla@asd.as',
    password: '123asdASD@',
    confirmPassword: '123asdASD@',
    errorEmail: '',
    errorPassword: '',
    errorConfirmPassword: '',
    showPassword: false,
  });
  const history = useHistory();
  const { dispatch } = useContext(ProductContext);
  const { email, password, confirmPassword, errorEmail, errorPassword, errorConfirmPassword, showPassword } = state;


  const onSubmitHandler = () => {
    const { email, password, confirmPassword } = state;
    const validationData = validateLogin({email, password, confirmPassword});
    setState({
      ...state,
      errorEmail: validationData.email,
      errorPassword: validationData.password,
      errorConfirmPassword: validationData.confirmPassword,
    });
    if(validationData.validated) {
      dispatch(actionCreators.setState('isAuthorized', true));
      history.push('/content');
    }
  };

  const onShowPasswordClickHandler = () => {
    setState(currentState => ({...currentState, showPassword: !currentState.showPassword}));
  };
  
  return (
    <div className={styles.mainContainer}>
      <h2>LogIn page</h2>
      <div className={styles.splitToRow}>
        <div className={styles.inputContainer}>
          <p>Enter your email:</p>
          <input
            type="email"
            value={email}
            onChange={event => setState({...state, email: event.target.value})}
          />
        </div>
          {errorEmail && <div className={styles.errorContainer}><p>{errorEmail}</p></div>}
      </div>

      <div className={styles.splitToRow}>
        <div className={styles.inputContainer}>
          <p>Enter your password:</p>
          <div className={styles.passwordInputContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={event => setState({...state, password: event.target.value})}
            />
            <div className={styles.iconContainer}>
              <img src={showPassword ? eyeSlash : eye} alt="logo" width={20} onClick={onShowPasswordClickHandler} />
            </div>            
          </div>
        </div>
          {errorPassword && <div className={styles.errorContainer}><p>{errorPassword}</p></div>}
      </div>

      <div className={styles.splitToRow}>
        <div className={styles.inputContainer}>
          <p>Confirm password:</p>
          <input
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={event => setState({...state, confirmPassword: event.target.value})}
          />
        </div>
          {errorConfirmPassword && <div className={styles.errorContainer}><p>{errorConfirmPassword}</p></div>}
      </div>
      <button className={styles.submitButton} onClick={onSubmitHandler}>Submit</button>
    </div>
  );
  }

export default LogIn;
