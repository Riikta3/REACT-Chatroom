import React from 'react';
import PropTypes from 'prop-types';

const SettingsField = ({
  value,
  onChange,
  placeholder,
  type,
}) => (
  <input
    className="settings__input"
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />
);

SettingsField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SettingsField;
