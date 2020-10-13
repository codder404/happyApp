import styled from 'styled-components';
import { Link } from 'react-router-dom';

import landing from '../../assets/images/landing-img.svg';

export const Container = styled.section`
  background: linear-gradient(329.54deg, #29B6D1 0%, #88C7C7 100%);

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  position: relative;
  width: 100%;
  max-width: 1100px;

  height: 80%;
  max-height: 680px;

  background: url(${landing}) no-repeat 80% center;
  background-size: 30rem;
`;

export const Logo = styled.img``;

export const LandingMain = styled.main`
  max-width: 350px;
`;

export const LandingTitle = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const LandingText = styled.p`
  font-size: 24px;
  margin-top: 40px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  font-size: 24px;
  line-height: 34px;
  text-align: right;
`;

export const LocationStrong = styled.strong`
  font-weight: 800;
`;

export const LocationSpan = styled.span``;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #96FEFF;
  }

  > svg {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
  }
`;