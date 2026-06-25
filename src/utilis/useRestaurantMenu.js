import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_API + resId, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await data.json();
      console.log("Menu API response:", json); // debug
      setResInfo(json?.data);
    } catch (error) {
      console.warn("Error fetching restaurant menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;