import styles from './button.module.scss';

type Props =  {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  children: string
}

const Button = (props: Props) => {
  const { children, onClick } = props;
  return (
    <button className={styles.container} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
