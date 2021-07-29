import React from 'react';
import PropTypes from 'prop-types';

import ConnectedSettingsField from 'src/containers/SettingsField';

import './settings.scss';

const Settings = ({
  isLogged, // est-ce que on est connecté ?
  isOpen, // est-ce que les settings sont ouverts
  onSettingsToggle, // ouverture ou fermeture des settings
  onLoginSubmit, // envoi du formulaire
}) => (
  <div
    className={isOpen ? 'settings settings--open' : 'settings'}
  >
    <button
      className="settings__toggle"
      onClick={onSettingsToggle}
      type="button"
    >
      +
    </button>
    {
      isLogged ? (
        <div className="settings__info">
          Vous êtes connecté
        </div>
      ) : (
        <form
          className="settings__form"
          onSubmit={onLoginSubmit}
        >
          <ConnectedSettingsField
            stateKey="email"
            type="email"
            placeholder="Votre email"
          />
          <ConnectedSettingsField
            stateKey="password"
            type="password"
            placeholder="Votre mot de passe"
          />
          <button
            className="settings__submit"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      )
    }
  </div>
);

Settings.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSettingsToggle: PropTypes.func.isRequired,
  onLoginSubmit: PropTypes.func.isRequired,
};

export default Settings;
