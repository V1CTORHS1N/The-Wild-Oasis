import React from "react";
import { HiBars3 } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useGlobalContext } from "../contexts/useContext";

const SidebarToggle = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <ButtonIcon onClick={toggleSidebar}>
      <HiBars3 />
    </ButtonIcon>
  );
};

export default SidebarToggle;
