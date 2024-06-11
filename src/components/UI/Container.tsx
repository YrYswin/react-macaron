import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        width: "1250px",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
