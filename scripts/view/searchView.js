import ProductView from "./productsView";
import BtnView from "./btnView";
class SearchView extends BtnView {
  constructor() {
    super();
    this._parentElement = document.getElementsByClassName(
      "section-products-catalog"
    )[0];
  }
  searchHandlerRender(handler) {
    document
      .getElementsByClassName("search-input")[0]
      .addEventListener("keyup", handler);
  }
}
export default SearchView;
