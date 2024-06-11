import React from "react";
import { EventItemArray } from "../../utils/constans";
import EventItem from "../UI/EventItem";

const EventShop: React.FC = () => {
  return (
    <div style={{ margin: "50px 0" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "42px",
          fontWeight: "500",
        }}
      >
        Акций
      </h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {EventItemArray.map((obj, i) => (
          <EventItem key={i} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default EventShop;
