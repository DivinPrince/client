
import getCategories from '@/actions/get-categories';
import MainNav from './MainNav';
interface NavProps { }
const Nav: React.FC<NavProps> = async ({ }) => {
   const categories = await getCategories();
   return (
      <div className='w-0 md:w-fit overflow-hidden fixed left-0'>
         <div className='p-5 bg-gray-100 dark:bg-neutral-800/30 mt-2 w-[250px] rounded-r-lg h-[98vh]'>
            <MainNav data={categories} />
         </div>
      </div>
   )
}
export default Nav