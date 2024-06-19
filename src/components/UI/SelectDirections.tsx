import React from "react";
import { Menu, MenuItem, FormControl } from "@mui/material";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import styled from "styled-components";

interface Item {
  id: string;
  name: string;
  link: string;
}

interface SelectDirectionsProps {
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  onSelect: (id: string) => void;
  onClose: () => void;
  anchorEl: null | HTMLElement;
  selectedItem: string | null;
  items: Item[];
  title: string;
  open: boolean;
}

const SelectDirections: React.FC<SelectDirectionsProps> = ({
  open,
  handleMenuOpen,
  anchorEl,
  onClose,
  onSelect,
  items,
  title
}) => {

  
  return (
    <FormControl onMouseLeave={onClose} onMouseEnter={handleMenuOpen}>
      <SelectedContent>
        {title}
        {open ? <FaChevronUp fontSize={10} /> : <FaChevronDown fontSize={10} />}
      </SelectedContent>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={onClose}
        MenuListProps={{ onMouseLeave: onClose }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.id} onClick={() => onSelect(item.id)}>
            <IdName>{item.name}</IdName>
          </MenuItem>
        ))}
      </Menu>
    </FormControl>
  );
};

export default SelectDirections;

const IdName = styled.div`
  font-size: 14px;
  padding: 0.3em;
  width: 100%;
  transition: color 0.3s;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background: blue;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    transition: transform 0.3s;
  }
  &:hover {
    cursor: pointer;
    color: blue;
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
`;

const SelectedContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;

