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
}
const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product, quantity: number) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast('Item already in the cart');
      }

      set({ items: [...get().items, { ...data, quantity }] });
      toast.success('Item added to cart.');
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success('Item removed from cart.');
    },
    toogleCartItemQuantity(id, value) {
      const currentItems = get().items;
      let foundProduct = currentItems.find((item) => item.id === id);
      let index = currentItems.findIndex((product) => product.id === id);
      if (!foundProduct) {
        return
      }
      if (value === "inc") {
        foundProduct.quantity++
        currentItems[index] = foundProduct
        set({ items: [...get().items] })
      } else if (value === "dec") {
        foundProduct.quantity--
        currentItems[index] = foundProduct
        set({ items: [...get().items] })
      }
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  }));

export default useCart;
