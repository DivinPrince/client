import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from '@/types';
import { AlertTriangle } from 'lucide-react';
import toast from 'react-hot-toast';
import { CartProduct } from '../types';

interface CartStore {
  items: CartProduct[];
  addItem: (data: Product, quantity: number) => void;
  removeItem: (id: string) => void;
  toogleCartItemQuantity: (id: string, value: string) => void;
  removeAll: () => void;
  totalQuantity: number;
  totalPrice: number;
}
let foundProduct;
let index;
const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    addItem: (data: Product, quantity: number) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);
      set({ totalQuantity: get().totalQuantity + quantity })
      set({ totalPrice: get().totalPrice + Number(data.price)})

      if (existingItem) {
        return toast('Item already in the cart');
      }
      
      set({ items: [...get().items, { ...data, quantity }] });
      toast.success('Item added to cart.');
    },
    removeItem: (id: string) => {
      const currentItems = get().items;
      foundProduct = currentItems.find((item) => item.id === id);
      if (foundProduct) {
        set({ totalQuantity: get().totalQuantity - foundProduct?.quantity })
      }
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success('Item removed from cart.');
    },
    toogleCartItemQuantity(id, value) {
      const currentItems = get().items;
      foundProduct = currentItems.find((item) => item.id === id);
      index = currentItems.findIndex((product) => product.id === id);
      if (!foundProduct) {
        return
      }
      if (value === "inc") {
        foundProduct.quantity++
        currentItems[index] = foundProduct
        set({ items: [...get().items] })
      } else if (value === "dec") {
        if (foundProduct.quantity > 1) {
          foundProduct.quantity--
          currentItems[index] = foundProduct
          set({ items: [...get().items] })
        }
      }
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  }));

export default useCart;
