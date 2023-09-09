import { useState, useEffect } from "react";
import { Link } from "../components/link";
import { Mock } from "../components/mock";

export interface Link {
    id: string;
    plataform: string;
    link: string
}

export function Customize() {
  const [links, setLinks] = useState([
    {
      id: crypto.randomUUID(),
      plataform: "",
      link: "",
    },
  ]);

  const handleCreateNewLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newLink = {
      id: crypto.randomUUID(),
      plataform: "",
      link: "",
    };
    setLinks([...links, newLink]);
  };

  const handleRemoveLink = (id: string) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
  };

  const settingPlataform = (plataform: string, id: string) => {
    setLinks((prev) => {
      const newArr = prev.map((link) => {
        if (link.id === id) {
          link.plataform = plataform;
        }
        return link;
      });
      setLinks(newArr);
      return newArr;
    });
  };

  const settingLink = (incommingLink: string, id: string) => {
    setLinks((prev) => {
      const newArr = prev.map((link) => {
        if (link.id == id) {
          link.link = incommingLink;
        }

        return link;
      });
      setLinks(newArr);
      return newArr;
    });
  };

  useEffect(() => {
    console.log(links);
  }, [links]);


  return (
    <div className=" w-[95%] m-auto flex items-center justify-between relative gap-7 mt-10">
      <Mock />
      <div className="border rounded-lg  h-[580px] flex-1 p-4 flex flex-col">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-3xl font-bold">Customize your links</h2>
          <p className="text-xs font-medium">
            Add/edit/remove links below and then share all your profiles with
            the world
          </p>

          <button
            onClick={(e) => handleCreateNewLink(e)}
            className="w-full text-purple-500 text-sm mt-10 font-semibold h-[40px] border border-purple-400 rounded-md"
          >
            + Add new link
          </button>
        </div>
        <main className="flex flex-col gap-4 overflow-y-auto ">
          {links.map((link, i) => (
            <Link
              setPlataform={settingPlataform}
              setlink={settingLink}
              removeLink={handleRemoveLink}
              key={link.id}
              id={link.id}
              index={i}
            />
          ))}

        </main>
        
        <div className="">
        <button
            onClick={() => {
              console.log(links);
            }}
            className="h-[40px] w-full border-2 mt-5 rounded-md text-sm font-medium"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
