import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import classes from './Project.module.scss';

interface IProps {}

const ProjectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  const { t } = useTranslation();

  return <React.Fragment></React.Fragment>;
};

ProjectView.displayName = 'ProjectView';
ProjectView.defaultProps = {};

export default React.memo(ProjectView);
