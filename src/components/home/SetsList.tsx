import React from "react";
import SetsItem from "../UI/SetsItem";
import { setsArray } from "../../utils/constans";

const SetsList: React.FC = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        rowGap: "25px",
        columnGap: "35px",
        marginTop: "50px",
      }}
    >
      {setsArray.map((obj, i) => (
        <SetsItem key={i} {...obj} />
      ))}
    </div>
  );
};

export default SetsList;
