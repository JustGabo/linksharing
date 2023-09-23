import { Github, Linkedin, Instagram, Youtube } from "lucide-react";
import React, { useContext } from "react";
import { LinksContext } from "../context/links";

interface Props {
  id: string;
  index: number;
}

type Plataform = "Youtube" | "Linkedin" | "Github" | "Instagram" | "none";

const selectedPlataform: Record<Plataform, JSX.Element | null> = {
  none: null,
  Youtube: <Youtube className="w-5 h-5 text-red-500" />,
  Linkedin: <Linkedin className="w-5 h-5 text-blue-500" />,
  Github: <Github className="w-5 h-5 text-gray-500" />,
  Instagram: <Instagram className="w-5 h-5 text-purple-400" />,
};

export function Link({ id, index }: Props) {
  const { links, removeLink, settingLink, settingPlataform } =
    useContext(LinksContext);

  const link = links.find((link) => link.id === id)!;

  const showingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Plataform;
    settingPlataform(value, link.id);
  };

  const handleLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    settingLink(e.target.value, link.id);
  };

  return (
    <div className="flex flex-col gap-5 p-4 border rounded-lg bg-gray-50">
      <header className="flex items-center justify-between">
        <p className="text-sm font-semibold">Link # {index + 1}</p>
        <button onClick={() => removeLink(id)} className="text-xs font-medium">
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
              onChange={(e) => showingChange(e)}
              className="border h-[40px] w-full text-sm font-medium rounded-lg outline-none px-8"
            >
              <option value="none">Select a plataform</option>
              <option value="Youtube">Youtube</option>
              <option value="Linkedin">Linkedin</option>
              <option value="Github">Github</option>
              <option value="Instagram">Instagram</option>
            </select>
            <div className="absolute top-[10px] left-2">
              {selectedPlataform[link.plataform as Plataform]}
            </div>
          </div>

          <label className="text-xs font-medium" htmlFor="link">
            Link
          </label>
          <input
            onChange={(e) => handleLink(e)}
            className="border  h-[40px] rounded-lg outline-none px-2 text-sm placeholder:text-sm"
            placeholder="Write your link"
            type="text"
          />
        </form>
      </main>
    </div>
  );
}
