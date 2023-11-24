import { writable, derived } from "svelte/store";
import { browser } from "$app/environment";

export const openCart = writable(false);
export const cart = writable<Product[]>([]);
export const totalCartPrice = derived(cart, ($cart) =>
  $cart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2)
);

let cartItems: any;

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  totalPrice: number;
};

if (browser) {
  cartItems = localStorage.getItem("cartItems");
}

if (cartItems) {
  cart.set(JSON.parse(cartItems));
}

if (browser) {
  cart.subscribe((value: Product[]) => {
    value.forEach((item) => {
      if (item.quantity < 1) {
        item.quantity = 1;
      } 
    });
    localStorage.setItem("cartItems", JSON.stringify(value));
  });
}
export function increaseQuantity(id: number) {
  cart.update((items) => {
    return items.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + 1;
        const newTotalPrice = (item.price * newQuantity).toFixed(2);
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: parseFloat(newTotalPrice),
        };
      }
      return item;
    });
  });
}

export function decreaseQuantity(id: number) {
  cart.update((items: Product[]) => {
    return items.map((item) => {
      if (item.id === id && item.quantity > 1) {
        const newQuantity = item.quantity - 1;
        const newTotalPrice = (item.price * newQuantity).toFixed(2);
        return {
          ...item,
          quantity: newQuantity,
          totalPrice: parseFloat(newTotalPrice),
        };
      }
      return item;
    });
  });
}

export function removeFromCart(id: number) {
  cart.update((items) => {
    return items.filter((item) => item.id !== id);
  });
}

export function addToCart(product: Product) {
    cart.update(items => {
      const existingProduct = items.find(item => item.id === product.id);
      if (existingProduct) {
        // Product is already in the cart, increase quantity
        return items.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1} 
            : item
        );
      } else {
        // Product is not in the cart, add it
        return [...items, { ...product, quantity: 1, totalPrice: product.price }];
      }
    });
  }