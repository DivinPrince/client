import { products } from "@/constants";

async function getProductByCategory(name:string) {
   const product = products.filter((item) => item.category.includes(name));
   return product;
}
export default getProductByCategory