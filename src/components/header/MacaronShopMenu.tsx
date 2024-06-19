import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Box } from '@mui/material';
import styled from 'styled-components';
import SelectDirections from '../UI/SelectDirections';

const MacaronShopMenu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<{
        giftSet: boolean;
        company: boolean;
        catalog: boolean;
    }>({
        giftSet: false,
        company: false,
        catalog: false,
    });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const MenuGiftSet = [
        { id: '1', name: 'ВСЕ НАБОРЫ', link: '/giftset/1' },
        { id: '2', name: 'ДЕНЬ МЕДИКА', link: '/giftset/2' },
        { id: '3', name: 'ДЕНЬ РОЖДЕНИЯ', link: '/giftset/3' },
        { id: '4', name: 'МАКАРОНС КЛАССИЧЕСКИЕ', link: '/giftset/4' },
        { id: '5', name: 'СВАДЕБНЫЕ ПРЕДЛОЖЕНИЯ', link: '/giftset/5' },
        { id: '6', name: 'КЕНДИ-БАРЫ', link: '/giftset/6' },
        { id: '7', name: 'ДЕТСКИЕ ПРАЗДНИКИ', link: '/giftset/7' },
    ];
    const MenuCompany = [
        { id: '1', name: 'ОПТОВЫЕ ПОСТАВКИ', link: '/company/1' },
        { id: '2', name: 'КОРПОРАТИВНЫЕ ПОДАРКИ', link: '/company/2' },
        { id: '3', name: 'ЭКЛЕРЫ ОПТОМ', link: '/company/3' },
    ];
    const MenuCatalog = [
        { id: '1', name: 'МАКАРОНС', link: '/catalog/1' },
        { id: '2', name: 'ЭКЛЕРЫ', link: '/catalog/2' },
        { id: '3', name: 'ПОДАРОЧНЫЕ НАБОРЫ', link: '/catalog/3' },
        { id: '4', name: 'ВАФЕЛЬНЫЕ ТРУБОЧКИ', link: '/catalog/4' },
        { id: '5', name: 'ЗЕФИР', link: '/catalog/5' },
        { id: '6', name: 'КЕЙК-ПОПСЫ', link: '/catalog/6' },
        { id: '7', name: 'ДЕСЕРТ КАРТОШКА', link: '/catalog/7' },
        { id: '8', name: 'КОМБО-НАБОРЫ', link: '/catalog/8' },
    ];

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menuType: string) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen((prev) => ({ ...prev, [menuType]: true }));
    };

    const handleMenuClose = (menuType: string) => {
        setAnchorEl(null);
        setMenuOpen((prev) => ({ ...prev, [menuType]: false }));
    };

    const handleSelect = (menuType: string, id: string) => {
        console.log(id);
        setMenuOpen((prev) => ({ ...prev, [menuType]: false }));
    };

    return (
        <div className='container'>
            <StyledBox>
                <StyledToolbar>
                    <StyledBoxLeft>
                        <StyledNavLinkWrapper to="/">
                            СЛАДКИЕ ДНИ <img src="/public/image/Percent.svg" alt="" />
                        </StyledNavLinkWrapper>
                        <div>
                            <SelectDirections
                                title="ПОДАРОЧНЫЕ НАБОРЫ"
                                open={menuOpen.giftSet}
                                handleMenuOpen={(e) => handleMenuOpen(e, 'giftSet')}
                                anchorEl={anchorEl}
                                onClose={() => handleMenuClose('giftSet')}
                                onSelect={(id) => handleSelect('giftSet', id)}
                                items={MenuGiftSet}
                                selectedItem={null}
                            />
                        </div>
                        <StyledNavLink to="/">СОБРАТЬ НАБОР</StyledNavLink>
                    </StyledBoxLeft>
                    <NavLink to="/">
                        <Logo src="/public/image/Logo.svg" alt="Logo" />
                    </NavLink>
                    <StyledBoxRight>
                        <StyledNavLink to="/">СОЗДАТЬ ДИЗАЙН</StyledNavLink>
                        <div>
                            <SelectDirections
                                title="КОМПАНИЯМ"
                                open={menuOpen.company}
                                handleMenuOpen={(e) => handleMenuOpen(e, 'company')}
                                anchorEl={anchorEl}
                                onClose={() => handleMenuClose('company')}
                                onSelect={(id) => handleSelect('company', id)}
                                items={MenuCompany}
                                selectedItem={null}
                            />
                        </div>
                        <div>
                            <SelectDirections
                                title="ВЕСЬ КАТАЛОГ"
                                open={menuOpen.catalog}
                                handleMenuOpen={(e) => handleMenuOpen(e, 'catalog')}
                                anchorEl={anchorEl}
                                onClose={() => handleMenuClose('catalog')}
                                onSelect={(id) => handleSelect('catalog', id)}
                                items={MenuCatalog}
                                selectedItem={null}
                            />
                        </div>
                    </StyledBoxRight>
                </StyledToolbar>
            </StyledBox>
        </div>
    );
};

export default MacaronShopMenu;

const StyledBox = styled(Box)`
    display: flex;
    justify-content: space-between;
`;

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    width: 100%;
`;

const StyledBoxLeft = styled(Box)`
    display: flex;
    gap: 0 2rem;
`;

const StyledNavLinkWrapper = styled(NavLink)`
    display: flex;
    text-decoration: none;
    color: black;
    gap: 0.3em;
    position: relative;
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

const StyledBoxRight = styled(Box)`
    display: flex;
    gap: 3rem;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    margin: 0 auto;
    position: relative;
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

const Logo = styled.img`
    object-fit: cover;
    transition: ease-out 0.3s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;