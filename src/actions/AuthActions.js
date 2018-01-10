/* Actions Creator File */
import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password, navigationProps }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user, navigationProps);
      })
      .catch((error1) => {
        console.error(error1);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginUserSuccess(dispatch, user);
          }).catch(error => {
              loginUserError(dispatch, error);
          });
      });
  };
};

const loginUserError = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_ERROR,
    payload: error
  });
};

const loginUserSuccess = (dispatch, user, navigationProps) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  navigationProps.navigate('employees');
};
