// import ProductView from "./productsView";
import BtnView from "./btnView";
class FilterView extends BtnView {
  constructor() {
    super();
    this._parentElement = document.getElementsByClassName(
      "section-products-catalog"
    )[0];
  }
  filterSelectHandlerRender(handler) {
    let doms = Array.from(document.querySelectorAll("input")).slice(1);
    doms.forEach((e) => {
      e.addEventListener("change", handler);
    });
  }
  mobileFilterBtnHandler(handler) {
    const filterBtn = document.getElementsByClassName(
      "filter-icon-container"
    )[0];
    filterBtn.addEventListener("click", handler);
  }
  mobileFilterCloseHandler(handler) {
    document
      .getElementsByClassName("close-btn--container")[0]
      .addEventListener("click", handler);
  }
}
export default FilterView;
