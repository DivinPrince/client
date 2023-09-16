export type Product = {
  id: string;
  name: string;
  price: number;

  image: string

  featured: boolean;
  category: string[];

  details: string
};
export type cartProduct = Product&{
  quantity: number
}
export interface Size {
  id: string;
  name: string;
  value: string;
};

export interface Color {
  id: string;
  name: string;
  value: string;
};