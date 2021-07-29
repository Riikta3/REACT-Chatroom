import {
  createStore,
  applyMiddleware,
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import logMiddleware from 'src/middlewares/log';
import authMiddleware from 'src/middlewares/auth';
import chatMiddleware from 'src/middlewares/chat';

import reducer from './reducer';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(logMiddleware),
    applyMiddleware(authMiddleware),
    applyMiddleware(chatMiddleware),
  ),
);

export default store;
