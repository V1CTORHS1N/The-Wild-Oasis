import React from "react";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useGlobalContext } from "../contexts/useContext";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useGlobalContext();
  return (
    <ButtonIcon>
      {isDarkMode ? (
        <HiOutlineSun onClick={toggleDarkMode} />
      ) : (
        <HiOutlineMoon onClick={toggleDarkMode} />
      )}
    </ButtonIcon>
  );
};

export default DarkModeToggle;
