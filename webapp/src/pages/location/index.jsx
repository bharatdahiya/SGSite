import React from 'react';
import {
  LocationContainer,
  MapBackground,
  ImageBackground,
  LocationContent,
  WhiteDiv,
  LocationHeader,
  Address,
  LocationIcon,
} from './index.styled';
import map from '../../assets/map.png';
import locationIcon from '../../assets/location-icon.png';

const Location = () => {
  return (
    <LocationContainer id='location'>
      <MapBackground>
        <ImageBackground src={map}></ImageBackground>
      </MapBackground>
      <LocationContent>
        <WhiteDiv>
          <LocationHeader>LOCATION</LocationHeader>
          <Address>12 Upper St. Martin's Lane</Address>
        </WhiteDiv>
        <LocationIcon src={locationIcon} />
      </LocationContent>
    </LocationContainer>
  );
};

export default Location;
