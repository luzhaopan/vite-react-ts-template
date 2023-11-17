import React from 'react';
import { Breadcrumb } from 'antd';

const BreadcrumbBar: React.FC = () => (
  <Breadcrumb
    style={{ margin: '15px' }}
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);

export default BreadcrumbBar;