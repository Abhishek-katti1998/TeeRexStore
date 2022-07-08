import View from "./view";

import "regenerator-runtime/runtime";
class ProductView extends View {
  constructor() {
    super();
    this._parentElement = document.getElementsByClassName(
      "section-products-catalog"
    )[0];
  }
  generateMarkup() {
    if (this._data.length === 0) {
      return [`<p class="noresults--message">No results found :(</p>`];
    } else {
      return this._data.map((el) => {
        return ` <article class="product-card">
                        <div class="product">
                            <p class="product-name">${el.name}</p>
                            <img  class="product-image" src=${el.imageURL} alt=${el.name}image>
                        
                        </div>
                        <div class="product-description">
                            <p class="product-price">₹ ${el.price}</p>
                            <button class="add--btn" id=${el.id}>
                               <p class="primary--content" id=${el.id}>Add to Cart</p>
                            </button>
                        </div>
               </article>`;
      });
    }
  }
}
export default ProductView;
