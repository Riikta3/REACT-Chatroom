import { SEND_MESSAGE, CONNECT_WEBSOCKET, addMessage } from 'src/store/actions';

let socket;

const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_WEBSOCKET: {
      console.log("5. L'action CONNECT_WEBSOCKET est attrapée par le middleware CHAT.");
      socket = window.io('http://localhost:3001');

      socket.on('send_message', (message) => {
        console.log("10. Le client passe donc dans la fonction de callback passée à socket.on('send_message')");
        console.log('11. Une action ADD_MESSAGE y est dispatchée');
        store.dispatch(addMessage(message));
      });
      break;
    }
    case SEND_MESSAGE: {
      const state = store.getState();

      // ici on fera le socket.emit
      socket.emit('send_message', { author: state.nickname, content: state.inputValue });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;
