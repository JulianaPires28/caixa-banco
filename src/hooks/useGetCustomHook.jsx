import { useState, useEffect } from "react";

const useGetCustomHook = () => {
  const [data, setData] = useState([]);

  function getUserData (){
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
        setData(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    setData(getUserData())
  }, []);

  return { data };

};

export default useGetCustomHook;