import ProductView from "../view/productsView";
import BtnView from "../view/btnView";
import { fetchProducts } from "../model/model";
import { state } from "../model/model";
import { createCartObject } from "../model/model";
import CartView from "../view/cartView";
import FilterView from "../view/filterView";
import CartPreCheckout from "../view/precheckoutCart";
import NavView from "../view/navView";
import SearchView from "../view/searchView";
import { calcCartTotal } from "../helper";
import {
  navigateToProductPage,
  navigateToCheckout,
  deBounceFunc,
} from "../helper";
/////////////////////////////////////////////////////

// precheckout page selector
const preChekOutHedEl = document.getElementsByClassName(
  "cart-precheckout--heading"
)[0];

/// //////////////////////////////////////////////////
//globals
let btnView;
const products = new ProductView();
let cartView = new CartView();
let filterView = new FilterView();
let navView = new NavView();
const cartPreCheckout = new CartPreCheckout();
const searchView = new SearchView();
///////////////////////////////////////

//Fetch products from API
const init = () => fetchProducts();
// Navigation handlers
const productNavHandler = () => {
  navigateToProductPage();
  state.preCheckoutPageActive = false;
  btnView.render(state);
  cartView.render(state.cart);
};

//add to cart handler
const addToCartHandler = (e) => {
  let freshCartItem = true;
  if (e.target.textContent === "Add to Cart") {
    state.increment = true;
  } else if (
    Array.from(e.target.classList).includes("plus--icon") ||
    e.target.attributes.name?.value === "plus--icon"
  ) {
    state.increment = true;
  } else if (
    Array.from(e.target.classList).includes("add") ||
    Array.from(e.target.parentElement?.classList).includes("add") ||
    Array.from(e.target.parentElement?.classList).includes("arrow-up")
  ) {
    //add from preCheckout page
    state.increment = true;
    state.renderPrechkoutPage = true;
  } else if (
    Array.from(e.target.classList).includes("minus--icon") ||
    e.target.attributes.name?.value === "minus--icon"
  ) {
    state.increment = false;
  } else {
    return;
  }
  let cartObj = createCartObject(
    state.data.filter((el) => Number(el.id) === Number(e.target.id))[0]
  );
  //delete from cart if product quantity is 0
  if (cartObj && cartObj.quantity === 0) {
    let updatedCart = state.cart.filter((e) => e.id !== cartObj.id);
    state.cart = updatedCart;
  }

  //if user cart is empty
  else if (state.cart.length === 0) {
    state.cart.push(cartObj);
  }
  // if cart is filled
  else {
    for (let i = 0; i < state.cart.length; i++) {
      if (state.cart[i]?.id === cartObj.id) {
        state.cart[i] = cartObj;
        freshCartItem = false;
      }
    }
    if (freshCartItem) {
      state.cart.push(cartObj);
    }
  }
  // calculate cart total amount
  calcCartTotal(state, state.cart);
  cartView.render(state.cart);
  if (state.preCheckoutPageActive) {
    cartPreCheckout.update(state.cart);
    return;
  }
  btnView.render(state);
};

//delete cart item handler from precheckoutCart view
const deleteCartItemHandler = (event) => {
  if (event.target.textContent === "Delete") {
    const updatedCart = state.cart.filter(
      (el) => Number(el.id) !== Number(event.target.id)
    );
    state.cart = updatedCart;
    calcCartTotal(state, state.cart);
    cartPreCheckout.render(state.cart);
  }
};

// cart click handler(navigate to pre checkout page)
const cartBtnClickHandler = (e) => {
  e.preventDefault();
  navigateToCheckout();
  preChekOutHedEl.style.display = "block";
  state.preCheckoutPageActive = true;
  cartPreCheckout.render(state.cart);
  cartPreCheckout.addToCartHandlerRender(addToCartHandler);
  cartPreCheckout.deleteCartItemHandlerRender(deleteCartItemHandler);
};

//filter handler
const filterHandler = (e) => {
  if (!state.filter.has(e.target.value)) {
    state.filter.set(e.target.value, 1);
  } else {
    state.filter.delete(e.target.value);
  }

  let filterCriteria = Array.from(state.filter.keys());
  let tempFilterdData = [];
  const filterToApply =
    state.searchFilterData.length > 0 ? state.searchFilterData : state.data;
  for (let i = 0; i < filterCriteria.length; i++) {
    for (let j = 0; j < filterToApply.length; j++) {
      if (Object.values(filterToApply[j]).includes(filterCriteria[i])) {
        tempFilterdData.push(filterToApply[j]);
      }
    }
  }

  if (filterCriteria.includes("0-₹250")) {
    let filterByPrice = filterToApply.filter((e) => e.price <= 250);
    tempFilterdData = [...tempFilterdData, ...filterByPrice];
  }
  if (filterCriteria.includes("₹251-₹450")) {
    let filterByPrice = filterToApply.filter(
      (e) => e.price > 250 && e.price <= 450
    );
    tempFilterdData = [...tempFilterdData, ...filterByPrice];
  }
  if (filterCriteria.includes("₹450")) {
    let filterByPrice = filterToApply.filter((e) => e.price > 450);
    tempFilterdData = [...tempFilterdData, ...filterByPrice];
  }
  state.filterData = tempFilterdData;

  filterView.render(state.filterData);
  //reset to original state if there are no filters
  if (state.filter.size === 0) {
    btnView.render();
    return;
  }
};
//mobile filter btn click handler
const filterBtnClickHandler = () => {
  document
    .getElementsByClassName("section-filter")[0]
    .classList.add("section-filter--active");
};
// close mobile filter
const filterCloseHandler = () => {
  document
    .getElementsByClassName("section-filter")[0]
    .classList.remove("section-filter--active");
};

//search query
const searchIpHandler = (event) => {
  //debounce function decorator declared in helper.js
  state.queryString = event.target.value;
  deBounceFunc(event, state, searchView);
};
searchView;
init().then((el) => {
  const { data } = state;
  if (data.length > 0) {
    products.render(data.slice(0, 6));
  }
  btnView = new BtnView();
  btnView.addToBtnHandlerRender(addToCartHandler);
  filterView.filterSelectHandlerRender(filterHandler);
  filterView.mobileFilterBtnHandler(filterBtnClickHandler);
  filterView.mobileFilterCloseHandler(filterCloseHandler);
  cartView.cartBtnHandlerRedner(cartBtnClickHandler);
  navView.productViewLinkHandlerRender(productNavHandler);
  searchView.searchHandlerRender(searchIpHandler);
});
