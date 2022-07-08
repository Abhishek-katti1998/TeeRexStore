import { mark } from "regenerator-runtime";
import { state } from "../model/model";
import View from "./view";
class BtnView extends View {
  constructor() {
    super();
    this._parentElement = document.getElementsByClassName(
      "section-products-catalog"
    )[0];
  }
  addToBtnHandlerRender(handler) {
    this._parentElement.addEventListener("click", handler);
  }
  generateMarkup() {
    let markup = [];
    let itr =
      state.searchFilterData.length > 0
        ? state.searchFilterData
        : state.data.slice(0, 6);
    if (state.filterData.length) {
      itr = state.filterData;
    }
    if (state.queryString && state.searchFilterData.length === 0) {
      markup.push('<p class="noresults--message">No results found :(</p>');
      return markup;
    }
    itr.forEach((el) => {
      let pushed = false;
      for (let i = 0; i < state.cart.length; i++) {
        if (el.id === state.cart[i].id) {
          markup.push(` <article class="product-card">
                        <div class="product">
                            <p class="product-name">${el.name}</p>
                            <img  class="product-image" src=${
                              el.imageURL
                            } alt=${el.name}image>
                        
                        </div>
                        <div class="product-description">
                            <p class="product-price">₹ ${el.price}</p>
                            <button class="add--btn" id=${el.id}>
                                  ${
                                    state.cart[i]?.quantity
                                      ? `<div class="secondary--content" id=${el.id}> 
                                        <svg id=${el.id} class="plus--icon" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                         <path name="plus--icon" id=${el.id} fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                                         </svg>
                                               <p class="btn-cart--quantity">${state.cart[i].quantity}</p>
                                    <svg id=${el.id} xmlns="http://www.w3.org/2000/svg" class="minus--icon" viewBox="0 0 20 20" fill="currentColor">
                                 <path id=${el.id} name ="minus--icon" fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                                       </svg>                                              
                                        </div>`
                                      : `<p class="primary--content" id=${el.id}>Add to Cart</p>`
                                  }
                       
                            </button>
                        </div>
                        ${
                          state.cart[i]?.cartQuantGrtProdQunt
                            ? "<p class='errorMessage'>cart exceeds limit!</p>"
                            : ""
                        }
                        
               </article>`);
          pushed = true;
        }
      }
      if (!pushed) {
        markup.push(` <article class="product-card">
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
               </article>`);
      }
    });
    return markup;
  }
}
export default BtnView;
