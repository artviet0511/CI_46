import { setScreen } from ".././index.js"

firebase.auth().onAuthStateChanged(function (user) {
    // console.log(user);
    if (user && user.emailVerified) {
        setScreen("chat");
    } else {
        setScreen("login");
    }
});