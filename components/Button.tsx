interface ButtonProps {
  btnName: string;
  // todo: wil add 2 more property
  // todo: 1. css classes
  // todo: 2. functionality when button will be clicked
}

const Button: React.FC<ButtonProps> = ({ btnName }) => {
  return <button>{btnName}</button>;
};

export default Button;
