import "regenerator-runtime/runtime";
export const state = {
  data: [],
  cart: [],
  cartTotal: 0,
  increment: true,
  filter: new Map(),
  filterData: [],
  searchFilterData: [],
  preCheckoutPageActive: false,
  queryString: "",
};
export const fetchProducts = async () => {
  try {
    const promise = await fetch(
      ` https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json `
    );
    const data = await promise.json();
    state.data = data;
  } catch (err) {
    alert("failed to fetch from the requested resource");
    // console.error(`${err}`);
  }
};
export const createCartObject = (product) => {
  let obj = {};
  if (state.cart.length === 0) {
    return {
      quantity: 1,
      id: product.id,
      productName: product,
      cartQuantGrtProdQunt: product.quantity === 0 ? true : false,
    };
  } else {
    let cartItem = state.cart.find((e) => e.id === product.id);

    if (cartItem) {
      obj.quantity = state.increment
        ? cartItem.quantity + 1
        : cartItem.quantity - 1;
      obj.id = cartItem.id;
      obj.productName = cartItem.productName;
      obj.cartQuantGrtProdQunt = obj.quantity > product.quantity ? true : false;
    } else {
      obj.quantity = 1;
      obj.id = product.id;
      obj.productName = product;
      obj.cartQuantGrtProdQunt = product.quantity === 0 ? true : false;
    }
  }
  return obj;
};
