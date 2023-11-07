import React, { useLayoutEffect } from "react";
import "../Skeleton.css";
const Skeleton = ({ styles, count = 1, circle, baseColor, loadingColor }) => {
  const customStyles = {};

  let elements = [];

  const countCeil = Math.ceil(count);
  for (let i = 0; i < count; i++) {
    let style = styles ? styles[i] : {};
    if (countCeil > count && i === countCeil - 1) {
      const width = style?.width ?? "100%";

      const fractionalPart = count % 1;

      const fractionalWidth =
        typeof width === "number"
          ? width * fractionalPart
          : `calc(${width} * ${fractionalPart})`;

      style = { ...style, width: fractionalWidth };
    }
    if (circle) {
      style = { ...style, borderRadius: "50%" };
    }
    const skeletonSpan = (
      <span style={style} className="loader" key={i}>
        &zwnj;
      </span>
    );

    elements.push(
      <React.Fragment key={i}>
        {skeletonSpan}
        <br />
      </React.Fragment>
    );
  }

  useLayoutEffect(() => {
    const tempBase = baseColor ? baseColor : "#a9a9a9";
    const tempLoading = loadingColor ? loadingColor : "#505050";
    document.documentElement.style.setProperty("--base-color", `${tempBase}`);
    document.documentElement.style.setProperty(
      "--loading-color",
      `${tempLoading}`
    );
  }, [baseColor, loadingColor]);

  return (
    <span
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {elements}
    </span>
  );
};
export default Skeleton;
