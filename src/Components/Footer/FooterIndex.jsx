import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.primary};
  padding: 50px;

  @media (max-width: 769px) {
    padding: 20px;
    font-size:1.2vh
  }
`;

function Footer() {
  return (
    <StyledFooter className="anchor">
      <p>&copy;2024 Lidia Ribeiro. All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;
