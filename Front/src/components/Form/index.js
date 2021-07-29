import React, { useEffect, useRef } from 'react';
import { Send } from 'react-feather';
import PropTypes from 'prop-types';

import './form.scss';

const Form = ({ isLogged, inputValue, onInputChange, onMessageSubmit }) => {
  // je commence par créer une référence
  // c'est a dire une variable qui va contenir un élément du DOM
  const inputRef = useRef(null);

  // rappel : appelé au rendu initial
  // car le 2nd parametre est un tableau vide
  useEffect(() => {
    // objectif : mettre le focus sur l'input,
    // apres le premier rendu du composant
    inputRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={onMessageSubmit}>
      <input
        // ici, j'associe la référence créée plus haut
        // a un élément JSX
        // en d'autres termes, a chaque rendu (nouveau dessin de l'input)
        // l'élément du DOM sera sauvegardé dans la variable inputRef
        ref={inputRef}
        className="form__input"
        placeholder="Saisissez votre message"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        required
        // si on n'est pas connecté
        // on désactive l'input
        disabled={!isLogged}
        pattern="^(?!\s*$).+"
      />
      <button className="form__submit" type="submit">
        <Send size={32} />
      </button>
    </form>
  );
};

Form.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onMessageSubmit: PropTypes.func.isRequired,
};

export default Form;
