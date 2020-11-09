interface ButtonProps {
  btnName: string;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ btnName, handleClick }) => {
  return (
    <button
      className=" uppercase text-purple-100 bg-purple-600  btn focus:shadow-outline hover:bg-purple-400 hover:text-purple-700 transform hover:translate-y-1 transition-all duration-300 py-3 px-6 border-b-4 border-pink-300 mb-5 mt-3"
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
