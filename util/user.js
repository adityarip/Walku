import axios from "axios";

const API_KEY = "AIzaSyDNUJQkmIEctqXr7X0JKsHd506JtNKB4U8";
const URL = "https://identitytoolkit.googleapis.com/v1/accounts:";

// Fetch user data
export async function lookup(idToken) {
  const response = await axios.post(`${URL}lookup?key=${API_KEY}`, {
    idToken,
  });

  const userData = [
    response.data.users[0].email,
    response.data.users[0].displayName,
    response.data.users[0].photoUrl,
  ];

  return userData;
}

// Update Profile
export async function updateProfile(idToken, displayName, photoUrl) {
  const response = await axios.post(`${URL}update?key=${API_KEY}`, {
    idToken: idToken,
    displayName: displayName,
    photoUrl: photoUrl,
    deleteAttribute: [],
    returnSecureToken: true,
  });

  const userData = [response.data.displayName, response.data.photoUrl];

  return userData;
}
