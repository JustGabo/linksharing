import { createContext, useState } from "react";
interface Props {
  children?: React.ReactNode;
}

type Plataform = "Youtube" | "Linkedin" | "Github" | "Instagram" | "none";

interface Link {
  id: string;
  plataform: Plataform;
  link: string
}

interface LinksState {
  links: Link[];
  createNewLink: (e: React.MouseEvent<HTMLButtonElement>) => void;
  removeLink: (id: string) => void;
  settingPlataform: (plataform: Plataform, id: string) => void;
  settingLink: (incommingLink: string, id: string) => void;
}

const intialState = {
  links: [],
  createNewLink: () => {},
  removeLink: () => {},
  settingPlataform: () => {},
  settingLink: () => {},
};

export const LinksContext = createContext<LinksState>(intialState);

export const LinksProvider = ({ children }: Props) => {
  const [links, setLinks] = useState<Link[]>([]);

  const handleCreateNewLink = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newLink: Link = {
      id: crypto.randomUUID(),
      plataform: "none",
      link: "",
    };
    setLinks([...links, newLink]);
  };

  const handleRemoveLink = (id: string) => {
    const newLinks = links.filter((link) => link.id !== id);
    setLinks(newLinks);
  };

  const settingPlataform = (plataform: Plataform, id: string) => {
    setLinks((prev) => {
      const newArr = prev.map((link) => {
        if (link.id === id) {
          link.plataform = plataform;
        }
        return link;
      });
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
      return newArr;
    });
  };



  const value: LinksState = {
    links,
    createNewLink: handleCreateNewLink,
    removeLink: handleRemoveLink,
    settingPlataform,
    settingLink,
  };

  return (
    <LinksContext.Provider value={value}>{children}</LinksContext.Provider>
  );
};
