import React from 'react';

import styles from './dashboard.module.scss';

type Props = {
  children: JSX.Element
}

const Dashboard = (props: Props) => {
  return (
    <div className={styles.container}>
      Dashboard
      {props.children}
    </div>
  );
};

export default Dashboard;
