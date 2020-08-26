import './views/screens/login.js';
import './views/screens/resister.js';
import "./views/components/form-input.js";
import "./views/components/con-list.js";
import "./views/components/con-form.js"
import "./stopClick.js"
import "./views/components/con-item.js"
import "./views/components/message.js"

import "./models/auth.js";
import "./views/screens/chat.js";

const screenMap = {
    login: "<login-screen></login-screen>",
    register: "<register-screen></register-screen>",
    chat: "<chat-screen></chat-screen>",
};

const setScreen = (screenName) => {
    document.getElementById("app").innerHTML = screenMap[screenName];
};

setScreen("login");

export { setScreen };

