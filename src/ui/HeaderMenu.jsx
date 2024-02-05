import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const HeaderMenu = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <UserAvatar />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
