//////////////////////////////////////////////////////
//DOM
// header
const navEl = document.getElementsByClassName("section-nav")[0].classList;
const secondaryTextEl = document.getElementsByClassName(
  "secondary-logo-text"
)[0].classList;
const logoTextEl = document.getElementsByClassName("logo-text")[0].classList;
// ///////////////
const searchBarEl =
  document.getElementsByClassName("section-search-bar")[0].classList;
const filterEl = document.getElementsByClassName("section-filter")[0].classList;
const prodSectionEl = document.getElementsByClassName(
  "section-products-catalog"
)[0].classList;

// Navigation
const cartEl = document.getElementsByClassName("cart-icon-container")[0]
  .classList;
const prodlinkEl = document.getElementsByClassName("link")[0].classList;
const shopingCartEl = document.getElementsByClassName("link")[1].classList;
document.getElementsByClassName("link")[1].classList;
// precheckout page
const preChekOutHedEl = document.getElementsByClassName(
  "cart-precheckout--heading"
)[0];
const precheckoutSectionEl = document.getElementsByClassName(
  "section-cart--precheckout"
)[0].classList;
export const navigateToProductPage = () => {
  preChekOutHedEl.style.display = "none";
  prodlinkEl.add("active");
  searchBarEl.remove("hide");
  filterEl.remove("hide");
  prodSectionEl.remove("hide");
  precheckoutSectionEl.add("hide");
  cartEl.remove("hide");
  shopingCartEl.add("hide");
  navEl.remove("checkout-active");

  //hide  secondary logo text
  logoTextEl.remove("hide");
  //show logo text
  secondaryTextEl.add("hide");
};
export const navigateToCheckout = () => {
  // hide product page
  searchBarEl.add("hide");
  filterEl.add("hide");
  prodSectionEl.add("hide");
  //show precheckout page
  precheckoutSectionEl.remove("hide");

  cartEl.add("hide");
  prodlinkEl.remove("active");
  shopingCartEl.remove("hide");
  shopingCartEl.add("active");
  navEl.add("checkout-active");

  //hide logo text
  logoTextEl.add("hide");
  //show secondary logo text
  secondaryTextEl.remove("hide");
};
//Search functionality
//Debounce wrapper to handle search query
function DebounceWrapper(fun, delay) {
  let timer;

  return function inner(event, state, searchView) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(event, state, searchView);
    }, delay);
  };
}
export const deBounceFunc = DebounceWrapper(function (
  event,
  state,
  searchView
) {
  const queryLength = event.target.value.length;
  const query = event.target.value;
  if (query.length > 0) {
    const itr = state.filterData.length > 0 ? state.filterData : state.data;
    const searchFilterData = itr.filter(
      (e) =>
        e.name.slice(0, queryLength).toLowerCase() === query.toLowerCase() ||
        e.type.slice(0, queryLength).toLowerCase() === query.toLowerCase() ||
        e.color.slice(0, queryLength).toLowerCase() === query.toLowerCase()
    );

    state.searchFilterData = searchFilterData;
    searchView.render();
  } else {
    state.searchFilterData = [];
    searchView.render();
  }
},
500);
//calculate total amount of the cart items
export const calcCartTotal = (state, cart) => {
  let totalAmount = cart.reduce(
    (acc, el) => acc + el.productName.price * el.quantity,
    0
  );
  state.cartTotal = totalAmount;
};
