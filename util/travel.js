import axios from "axios";

export async function getPlacesData() {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "-6.088659925516643",
          tr_latitude: "-6.370833074237714",
          bl_longitude: "106.9728249543398",
          tr_longitude: "106.686211012523",
          limit: "30",
          currency: "IDR",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "6847041565mshfd9b322dc2a57cdp19cacfjsn3140f5c2568d",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
}
