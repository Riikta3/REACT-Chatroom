export const CHANGE_TEXT_INPUT = 'CHANGE_TEXT_INPUT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const SUBMIT_SETTINGS = 'SUBMIT_SETTINGS';
export const CHANGE_SETTINGS_INPUT = 'CHANGE_SETTINGS_INPUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CONNECT_WEBSOCKET = 'CONNECT_WEBSOCKET';
export const SEND_MESSAGE = 'SEND_MESSAGE';


export const changeTextInput = (newValue) => (
  {
    type: CHANGE_TEXT_INPUT,
    newValue,
  }
);

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message: message,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const submitSettings = () => ({
  type: SUBMIT_SETTINGS,
});

export const changeSettingsInput = (settingsKey, newValue) => ({
  type: CHANGE_SETTINGS_INPUT,
  settingsKey: settingsKey,
  newValue: newValue,
});

export const loginSuccess = (nickname) => ({
  type: LOGIN_SUCCESS,
  nickname: nickname,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});

export const connectWebsocket = () => ({
  type: CONNECT_WEBSOCKET,
});
