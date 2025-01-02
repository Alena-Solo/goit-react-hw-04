import axios from "axios";

export async function fetchImagesWithPhoto(query, page) {
  axios.defaults.baseURL = "https://api.unsplash.com";
  const myApiKey = "T1ULywxV1mtoptbUkW-tz_0ywmMEgKqzfvRi7dpp07A";

  const response = await axios.get("/search/photos/?", {
    params: {
      client_id: myApiKey,
      query: query,
      page: page,
      per_page: 15,
      orientation: "landscape",
    },
  });
  return response.data;
}
