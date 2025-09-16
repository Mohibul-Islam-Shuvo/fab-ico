import { writable } from 'svelte/store';
import { toast } from 'svelte-5-french-toast';

export const cart = writable([]);

export const addToCart = (product) => {
  cart.update((items) => {
    const item = items.find((i) => i.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    return items;
  });
  toast.success(`${product.name} added to cart`);
};

export const removeFromCart = (product) => {
  cart.update((items) => items.filter((i) => i.id !== product.id));
  toast.error(`${product.name} removed from cart`);
};