const logMiddleware = (store) => (next) => (action) => {
  console.log('Je suis logMiddleware et recois laction : ', action);
  next(action);
};

export default logMiddleware;
