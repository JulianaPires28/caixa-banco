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


// import { useState, useEffect } from "react";

// const useGetCustomHook = () => {
//   const [data, setData] = useState([]);

//   const url = "http://localhost:5000/account";

//   async function getUserData (){
//     console.log("O HOOK FOI CHAMADO");
//     const options = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     fetch(url, options)
//       .then((response) => {
//         return response.json();
//       })
//       .then((resp) => {
//         setData(resp);
//         console.log("teste validação data", data === resp.data);
//       })
//       .catch((err) => console.error(err));

//       return data
//   }
  
//   useEffect(() => {
//     setData(getUserData())
//     console.log("data do meu hook ===>", data);
//   }, []);

//   return getUserData;
// };

// export default useGetCustomHook;
