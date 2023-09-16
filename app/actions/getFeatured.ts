import { products } from "@/constants"

async function getFeatured() {
   const featured = products.filter(item => item.featured)

   return featured
}
export default getFeatured