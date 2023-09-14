import { useContext } from "react";
import { Link } from "../components/link";
import { LinksContext } from "../context/links";

export interface Link {
  id: string;
  plataform: string;
  link: string;
}

export function Customize() {
  const { links, createNewLink } = useContext(LinksContext);

  return (
    <div className=" h-[550px] m-auto flex items-center justify-between relative">
      <div className="flex flex-col flex-1 h-[100%]  p-10 border rounded-lg">
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

        {links.length > 0 && (
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
        )}
      </div>
    </div>
  );
}
