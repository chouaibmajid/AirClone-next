import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className="grid grid-cols-3 sticky bg-white md:px-12 shadow-xl top-0 z-50 px-5 py-5">
      {/* gauche   */}
      <div className="relative h-10 flex items-center  ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* milieu   */}
      <div className="flex items-center px-1  border-gray-300 rounded-full py-2  md:border-2 md:shadow-sm">
        <input
          type="text"
          className="flex-grow pl-5 text-sm text-gray-600 bg-transparent outline-none "
          placeholder="start your search"
        />
        <SearchIcon className="h-8 w-8 text-white bg-red-300 rounded-full p-1 hidden md:inline-flex md:mx-2" />
      </div>
      {/* droite   */}
      <div className="flex text-gray-600 justify-end items-center space-x-3">
        <div className="md:flex items-center space-x-2 hidden ">
          <p> become a host</p>
          <GlobeAltIcon className="h-8" />
        </div>
        <div className="flex border border-gray-200 p-1 rounded-2xl">
          <MenuIcon className="h-8" />
          <UserCircleIcon className="h-8" />
        </div>
      </div>
    </header>
  );
}

export default Header;
