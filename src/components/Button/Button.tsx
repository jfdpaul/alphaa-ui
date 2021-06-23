import React from 'react';

import styles from './button.module.scss';

const Button = (props: any) => {
  const { children } = props;
  return (
    <button className={styles.container}>
      {children}
    </button>
  );
};

export default Button;
