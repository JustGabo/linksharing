import { Github, Linkedin, Instagram, Youtube } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Props {
  id: string;
  removeLink: (id: string) => void;
  setPlataform: (plataform: string, id: string) => void;
  setlink: (link: string, id: string) => void;

  index: number;
}

type Icon = "Youtube" | "Linkedin" | "Github" | "Instagram" | "none";

export function Link({ id, removeLink, index, setPlataform, setlink }: Props) {
  const selectedIcon: Record<Icon, JSX.Element | null> = {
    none: null,
    Youtube: <Youtube className="w-5 h-5 text-red-500" />,
    Linkedin: <Linkedin className="w-5 h-5 text-blue-500" />,
    Github: <Github className="w-5 h-5 text-gray-500" />,
    Instagram: <Instagram className="w-5 h-5 text-purple-400" />,
  };

  const [selectedPlataform, setselectedPlataform] = useState<Icon>("none");
  const [link, setLink] = useState<string>("");

  const showingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Icon;
    setselectedPlataform(value);
  };

  const handleLink = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setLink(e.target.value)
  }

  useEffect(()=>{
    console.log(selectedPlataform)
  },[selectedPlataform])

  return (
    <div className="flex flex-col gap-5 p-4 border rounded-md bg-gray-50">
      <header className="flex items-center justify-between">
        <p className="text-sm font-semibold">Link # {index + 1}</p>
        <button onClick={() => removeLink(id)} className="text-sm font-medium">
          Remove
        </button>
      </header>

      <main>
        <form className="flex flex-col w-full gap-2">
          <label htmlFor="plataform" className="text-xs font-medium">
            Plataform
          </label>
          <div className="relative">
            <select
              onChange={(e)=>{
                showingChange(e)
                setPlataform(selectedPlataform, id)
              }}
              className="border h-[40px] w-full text-sm font-medium rounded-md outline-none px-8"
              name=""
              id=""
            >
              <option value="none">Select a plataform</option>
              <option value="Youtube">Youtube</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Github">Github</option>
              <option value="Instagram">Instagram</option>
            </select>
            <div className="absolute top-[10px] left-2">
              {selectedIcon[selectedPlataform]}
            </div>
          </div>

          <label className="text-xs font-medium" htmlFor="link">
            Link
          </label>
          <input
          onChange={
            (e)=>{
                handleLink(e)
                setlink(link, id)
            }
          }
            className="border  h-[40px] rounded-md outline-none px-2 text-sm placeholder:text-sm"
            placeholder="Write your link"
            type="text"
          />
        </form>
      </main>
    </div>
  );
}
