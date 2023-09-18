import { Link } from "react-router-dom";
import { PlusCircle} from "lucide-react";

export const Landing = () => {
  return (
    <div className="mt-8 w-[95%] m-auto">
      <header className="flex items-center justify-between mb-44">
        <div>
          <h1 className="text-3xl font-bold">Link</h1>
        </div>

        <div className="flex gap-4">
          {/* <Link
            to={"/search"}
            className=" flex items-center justify-center text-purple-500 text-sm font-semibold h-[40px]  rounded-md"
          >
            <Search />
          </Link> */}
          <Link
            to={"/create"}
            className=" flex items-center justify-center text-purple-500 text-sm font-semibold h-[40px]  rounded-md"
          >
            <PlusCircle />
          </Link>
        </div>
      </header>

      <main>
        <div>
          <h2 className="text-7xl font-semibold text-purple-500 w-[40%]">
            Create your own linktree
          </h2>
        </div>
      </main>
    </div>
  );
};

export default Landing;
