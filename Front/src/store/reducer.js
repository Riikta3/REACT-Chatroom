import {
  CHANGE_TEXT_INPUT,
  ADD_MESSAGE,
  SEND_MESSAGE,
  TOGGLE_SETTINGS,
  SUBMIT_SETTINGS,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CHANGE_SETTINGS_INPUT,
} from 'src/store/actions';

const initialState = {
  nickname: null,
  messages: [{
    author: 'Panetonne',
    content: 'Tu as pas des super croquettes ?',
  }],
  inputValue: '',
  settings: {
    email: 'bouclierman@herocorp.io',
    password: 'jennifer',
    isOpen: false,
    hasError: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // lorsque l'utilisateur tape dans le champ controlé
    case CHANGE_TEXT_INPUT:
      // objectif
      // je souhaite renvoyer un nouveau state
      // je vais remplacer la valeur de inputValue par la nouvelle valeur
      return { // je renvoie un nouvel objet
        ...state, // je recopie l'ancien state grace au spread operator
        inputValue: action.newValue,
      };
    // j'envoie un message dans le websocket
    case SEND_MESSAGE:
      console.log("9. L'action SEND_MESSAGE arrive dans le reducer, qui remet a zéro la valeur de l'input.");
      return {
        ...state,
        inputValue: '',
      };
    // je recois un message
    case ADD_MESSAGE:
      console.log("12. L'action ADD_MESSAGE arrive dans le reducer.");
      // je renvoie un nouveau state
      return {
        ...state,
        messages: [ // pour les messages, on recrée un nouveau tableau
          // on recopie l'ancien tableau de messages
          ...state.messages,
          // on ajoute, a la fin du tableau, le nouveau message
          // pas besoin de le faire transiter dans l'action :
          // on l'a déja dans le state !
          // je construis un nouvel objet qui contient
          // le message que j'ajoute
          {
            id: action.message.id,
            author: action.message.author,
            content: action.message.content,
          },
        ],
      };
    case CHANGE_SETTINGS_INPUT:
      // on renvoie un nouvel objet "state"
      return {
        ...state, // on recopie tout l'ancien state
        // on crée une nouvelle clé settings
        settings: {
          // on recopie aussi les anciens settings !
          ...state.settings,
          // nouvelle syntaxe !
          // on peut utiliser une variable comme clé
          // en l'entourant de []
          // ici, la valeur de action.settingsKey
          // deviendra la clé
          // et on mettra dedans la nouvelle valeur
          [action.settingsKey]: action.newValue,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        // je sauvegarde le mot de passe
        nickname: action.nickname,
        settings: {
          ...state.settings,
          // je vide le formulaire
          email: '',
          password: '',
          isOpen: false,
          hasError: false,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        settings: {
          ...state.settings,
          hasError: true,
        },
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          // j'inverse isOpen
          // par rapport a l'ancienen valeur
          // dans le state
          isOpen: !state.settings.isOpen,
        },
      };
    // SURTOUT ne pas oublier le default return state
    // si on ne fait pas ca, et qu'on recoit une action inconnue
    // ou bien l'action d'initialisation
    // alors le reducer renverra rien
    // donc undefined
    // donc notre state sera détruit --> catastrophe
    default:
      return state;
  }
};

export default reducer;
