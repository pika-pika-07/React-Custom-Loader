import React from "react";

import Skeleton from "./Skeleton";
import "../SkeletonCard.css";
const SkeletonCard = ({ loaderType }) => {
  return (
    <div className="main-container">
      {Array.from({ length: 14 }).map((el) => (
        <div className="product-container">
          {loaderType == 1 ? (
            <Skeleton
              count={3.5}
              styles={[
                { width: "80%", height: "16rem", alignSelf: "flex-start" },
              ]}
            />
          ) : (
            <>
              <Skeleton
                circle
                baseColor="yellow"
                loadingColor="red"
                styles={[
                  { width: "80%", height: "6rem", alignSelf: "flex-start" },
                ]}
              />
              <Skeleton count={6} baseColor="yellow" loadingColor="red" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
