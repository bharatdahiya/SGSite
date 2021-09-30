import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  OurMenuContainer,
  Column,
  Header1,
  Header2,
  Header3,
  Header4,
} from './index.styled';
import MenuItem from './menuItem/MenuItem';

const Menu = () => {
  AOS.init();
  return (
    <OurMenuContainer className='row' id='ourmenu'>
      <Column>
        <div
          data-aos='slide-up'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <Header1>STARTERS</Header1>
          <div style={{ marginLeft: '7%' }}>
            <MenuItem
              title='QUINOA CROQUETTAS'
              description='Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)'
              price='£ 4.95'
              containerMarTop='20%'
            />
            <MenuItem
              title='CHIFA CHICHARRONES'
              description='Slow cooked crispy pork belly with sweet soy sauce'
              price='£ 6.95'
              containerMarTop='30%'
            />
            <MenuItem
              title='CALAMARES'
              description='Crispy baby squid with pickled jalapeno miso salsa'
              price='£ 6.95'
              containerMarTop='30%'
            />
          </div>
        </div>
      </Column>
      <Column
        width='20%'
        borderRight='1px solid #adb5bd'
        borderLeft='1px solid #adb5bd'
        overflow='hidden'
      >
        <div
          data-aos='slide-down'
          data-aos-easing='linear'
          data-aos-duration='500'
        >
          <Header2>MAIN COURSES</Header2>
          <MenuItem
            title='EL CLASICO'
            description="Sea bass ceviche with aji limo tiger's milk, sweet potato puree, choclo corn, red onion, coriander and plantain (gf)"
            price='£ 8.95'
            containerMarTop='10%'
          />
          <MenuItem
            title='TARADITO CALLAO'
            description="Cobia tiradito with coriander tiger's milk, black tobika, creme fraiche & sweet potato crunchies"
            price='£ 8.95'
            containerMarTop='50%'
          />
        </div>
      </Column>
      <Column width='20%' overflow='hidden' borderRight='1px solid #adb5bd'>
        <div
          data-aos='slide-up'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <Header3>SIDES</Header3>
          <MenuItem
            title='SUPER POLLO'
            description='Marinated corn feb chicken pieceswith rocotto salsa'
            price='£ 4.95'
            containerMarTop='10%'
          />
          <MenuItem
            title='PATATAS FRITAS'
            description='Sweet potato fries with aji rocotto mayonnaise (v)'
            price='£ 3.95'
            containerMarTop='50%'
          />
        </div>
      </Column>
      <Column width='30%' overflow='hidden'>
        <div
          data-aos='slide-down'
          data-aos-easing='linear'
          data-aos-duration='500'
        >
          <Header4>DESSERTS</Header4>
          <div>
            <MenuItem
              title='ICE CREAM'
              description='Lorem ipsum dolor sit amet salerma petrum sea'
              price='£ 3.95'
              containerMarTop='10%'
            />
            <MenuItem
              title='TIRAMISU'
              description='Lorem ipsum dolor sit amet salerma petrum sea'
              price='£ 3.95'
              containerMarTop='15%'
            />
            <MenuItem
              title='CHOCOLATE BROWNIE'
              description='Lorem ipsum dolor sit amet salerma petrum sea'
              price='£ 3.95'
              containerMarTop='15%'
            />
          </div>
        </div>
      </Column>
    </OurMenuContainer>
  );
};

export default Menu;
