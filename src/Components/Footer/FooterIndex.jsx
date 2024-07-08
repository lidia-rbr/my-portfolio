import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.extraDark};
  color: ${({ theme }) => theme.primary};
  padding: 50px;
  display: flex;

  @media (max-width: 769px) {
    padding: 20px;
    font-size: 1.2vh;
  }
`;

const LeftFooter = styled.div`
  float: left;
  margin-right: auto;
`;

const RightFooter = styled.div`
  float: right;
  margin-left: auto;
`;

function Footer() {
  return (
    <StyledFooter className="anchor">
      <LeftFooter>
        <p>&copy;2024 Lidia Ribeiro. All rights reserved.</p>
      </LeftFooter>
      <RightFooter>
        <p>lidia.calicia@gmail.com</p>
      </RightFooter>
    </StyledFooter>
  );
}

export default Footer;
