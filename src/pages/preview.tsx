import { Link } from "react-router-dom";
import { Mock } from "../components/mock-preview";

export const Preview = () => {
  return (
    <div className="pt-8 w-[95%] m-auto">
      <header className="flex items-center justify-between p-4 mb-8 border rounded-lg shadow-md">
        <Link
          to={"/create"}
          className="w-[120px] flex items-center justify-center text-purple-500 text-sm font-semibold h-[40px] border-[1.6px] border-purple-400 rounded-md"
        >
          Back to Editor
        </Link>
        <button className="w-[120px] flex items-center justify-center text-purple-500 text-sm font-semibold h-[40px] border-[1.6px] border-purple-400 rounded-md">
          Share Link
        </button>
      </header>

      <main>
        <div className="w-[19%] m-auto">
          <Mock />
        </div>
      </main>
    </div>
  );
};

export default Preview;
