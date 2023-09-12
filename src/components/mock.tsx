// import {type Link} from '../components/customize'
import {LinksContext} from '../context/links'
import {useContext} from 'react'
import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

type Icon = "Youtube" | "Linkedin" | "Github" | "Instagram" | "none";


const colors: Record<string, string> = {
    Youtube: '#FF0000',
    Github: '#000000',
    Instagram: '#E1306C',
    Linkedin: '#0072b1',
}

const selectedIcon: Record<Icon, JSX.Element | null> = {
    none: null,
    Youtube: <Youtube className="w-4 h-4 text-white"/>,
    Linkedin: <Linkedin className="w-4 h-4 text-white"/>,
    Github: <Github className="w-4 h-4 text-white"/>,
    Instagram: <Instagram className="w-4 h-4 text-white"/>,
  };
  

export function Mock (){

    const {links} = useContext(LinksContext)

    return (
        <div className="border rounded-lg w-[40%] h-[550px]">
            <h1>Mock</h1>
            <div className="border-2 flex items-center p-4 justify-center rounded-2xl h-[90%] w-[45%] m-auto">
                <div className="flex flex-col w-full gap-3 text-xs font-medium ">
                    {links.map((link, index)=>{
                        return (
                            <div className={`p-2 text-xs border text-white gap-2 bg-[${colors[link.plataform]}] rounded-md flex items-center h-[40px]`} key={index}>
                                <div>{selectedIcon[link.plataform]}</div>
                                <p>{link.plataform}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}