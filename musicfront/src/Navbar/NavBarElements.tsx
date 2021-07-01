import styled from "styled-components";

interface NavProps {
  open: boolean;
}

export const NavContainer = styled.div<NavProps>`
  height: 99vh;
  transition: 0.3s ease-out;
  position: absolute;
  left: 0;
  width: 100px;
  margin-left: ${({ open }) => (open ? "0" : "-50px")};
  background-color: #ff6208;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  column-gap: 1em;
`;

export const NavIcon = styled.div<NavProps>`
  margin-top: 2em;
  margin-right: ${({ open }) => (open ? "6%" : "10%")};
  transition: 0.3s ease-out;
  transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0deg)")};
  transform-origin: left top;
  position: absolute;
  :hover {
    filter: brightness(0.8);
  }
`;

export const NavItems = styled.div<NavProps>`
  margin-top: 5em;
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  opacity: ${({ open }) => (open ? "1.0" : "0")};
`;

export const Icon = styled.div`
  transition: 0.3s ease-out;
  :hover {
    filter: brightness(0.8);
  }
`;
