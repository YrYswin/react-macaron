import React from "react";
import SetsItem from "../UI/SetsItem";

const SetsList: React.FC = () => {
  return (
    <div style={{ display: "grid", gridAutoColumns: "auto auto" }}>
      <SetsItem />
      <SetsItem />
      <SetsItem />
      <SetsItem />
      <SetsItem />
    </div>
  );
};

export default SetsList;
