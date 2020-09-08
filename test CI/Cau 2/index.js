import "./show-item/show-item.js";

const screenMap = {
    showitem: `<show-item src="https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg" name="Đời Thật Là Vui" author="Nguyễn Ích Việt"></show-item>`
}
const setScreen = (screenName) => {
    document.getElementById("show").innerHTML = screenMap[screenName];
};
setScreen("showitem");

export { setScreen }