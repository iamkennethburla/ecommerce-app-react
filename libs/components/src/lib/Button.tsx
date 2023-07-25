export interface IButtonProps {
  children?: JSX.Element | JSX.Element[] | string;
}

export function Button(props: IButtonProps) {
  const { children } = props;
  return <div>{children}</div>;
}

export default Button;
