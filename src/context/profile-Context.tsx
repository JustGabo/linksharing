import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ProfileDetails {
    firstName: string;
    lastName: string;
    email: string;
}

interface ProfileState {
  profileDetails: ProfileDetails
  setprofileDetails: (e:  React.ChangeEvent<HTMLInputElement>)=> void
//   image: File
//   setImage: React.SetStateAction<string>
}

const initialState = {
  profileDetails: {
    firstName: "",
    lastName: "",
    email: "",
  },
    setprofileDetails: () => {},
    // image: "",
    // setImage: () => {}
    
};

export const ProfileContext = createContext<ProfileState>(initialState);

export const ProfileProvider = ({ children }: Props) => {
  const [profileDetails, setProfileDetails ] = useState<ProfileDetails>({
    firstName: '',
    lastName: '',
    email: ''
  });

//   const [image, setImage] = useState()

  const HandleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileDetails({...profileDetails, [e.target.name]: e.target.value})
    return e.target.name
  };

//   const HandleImage = (image: File)=>{
//     setImage(image)
//     return image
//   }

  const value: ProfileState = {
    profileDetails,
    setprofileDetails: HandleFirstName,
    // image,
    // setImage: HandleImage
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
