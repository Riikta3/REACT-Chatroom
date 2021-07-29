import { connect } from 'react-redux';

import Settings from 'src/components/Settings';

import isUserLogged from 'src/selectors/isUserLogged';
import {
  toggleSettings,
  submitSettings,
} from 'src/store/actions';

// cablage des données
const mapStateToProps = (state) => ({

  isLogged: isUserLogged(state),
  isOpen: state.settings.isOpen,
});

// cablage des actions
const mapDispatchToProps = (dispatch) => ({
  onSettingsToggle: () => {
    dispatch(toggleSettings());
  },

  onLoginSubmit: (event) => {
    event.preventDefault();
    console.log('3. Je lance une action SUBMIT_SETTINGS');
    dispatch(submitSettings());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
