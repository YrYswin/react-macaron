import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import styled from "styled-components";
import HeaderSlider from "./HeaderSlider";
import CarMacaron from "../../../public/image/CarMacaron.svg";
import BoxMacaron from "../../../public/image/BoxMacaron.svg";
import CustomDialog from "../UI/ModalDirections";
import NavMacaron from "../../../public/image/NavMacaron.svg";
import SeedIcon from "../../../public/image/SeedIcon.svg";
import MacaronShopMenu from "./MacaronShopMenu";
import Button from '@mui/material/Button';
import { AiTwotoneEnvironment } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { Avatar, Stack } from "@mui/material";

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState('Выбрать область');
  const [tempSelectedArea, setTempSelectedArea] = React.useState(selectedArea);

  useEffect(() => {
    // Загружаем сохраненную область из localStorage при монтировании компонента
    const savedArea = localStorage.getItem('selectedArea');
    if (savedArea) {
      setSelectedArea(savedArea);
      setTempSelectedArea(savedArea);
    }
  }, []);

  const handleClickOpen = () => {
    setTempSelectedArea(selectedArea);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAreaChange = (newArea: string) => {
    setTempSelectedArea(newArea);
  };

  const handleSave = () => {
    setSelectedArea(tempSelectedArea);
    localStorage.setItem('selectedArea', tempSelectedArea);
    handleClose();
  };

  const regions = ['Бишкек', 'Ош', 'Джалал-Абад', 'Чуй', 'Нарын', 'Талас', 'Иссык-Куль', 'Баткен'];

  const slides = [
    { text: 'МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ', imageUrl: SeedIcon },
    { text: 'ВСЕГДА СВЕЖЕЕ', imageUrl: NavMacaron },
    { text: 'ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ', imageUrl: BoxMacaron },
    { text: 'ДОСТАВКА В ДЕНЬ ЗАКАЗА', imageUrl: CarMacaron }
  ];

  return (
    <header style={{ paddingBottom: '12px' }}>
      <HeaderSlider slides={slides} />
      <NavHeader className="container">
        <div>
          <StyledNavLink to="/">Гарантия свежести</StyledNavLink>
          <StyledNavLink to="/">Доставка и оплата</StyledNavLink>
          <StyledNavLink to="/">Оптовые поставки</StyledNavLink>
          <StyledNavLink to="/">Контакты</StyledNavLink>
        </div>
        <HeaderRight>
          <ModalDirectionsBtn onClick={handleClickOpen}>
             <AiTwotoneEnvironment fontSize={22}/> {selectedArea} <FaChevronDown fontSize={10}/>
          </ModalDirectionsBtn>
          <CustomDialog
            open={open}
            onClose={handleClose}
            title="Пожалуйста, выберите одну из областей ниже:"
            content={
              <React.Fragment>
                {regions.map((region) => (
                  <Button
                    key={region}
                    onClick={() => handleAreaChange(region)}
                    variant={tempSelectedArea === region ? 'contained' : 'outlined'}
                    fullWidth
                  >
                    {region}
                  </Button>
                ))}
              </React.Fragment>
            }
            actions={
              <React.Fragment>
                <ButtonMuiRegions onClick={handleClose}>
                  Отмена
                </ButtonMuiRegions>
                <ButtonMuiRegions onClick={handleSave}>
                  Сохранить
                </ButtonMuiRegions>
              </React.Fragment>
            }
          />
          <BasNum >
            <IoPhonePortraitOutline fontSize={19} /> +8 812 309-82-88
          </BasNum>
          <BasNum>
            <NavLink to="/"><HiOutlineShoppingBag fontSize={20} /> В корзине (4 товара)</NavLink>
          </BasNum>
          <BasNum>
            <Stack direction="row" spacing={2}>
              <Avatar>{}</Avatar>
            </Stack>
          </BasNum>
        </HeaderRight>
      </NavHeader>
      <MacaronShopMenu />
    </header>
  );
};

export default Header;

const ButtonMuiRegions = styled(Button)`
  && {
    padding: 0.5em 0.7em;
    width: 100vw;
    color: #007BFF;
    margin: 1em 8px;
    border: 1.5px solid #007BFF;
  }
  &&:hover {
    background-color: #007BFF;
    border-color: #007BFF;
    color: white;
  }
`;

const ModalDirectionsBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  gap: 0.3em;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  &:hover {
    transform: scale(0.9);
    background-color: white;
    color: blue;
  }
`;

const NavHeader = styled.nav`
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: black;
  margin-right: 20px;
  text-decoration: none;
  padding: 0 0 10px 0;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1.5px;
    background: blue;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transition: transform 0.3s;
  }
  &:hover {
    color: blue;
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
`;

const BasNum = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.1em;
  div {
    color: black;
    text-decoration: none;
  }
  a {
    color: black;
    text-decoration: none;
  }
`;