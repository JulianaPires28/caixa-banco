import { useState, useEffect } from "react";

const useGetCustomHook = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:5000/account", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return { data };
};

export default useGetCustomHook;
