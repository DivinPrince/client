import getCategories from "@/actions/get-categories";
import MainNav from "./MainNav";
interface NavProps {}
const Nav: React.FC<NavProps> = async ({}) => {
  const categories = await getCategories();
  return <MainNav data={categories} />;
};
export default Nav;
