import React from 'react';

import MenuView from './Menu.view';

interface IProps {}

const Menu: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <MenuView />;
};

Menu.displayName = 'Menu';
Menu.defaultProps = {};

export default React.memo(Menu);
