// import {type Link} from '../components/customize'
import { LinksContext } from "../context/links";
import { useContext} from "react";
import { Github, Linkedin, Instagram, Youtube, Link } from "lucide-react";
import { ProfileContext } from "../context/profile-Context";
import {User2} from 'lucide-react'

type Icon = "Youtube" | "Linkedin" | "Github" | "Instagram" | "none";

const colors: Record<string, string> = {
  Youtube: "#FF0000",
  Github: "#000000",
  Instagram: "#E1306C",
  Linkedin: "#0072b1",
};

const selectedIcon: Record<Icon, JSX.Element | null> = {
  none: <Link className="w-4 h-4 text-black" />,
  Youtube: <Youtube className="w-4 h-4 text-white" />,
  Linkedin: <Linkedin className="w-4 h-4 text-white" />,
  Github: <Github className="w-4 h-4 text-white" />,
  Instagram: <Instagram className="w-4 h-4 text-white" />,
};

export function Mock() {
  const { profileDetails } = useContext(ProfileContext);
  const { links } = useContext(LinksContext);
  const {image}= useContext(ProfileContext)

  return (
    <div className="h-[450px] lg:h-[550px] overflow-y-auto ">
      <div className=" flex flex-col shadow-xl border drop-shadow-xl  border-gray-400  items-center p-4  rounded-2xl h-[90%] m-auto">
        <div className="flex flex-col items-center gap-2 lg:gap-3 h-[40%]">
          
          {image ? <img src={image} className="bg-gray-200 w-[50%] lg:w-[50%] object-cover aspect-square rounded-full"/> : <User2 color="#888" strokeWidth={.2} className="lg:w-[75%] w-[50%] border-gray-500 border-[1px] rounded-full h-[45%] lg:h-[50%] text-black"/>}
          {profileDetails.firstName ? (
            <p className="text-xs font-medium lg:text-sm">{profileDetails.firstName} {profileDetails.lastName}</p> 
          ) : (
            <div className="w-[100px] lg:w-[130px] h-[7px] lg:h-[9px] rounded-lg bg-gray-200"></div>
          )}
          {profileDetails.email ? (
            <p className="text-xs text-gray-400">{profileDetails.email}</p>
          ) : (
            <div className="w-[50px] lg:w-[70px] h-[5px] lg:h-[7px] rounded-lg bg-gray-200"></div>
          )}
        </div>
        <div className="flex flex-col flex-1 w-full gap-3 overflow-y-auto text-xs font-medium">
          {links.map((link, index) => {
            return (
              <a
                className={`p-2 text-xs border text-white gap-2 bg-[${
                  colors[link.plataform]
                }] rounded-lg flex items-center h-[30px] lg:h-[40px] hover:-translate-y-0.5 transition`}
                key={index}
                href={link.link}
                target="_blank"
                rel="noreferrer"
              >
                <div>{selectedIcon[link.plataform]}</div>
                {link.plataform === "none" ? (
                  <p className="text-black">{link.link}</p>
                ) : (
                  <p>{link.plataform}</p>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
