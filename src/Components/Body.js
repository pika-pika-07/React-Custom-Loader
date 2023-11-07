import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../DashboardBody.css";
import CardList from "./CardList";

import SkeletonCard from "./SkeletonCard";

const Body = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();

  const loaderType = searchParams.get("type");

  const fetchFromAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Fetched");
        resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
      }, 300000);
    });
  };

  const apiCall = async () => {
    const apiData = await fetchFromAPI();
    setData(apiData);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className="container">
      {data.length === 0 && <SkeletonCard loaderType={loaderType} />}
      {data.length > 0 && <CardList list={data} />}
    </div>
  );
};

export default Body;
