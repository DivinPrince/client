import getCategories from "@/actions/get-categories";
import MainNav from "./MainNav";

const Mobi = async () => {
  const categories = await getCategories();
  return <MainNav data={categories}/>;
};

export default Mobi;
