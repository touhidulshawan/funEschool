import Image from "next/image";
import Link from "next/link";

interface Props {
  modelName: string;
  modelLink: string;
}
const ARModelCard: React.FC<Props> = ({ modelName, modelLink }) => {
  return (
    <div className=" flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-pink-300 border-b-8 border-gray-500  shadow-md pb-3 rounded-md transform hover:-translate-y-2 transition-all ease-in-out duration-300">
      <div className="w-full mb-5 m-auto border-b-2 border-gray-600 flex justify-center items-center p-4">
        <Image
          src={`/images/models/${modelName}.svg`}
          alt="Model Image not Found"
          width={200}
          height={200}
        />
      </div>
      <a
        href={modelLink}
        target="_blank"
        rel="noopener noreferrer"
        className="capitalize text-xl text-gray-800 hover:text-gray-700 md:text-2xl  text-center pb-5"
      >
        {modelName}
      </a>
    </div>
  );
};
export default ARModelCard;
