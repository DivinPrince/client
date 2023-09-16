import { categories } from "@/constants";

async function getCategory(categoryId:string) {
   const category = categories.find(item => item.id === categoryId)
   return category
}

export default getCategory