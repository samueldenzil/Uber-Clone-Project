import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
require('dotenv').config();


mapboxgl.accessToken = process.env.API_KEY;

function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      //   center: [-99.29011, 39.39172],
      center: [73.8200346, 18.5383386],
      zoom: 12,
    });
  });

  return <Wrapper id="map"></Wrapper>;
}

export default Map;

const Wrapper = tw.div`
    flex-1
`;
