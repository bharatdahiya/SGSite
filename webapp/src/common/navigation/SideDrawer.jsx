import { MobileView, SideBar } from './Header.styled';
import NavLinks from './NavLinks';
const SideDrawer = () => {
  return (
    <MobileView>
      <SideBar>
        <NavLinks />
      </SideBar>
    </MobileView>
  );
};

export default SideDrawer;
