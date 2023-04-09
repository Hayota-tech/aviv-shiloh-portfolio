import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import classes from './Menu.module.scss';

interface IProps {}

const MenuView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { t } = useTranslation();

  return <React.Fragment></React.Fragment>;
};

MenuView.displayName = 'MenuView';
MenuView.defaultProps = {};

export default React.memo(MenuView);
