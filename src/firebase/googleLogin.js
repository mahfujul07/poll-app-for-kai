import firebase from "firebase";
import "firebase/auth";

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
