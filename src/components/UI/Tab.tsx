import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabUI: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#FF0000",
            },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "#000000",
            },
            "& .Mui-selected": {
              color: "#000",
            },
          }}
        >
          <Tab
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "17px",
              color: "#292929",
            }}
            label="Описание"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "17px",
              color: "#292929",
            }}
            label="Состав и пищевая ценность"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "17px",
              color: "#292929",
            }}
            label="Условия и срок хранения "
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography
          component="p"
          sx={{
            marginTop: "41px",
            fontSize: "16px",
            fontWeight: "400",
            color: "#292929",
          }}
        >
          Текстовая информация и таблички. <br />
          Для примера рыба-текст
        </Typography>
        <Typography
          component="p"
          sx={{
            marginTop: "21px",
            fontSize: "16px",
            fontWeight: "400",
            color: "#292929",
          }}
        >
          Банальные, но неопровержимые выводы, а также представители современных
          социальных резервов смешаны с не уникальными данными до степени
          совершенной неузнаваемости, из-за чего возрастает их статус
          бесполезности. Сложно сказать, почему активно развивающиеся страны
          третьего мира неоднозначны и будут указаны как претенденты на роль
          ключевых факторов. Являясь всего лишь частью общей картины, диаграммы
          связей призывают нас к новым свершениям, которые, в свою очередь,
          должны быть своевременно верифицированы.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography
          component="p"
          sx={{
            marginTop: "41px",
            fontSize: "16px",
            fontWeight: "400",
            color: "#292929",
          }}
        >
          Текстовая информация и таблички. <br />
          Для примера рыба-текст
        </Typography>
        <Typography
          component="p"
          sx={{
            marginTop: "21px",
            fontSize: "16px",
            fontWeight: "400",
            color: "#292929",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore
          perferendis nostrum facilis ut ullam quos cum quisquam ab nihil,
          dignissimos, velit minus? Illum blanditiis alias aliquid asperiores ad
          a nemo libero repudiandae provident, ut nobis cupiditate ipsum quae
          eaque vero saepe cumque eveniet ab omnis numquam veniam voluptatem!
          Ipsam ullam placeat quaerat sint fugiat.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography
          component="p"
          sx={{
            marginTop: "41px",
            fontSize: "16px",
            fontWeight: "400",
            color: "#292929",
          }}
        >
          Текстовая информация и таблички. <br />
          Для примера рыба-текст
        </Typography>
        <Typography
          component="p"
          sx={{
            marginTop: "21px",
            fontSize: "16px",
            fontWeight: "400",
            color: "#292929",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          numquam nesciunt laboriosam itaque mollitia enim maxime soluta ipsam
          illum sit! Quia a nihil quo veniam soluta unde maxime accusantium
          blanditiis id placeat! Iure pariatur aliquam accusantium cum hic
          voluptate doloribus accusamus magnam optio fugiat ad porro voluptatem
          repellendus, commodi quo.
        </Typography>
      </CustomTabPanel>
    </Box>
  );
};

export default TabUI;
