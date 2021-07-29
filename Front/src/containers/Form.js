import { connect } from 'react-redux';

import Form from 'src/components/Form';

import { changeTextInput, sendMessage } from 'src/store/actions';

import isUserLogged from 'src/selectors/isUserLogged';

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  isLogged: isUserLogged(state),
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (event) => {
    dispatch(changeTextInput(event.target.value));
  },
  onMessageSubmit: (event) => {
    event.preventDefault();
    console.log('8. Je délenche une action SEND_MESSAGE.');
    dispatch(sendMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
