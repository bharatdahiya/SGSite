import styled from 'styled-components';
import media from '../../../styles/Media.styled';

export const Section1 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32%;
  margin-right: 7%;
  @media screen and (max-width: 330px) {
    justify-content: center;
    margin-left: -17%;
    margin-right: -12%;
    margin-top: 38%;
  }
  @media screen and (min-width: 500px) and (max-width: 600px) {
    margin-top: 19%;
    margin-right: 18%;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    margin-left: -65%;
    margin-top: 135%;
  }
  @media screen and (min-width: 801px) and (max-width: 1229px) {
    justify-content: flex-start;
    margin-top: 44%;
    margin-left: -6%;
  }
`;

export const Section2 = styled.div`
  display: flex;
  margin-left: -49%;
  margin-top: -8%;

  @media screen and (max-width: 330px) {
    justify-content: center;
    margin-left: -9%;
    margin-top: 7%;
    margin-right: -4%;
  }

  @media screen and (min-width: 331px) and (max-width: 400px) {
    justify-content: center;
    margin-left: -12%;
    margin-top: 7%;
  }

  @media screen and (min-width: 401px) and (max-width: 600px) {
    justify-content: center;
    margin-top: 7%;
    margin-left: 2%;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    margin-top: 7%;
    margin-left: -92%;
  }
  @media screen and (min-width: 801px) and (max-width: 1229px) {
    margin-left: -79%;
    margin-top: 11%;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-end'};
  margin: ${(props) => (props.margin ? props.margin : '0 7% 0 0')};

  ${media.largeDevice`
    justify-content: ${(props) =>
      props.lgJustifyContent ? props.lgJustifyContent : 'flex-start'};
    margin: ${(props) => (props.lgMargin ? props.lgMargin : '5% 0 0 -10%')};
  `}

  ${media.smalDevice`
    margin: ${(props) => (props.smMargin ? props.smMargin : '7% 0 0 -11%')};
    justify-content: ${(props) =>
      props.smJustifyContent ? props.smJustifyContent : 'center'};
  `}

  ${media.mobileDevice`
    margin: ${(props) => (props.mbMargin ? props.mbMargin : '7% -5% 0 -10%')};
  `}
`;
