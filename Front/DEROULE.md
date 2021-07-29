# Déroulé des étapes pour envoyer un message

## Comment lire ce fichier

Les étapes sont consécutives. Les étapes en gras sont visibles via un console.log
dans l'application.

## Étapes pour envoyer un message

1. Je lance l'application chat et son serveur

2. Je tape mon email / mot de passe

3. **Je lance une action SUBMIT_SETTINGS**

4. **Le middleware AUTH attrape cette action**
   1. **déclenche une requete HTTP sur /login,**
   2. **puis déclenche deux actions :**
       - **LOGIN_SUCCESS**
       - **CONNECT_WEBSOCKET**

5. **L'action CONNECT_WEBSOCKET est attrapée par le middleware CHAT.**
   Le websocket est initialisé ainsi que son écouteur d'évènement (.on('send_message'))

6. Je tape un message à envoyer.

7. J'appuie sur entrée ou sur le bouton d'envoi.

8. **Je délenche une action SEND_MESSAGE.**
    Cette action est attrapée par le middleware chat.
    Le middleware chat écrit sur le socket (socket.emit)
    L'action est ensuite nextée.

9. **L'action SEND_MESSAGE arrive dans le reducer, qui remet a zéro la valeur de l'input.**

    Pendant ce temps, le serveur vient de recevoir mon message dans le websocket.
    Il va renvoyer à tous les clients connectés (y compris moi !) ce message.

10. **Le client passe donc dans la fonction de callback passée à socket.on('send_message')**
    (dans le case CONNECT_WEBSOCKET du middleware chat)

11. **Une action ADD_MESSAGE y est dispatchée.**
    Elle prend en paramètre le message envoyé par le serveur.
    Cette action traverse tous les middlewares sans emcombre.

12. L'action ADD_MESSAGE arrive dans le reducer.
Le message est ajouté au tableau de messages dans le state.
