import React from "react";
import { MoreDetail } from "../../utils/types";
import { Box, ImageListItem, Typography } from "@mui/material";

interface MorePropsItem {
  item: MoreDetail;
}

const MoreProps: React.FC<MorePropsItem> = ({ item }) => {

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        marginBottom: "21px",
      }}
    >
      <ImageListItem sx={{ minWidth: "46px", minHeight: "46px" }}>
        <img style={{ width: "100%", height: "100%" }} src={item.img} alt="" />
      </ImageListItem>
      <Typography
        component="p"
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "17px",
          color: "#292929",
        }}
      >
        {item.text}
      </Typography>
    </Box>
  );
};

export default MoreProps;
