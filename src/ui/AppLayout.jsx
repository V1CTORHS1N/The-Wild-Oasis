import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useGlobalContext } from "../contexts/useContext";

const StyledAppLayout = styled.div`
  ${(props) =>
    props.isSidebarOpen
      ? "display: grid; grid-template-columns: 26rem 1fr; grid-template-rows: auto 1fr;"
      : "display: flex; flex-direction: column;"}

  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  ${(props) => !props.isSidebarOpen && "flex-grow: 1;"}
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const AppLayout = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <StyledAppLayout isSidebarOpen={isSidebarOpen}>
      <Header />
      {isSidebarOpen && <Sidebar />}
      <Main isSidebarOpen={isSidebarOpen}>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
