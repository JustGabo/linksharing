import {createContext, useState} from 'react'

interface Props {
    children?: React.ReactNode;
}

interface LinkState {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>
}

const initialState = {
    state: 'link',
    setState: ()=>{}
}

export const ActiveSectContext = createContext<LinkState>(initialState)

export const ActiveSectProvider = ({children}: Props)=>{

    const [active, setActive] = useState('link')

    const value: LinkState = {
        state: active,
        setState: setActive
    }

    return (
        <ActiveSectContext.Provider value={value}>{children}</ActiveSectContext.Provider>
    )
}

// import React, { createContext, useState } from "react";

// interface Props {
//   children?: React.ReactNode;
// }

// interface ActiveState {
//   state: "link" | "profile";
//   setState: React.Dispatch<React.SetStateAction<string>>;
// }

// const initialState = {
//   state: "link",
//   setState: () => {},
// };

// export const ActiveSectContext = createContext<ActiveState>(initialState);

// export const ActiveSectProvider = ({ children }: Props) => {
//   const [state, setState] = useState(initialState.state);

//   const settingToLink = ()=>{
//     setState('link')
//   }

//   const settingToProfile = ()=>{
//     setState('profile')
//   }

//   const value: ActiveState = {
//     state,
//     setState,
//   };

//   return (
//     <ActiveSectContext.Provider value={value}>
//       {children}
//     </ActiveSectContext.Provider>
//   );
// };
