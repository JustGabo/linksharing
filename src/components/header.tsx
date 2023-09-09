import { useState } from "react";
import { Customize } from "../components/customize";
import { Personal } from "../components/personal";

export function Header() {
  const [isActive, setIsActive] = useState("link");

  return (
    <div>
      <div className="w-[95%] m-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Link</h1>
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
        <button className="w-[120px] text-purple-500 text-sm font-semibold h-[40px] border-[1.6px] border-purple-400 rounded-md">
          Preview
        </button>
      </div>
      <main>{isActive == "link" ? <Customize /> : <Personal />}</main>
    </div>
  );
}
