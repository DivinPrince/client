import { products } from "@/constants";

async function getProductById(productId: string) {
   const product = products.find((item) => item.id == productId);
   return product
}

export default getProductById