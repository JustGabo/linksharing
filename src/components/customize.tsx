import { useContext } from "react";
import { Link } from "../components/link";
import { Mock } from "../components/mock";
import { LinksContext } from "../context/links";

export interface Link {
  id: string;
  plataform: string;
  link: string;
}

export function Customize() {
  const { links, createNewLink } = useContext(LinksContext);

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
            onClick={(e) => createNewLink(e)}
            className="w-full text-purple-500 text-sm mt-10 font-semibold h-[40px] border border-purple-400 rounded-md"
          >
            + Add new link
          </button>
        </div>
        <main className="flex flex-col gap-4 overflow-y-auto ">
          {links.map((link, i) => (
            <Link key={link.id} id={link.id} index={i} />
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
