import { Link } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export const Search = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mt-8 w-[95%] m-auto">
      <header className="flex items-center justify-between mb-5">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">Link</h1>
        </Link>

        {isActive ? (
          <form action="" className="flex items-center gap-2">
            <input
              className="p-2 px-4 text-sm text-gray-600 border-2 rounded-md outline-none placeholder:text-black"
              type="text"
              placeholder="Search"
            />
            <button  className="bg-purple-100 w-[60px] h-[40px] rounded-md flex items-center justify-center">
              <SearchIcon strokeWidth={1.2} className="w-[25px] h-[25px]" />
            </button>
          </form>
        ) : (
          <button onClick={()=> setIsActive(true)} className=" flex items-center justify-center text-purple-500 text-sm font-semibold h-[40px]  rounded-md">
            <SearchIcon strokeWidth={1.2} className="w-[25px] h-[25px]"/>
          </button>
        )}
      </header>

      <main>
        <h2>Search for profiles</h2>
      </main>
    </div>
  );
};

export default Search;
