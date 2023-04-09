import React from 'react';

import ProjectView from './Project.view';

interface IProps {}

const Project: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <ProjectView />;
};

Project.displayName = 'Project';
Project.defaultProps = {};

export default React.memo(Project);
