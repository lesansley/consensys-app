import React from 'react';
import { Menu } from 'semantic-ui-react';

import { LoginButtonContainer } from '../elements';

const NavBar = () => {
  return (
    <Menu>
      <Menu.Item  position='right'>
        <LoginButtonContainer />
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
