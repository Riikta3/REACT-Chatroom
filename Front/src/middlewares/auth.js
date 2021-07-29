import axios from 'axios';

import { loginSuccess, loginError, connectWebsocket, SUBMIT_SETTINGS } from 'src/store/actions';

const authMiddleware = (store) => (next) => (action) => {
  if (action.type === SUBMIT_SETTINGS) {
    console.log('4. Le middleware AUTH attrape cette action');
    const state = store.getState();
    const requestData = {
      method: 'post',
      url: 'http://localhost:3001/login',
      data: {
        email: state.settings.email,
        password: state.settings.password,
      },
    };
    console.log('4.1. déclenche une requete HTTP sur /login');
    axios(requestData)
      .then((response) => {
        console.log('4.2 puis déclenche deux actions LOGIN_SUCCESS et CONNECT_WEBSOCKET');
        store.dispatch(loginSuccess(response.data.pseudo));
        store.dispatch(connectWebsocket());
      })
      .catch(() => {
        store.dispatch(loginError());
      });
  }
  else {
    next(action);
  }
};

export default authMiddleware;
