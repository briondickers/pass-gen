import { useState, useEffect, useContext } from "react";
import axios from "axios";

export default function FetchData() {
  const [getData, setGetData] = useState(["hello", "Brian", "Ndickers"]);

  useEffect(() => {
    function getServerData() {
      const res = axios.get(
        "https://64b6b8aadf0839c97e16081a.mockapi.io/names"
      );
      res.then((data) => {
        // console.log(data.data);
        setGetData(data.data);
      });
    }
    getServerData();
  }, []);

  const elements = getData.map((item) => <h2 key={item.id}>{item.fname}</h2>);
  return <div>{elements}</div>;
}
