import React from "react";

interface SetsItemProps {
  title: string;
  icon: string;
  text: string;
}

const SetsItem: React.FC<SetsItemProps> = ({ icon, title, text }) => {
  return (
    <div>
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div>
        <h1>{title}</h1>
        <img src="" alt="arrow" />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default SetsItem;
