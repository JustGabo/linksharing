import { useState } from "react";
import { Customize } from "../components/customize";
import { Personal } from "../components/personal";
import { Mock } from "../components/mock";
import { Link } from "react-router-dom";
import {footer as Footer} from '../components/footer'

export function Create() {
  const [isActive, setIsActive] = useState("link");

  return (
    <div className="mt-8">
      <div className="w-[95%] mb-16 lg:mb-10 m-auto flex justify-between relative  items-center">
        <div>
          <Link to={'/'}>
            <h1 className="text-3xl font-bold">Link</h1>
          </Link>
        </div>

        <div className="absolute lg:relative flex items-center w-[50%] lg:w-[48%]   m-auto lg:top-0   top-12 left-0 right-0 gap-3 lg:ml-24 justify-end 
        ">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsActive("link");
            }}
            className={`${
              isActive == "link"
                ? "bg-purple-200 text-purple-600"
                : "bg-transparent text-gray-600"
            } lg:text-sm text-xs font-semibold w-[80px] lg:w-[120px]  h-[30px] rounded-lg`}
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
            } lg:text-sm text-xs font-semibold w-[120px]  h-[30px] rounded-lg`}
          >
            Profile Details
          </button>
        </div>
        <Link
          to={"/preview"}
          className="w-[80px] lg:w-[120px] flex items-center justify-center text-purple-500 text-xs lg:text-sm font-semibold h-[30px] lg:h-[40px] border-[1.6px] border-purple-400 rounded-lg"
        >
          Preview
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[40%,1fr] items-center h-[calc(100vh-200px)] w-[95%] m-auto gap-6">
        <Mock />
        <div className="">
          {isActive == "link" ? <Customize /> : <Personal />}
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
