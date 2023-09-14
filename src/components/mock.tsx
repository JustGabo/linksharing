// import {type Link} from '../components/customize'
import { LinksContext } from "../context/links";
import { useContext, useState } from "react";
import { Github, Linkedin, Instagram, Youtube, Link } from "lucide-react";
import { ProfileContext } from "../context/profile-Context";

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
  const [image, setImage] = useState("https://picsum.photos/200")

  return (
    <div className="grid h-[550px] overflow-y-auto border  rounded-lg place-items-center">
      <div className="border-2 flex flex-col  border-black items-center p-4  rounded-2xl h-[90%] w-[45%] m-auto">
        <div className="flex flex-col items-center gap-3 h-[40%]">
          <img src={image} className="bg-gray-200 w-[100px] aspect-square rounded-full"/>
          {profileDetails.firstName ? (
            <p className="text-sm font-medium">{profileDetails.firstName} {profileDetails.lastName}</p> 
          ) : (
            <div className="w-[130px] h-[9px] rounded-lg bg-gray-200"></div>
          )}
          {profileDetails.email ? (
            <p className="text-xs text-gray-400">{profileDetails.email}</p>
          ) : (
            <div className="w-[70px] h-[7px] rounded-lg bg-gray-200"></div>
          )}
        </div>
        <div className="flex flex-col flex-1 w-full gap-3 overflow-y-auto text-xs font-medium">
          {links.map((link, index) => {
            return (
              <a
                className={`p-2 text-xs border text-white gap-2 bg-[${
                  colors[link.plataform]
                }] rounded-md flex items-center h-[40px] hover:-translate-y-0.5 transition`}
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
