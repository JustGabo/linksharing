import { useState } from "react";
import { Customize } from "../components/customize";
import { Personal } from "../components/personal";
import { Mock } from "../components/mock";
import { Link } from "react-router-dom";

export function Create() {
  const [isActive, setIsActive] = useState("link");

  return (
    <div className="mt-8">
      <div className="w-[95%] mb-10 m-auto flex justify-between items-center">
        <div>
          <Link to={'/'}>
            <h1 className="text-3xl font-bold">Link</h1>
          </Link>
        </div>

        <div className="flex items-center gap-3 ml-9">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsActive("link");
            }}
            className={`${
              isActive == "link"
                ? "bg-purple-200 text-purple-600"
                : "bg-transparent text-gray-600"
            } text-sm font-semibold w-[120px] h-[30px] rounded-md`}
          >
            Links
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsActive("profile");
            }}
            className={`${
              isActive == "profile"
                ? "bg-purple-200 text-purple-600"
                : "bg-transparent text-gray-600"
            } text-sm font-semibold w-[120px] h-[30px] rounded-md`}
          >
            Profile Details
          </button>
        </div>
        <Link
          to={"/preview"}
          className="w-[120px] flex items-center justify-center text-purple-500 text-sm font-semibold h-[40px] border-[1.6px] border-purple-400 rounded-md"
        >
          Preview
        </Link>
      </div>
      <div className="grid grid-cols-[40%,1fr] items-center h-[calc(100vh-200px)] w-[95%] m-auto gap-6">
        <Mock />
        <div className="">
          {isActive == "link" ? <Customize /> : <Personal />}
        </div>
      </div>
    </div>
  );
}
