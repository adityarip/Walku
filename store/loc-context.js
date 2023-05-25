import { createContext, useState } from "react";

export const LocContext = createContext({
  bl_lat: "",
  bl_lng: "",
  tr_lat: "",
  tr_lng: "",
  ex_type: "",
  setBl_lat: () => {},
  setBl_lng: () => {},
  setTr_lat: () => {},
  setTr_lng: () => {},
  setType: () => {},
});

function LocContextProvider({ children }) {
  const [blLat, setBlLat] = useState();
  const [blLng, setBlLng] = useState();
  const [trLat, setTrLat] = useState();
  const [trLng, setTrLng] = useState();
  const [type, settype] = useState();

  function setBl_lat(bl_lat) {
    setBlLat(bl_lat);
  }

  function setBl_lng(bl_lng) {
    setBlLng(bl_lng);
  }

  function setTr_lat(tr_lat) {
    setTrLat(tr_lat);
  }

  function setTr_lng(tr_lng) {
    setTrLng(tr_lng);
  }

  function setType(type) {
    settype(type);
  }

  const value = {
    bl_lat: blLat,
    bl_lng: blLng,
    tr_lat: trLat,
    tr_lng: trLng,
    ex_type: type,
    setBl_lat: setBl_lat,
    setBl_lng: setBl_lng,
    setTr_lat: setTr_lat,
    setTr_lng: setTr_lng,
    setType: setType,
  };

  return <LocContext.Provider value={value}>{children}</LocContext.Provider>;
}

export default LocContextProvider;
