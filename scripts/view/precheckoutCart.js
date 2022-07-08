import View from "./view";
import { state } from "../model/model";
class CartPreCheckout extends View {
  constructor() {
    super();
    this._parentElement = document.getElementsByClassName(
      "section-cart--precheckout"
    )[0];
  }
  configureListener(handler) {
    document
      .getElementsByClassName("section-cart--precheckout")[0]
      .addEventListener("click", handler);
  }
  generateMarkup() {
    return this._data.map((e, index) => {
      if (index === this._data.length - 1) {
        return `
           <div class="cart-precheckout--container">
                <div class="cart-precheckout">
                    <img class="cart-precheckout--image" src="${e.productName.imageURL}">
                    <div class="cartprecheckout--description">
                        <p class="cartprecheckout--name">${e.productName.name}</p>
                        <p class="cartprecheckout--price">Rs ${e.productName.price}</p>
                    </div>
                
                    <div class="cartprechekout-btn--container">
                        <button class="cart-checkout--btn add" id=${e.productName.id}>
                            <p id=${e.productName.id}>Qty:${e.quantity}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" id=${e.productName.id} class="arrow-up" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path id=${e.productName.id} stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                            </svg>
                        </button>
                        <button id=${e.productName.id} class="cart-checkout--btn delete">Delete</button>
                    </div>
            </div>  
             <div class="price-total">
            <p class="total-price--heading">Total</p>
                <p class="total-amount">Rs ${state.cartTotal}</p>
                </div>
              
        </div> 
              `;
      } else {
        return `
           <div class="cart-precheckout--container">
                <div class="cart-precheckout">
                    <img class="cart-precheckout--image" src="${e.productName.imageURL}">
                    <div class="cartprecheckout--description">
                        <p class="cartprecheckout--name">${e.productName.name}</p>
                        <p class="cartprecheckout--price">Rs ${e.productName.price}</p>
                    </div>
                
                    <div class="cartprechekout-btn--container">
                        <button class="cart-checkout--btn add" id=${e.productName.id}>
                            <p id=${e.productName.id}>Qty:${e.quantity}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" id=${e.productName.id} class="arrow-up" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path id=${e.productName.id} stroke-linecap="round" stroke-linejoin="round" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                            </svg>
                        </button>
                        <button id=${e.productName.id} class="cart-checkout--btn delete">Delete</button>
                    </div>
            </div>  
              
        </div> 
              `;
      }
    });
  }
  addToCartHandlerRender(handler) {
    this.configureListener(handler);
  }
  deleteCartItemHandlerRender(handler) {
    this.configureListener(handler);
  }
}
export default CartPreCheckout;
