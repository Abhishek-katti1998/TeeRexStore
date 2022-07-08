import View from "./view";
class NavView extends View {
 
  productViewLinkHandlerRender(handler) {
    document
      .getElementsByClassName("link")[0]
      .addEventListener("click", handler);
  }
  shopingCartLinkHandlerRender(handler) {
    document
      .getElementsByClassName("link")[1]
      .addEventListener("click", handler);
  }
}
export default NavView;
