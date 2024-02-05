import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import SidebarToggle from "./SidebarToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem;
  border-bottom: 1px solid var(--color-grey-100);
  height: 6rem;

  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      <SidebarToggle />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
