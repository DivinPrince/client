import getCategories from "@/actions/get-categories";
import MainNav from "./MainNav";
import MainMobi from "./MainMobi";

const Mobi = async () => {
  const categories = await getCategories();
  return <MainMobi data={categories}/>;
};

export default Mobi;
