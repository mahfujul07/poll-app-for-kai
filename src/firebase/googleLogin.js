import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const GoogleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var user = result.user;
      return user;
    })
    .catch(function (error) {});
};
