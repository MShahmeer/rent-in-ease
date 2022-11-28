import axios from "axios";

export const getData = async (bound, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bound.sw_lat,
          tr_latitude: bound.ne_lat,
          bl_longitude: bound.sw_lng,
          tr_longitude: bound.ne_lng,
          // bl_latitude: "11.847676",
          // bl_longitude: "108.473209",
          // tr_longitude: "109.149359",
          // tr_latitude: "12.838442",
        },
        headers: {
          "x-rapidapi-key":
            "dcdc490e7dmshec6ecd5e9284839p112251jsneff9a70a8e48",
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
