import React, { useState } from "react";
import { NavContainer, NavIcon, NavItems, Icon } from "./NavBarElements";
import { FaBars, FaUserCircle } from "react-icons/fa";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const styles = { color: "white", height: "30px", width: "30px" };
  return (
    <NavContainer open={isOpen}>
      <NavIcon open={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <FaBars style={styles} />
      </NavIcon>
      <div>
        <NavItems open={isOpen}>
          <Icon>
            <FaUserCircle style={styles} />
          </Icon>
        </NavItems>
      </div>
    </NavContainer>
  );
}
