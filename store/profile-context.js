import { createContext, useState } from "react";

export const ProfileContext = createContext({
  name: "",
  email: "",
  photo: "",
  changeName: () => {},
  changeEmail: () => {},
  changePhoto: () => {},
  deletePhoto: () => {},
});

function ProfileContextProvider({ children }) {
  const [profileName, setProfileName] = useState();
  const [profileEmail, setProfileEmail] = useState();
  const [profilePhoto, setProfilePhoto] = useState();

  function changeName(name) {
    setProfileName(name);
  }

  function changeEmail(email) {
    setProfileEmail(email);
  }

  function changePhoto(photo) {
    setProfilePhoto(photo);
  }

  function deletePhoto() {
    setProfilePhoto(
      "https://firebasestorage.googleapis.com/v0/b/walku-387420.appspot.com/o/BlankProf.png?alt=media&token=e2bb5a80-de0c-41f6-96fd-c4f02e2fa3a1"
    );
  }

  const value = {
    name: profileName,
    email: profileEmail,
    photo: profilePhoto,
    changeName: changeName,
    changeEmail: changeEmail,
    changePhoto: changePhoto,
    deletePhoto: deletePhoto,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export default ProfileContextProvider;
