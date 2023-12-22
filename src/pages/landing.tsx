import { Link } from "react-router-dom";
// import { PlusCircle} from "lucide-react";
import {footer as Footer} from '../components/footer'
import CustomizeImage from '../images/image.png'
// import ProfileImage from '../images/image3.png'
import PreviewImage from '../images/image4.png'

export const Landing = () => {
  return (
    <div className="pt-8 pb-16 w-[95%] m-auto">
      <header className="flex items-center justify-between mb-36 md:mb-4">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Link</h1>
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
            className=" flex items-center bg-purple-200 justify-center text-purple-600 w-[100px] text-xs font-semibold h-[35px]  rounded-md"
          >
            Create
          </Link>
        </div>
      </header>

      

      <main className="grid items-center md:grid-cols-[55%,1fr]">
        <div className="flex flex-col gap-5">
          <h2 className="text-5xl  md:text-7xl font-semibold text-purple-500 w-[85%] md:w-[100%]">
            Create your own <span className="text-black">linktree</span>
          </h2>
          <p className="md:text-sm text-xs text-black w-[90%] md:w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel in eligendi voluptatem quaerat accusamus pariatur reprehenderit dicta, nihil vitae dignissimos odit quia eos perspiciatis id molestiae? Iusto, quo officia.</p>
        </div>
        <div className="hidden gap-2 p-2 md:grid ">
        <img className="w-[94%] ml-auto" src={CustomizeImage} alt="" />
        <img className="w-[94%]" src={PreviewImage} alt="" />
        {/* <img className="w-[60%]" src={ProfileImage} alt="" /> */}
        </div>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Landing;
