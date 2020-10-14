import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Popup } from 'react-leaflet';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  .leaflet-container {
    z-index: 5;
  }
`;

export const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 440px;
  padding: 80px;
  background: linear-gradient(329.54deg, #29B6D1 0%, #88C7C7 100%);
`;

export const Header = styled.header``;

export const OrphanaLogo = styled.img``;

export const OrphanaTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  line-height: 42px;
  margin-top: 64px;
`;

export const OrphanaText = styled.p`
  line-height: 28px;
  margin-top: 24px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 24px;
`;

export const FooterStrong = styled.strong`
  font-weight: 800;
`;

export const FooterSpan = styled.span``;

export const CreateOrphanage = styled(Link)`
  position: absolute;
  right: 40px;
  bottom: 40px;

  z-index: 10;
  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color .2s;

  &:hover {
    background: #17d6ed;
  }
`;

export const PopUp = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 20px;
    font-weight: bold;
    color: #0089a5;
    margin: 8px 12px;
  }

  .leaflet-popup-content a {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16)
  }

  .leaflet-popup-tip-container {
    display: none;
  }  
`;