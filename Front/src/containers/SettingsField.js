import { connect } from 'react-redux';

import { changeSettingsInput } from 'src/store/actions';

import SettingsField from 'src/components/Settings/SettingsField';

const mapStateToProps = (state, ownProps) => ({
  value: state.settings[ownProps.stateKey],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (event) => {
    dispatch(changeSettingsInput(ownProps.stateKey, event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsField);
