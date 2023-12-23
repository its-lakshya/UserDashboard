import { useEffect, useState } from "react";

const useFetch = (URL) => {
  const [usersData, setUsersData] = useState();

  useEffect(() => {
    getData();
  }, [URL]);

  const getData = async () => {
    try {
      const responce = await fetch(URL);
      if (responce.ok) {
        const data = await responce.json();
        setUsersData(data);
      } else {
        console.log("failed to fetch data");
      }
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  };
  return usersData;
};

export default useFetch;
