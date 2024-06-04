import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import blar_logo from '../asset/logo_blar.svg';

export const StOuterCard = styled.div`
  background: #ffffff;
  box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: content-box;
  height: 100%;
`;

export const AuthDefaultLayout = function () {
  return (
    <AuthContainer>
      <StOuterCard>
        <AuthLogoHeader>
          <img src={blar_logo} />
        </AuthLogoHeader>
        <Outlet />
      </StOuterCard>
    </AuthContainer>
  );
};
const AuthContainer = styled.div`
  padding: 20px;
  height: inherit;
  box-sizing: border-box;
`;
const AuthLogoHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;