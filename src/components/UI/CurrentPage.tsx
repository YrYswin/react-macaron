import React from "react";
import { Link } from "react-router-dom";
import { pagesArray } from "../../utils/constans";

interface CurrentPageState {
  thisPage: string;
}

const CurrentPage: React.FC<CurrentPageState> = ({ thisPage }) => {
  const [pages, setPages] = React.useState<string | undefined>("");
  React.useEffect(() => {
    setPages(pagesArray.find((x) => x.pathname === thisPage)?.name);
  }, [thisPage]);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
      <Link to={"/"} style={{ color: "gray", textDecoration: "none" }}>
        Главная{"> "}{" "}
      </Link>
      <p style={{ color: "#4e9dd3" }}>{pages}</p>
    </div>
  );
};

export default CurrentPage;
