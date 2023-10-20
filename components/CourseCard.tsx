import Link from "next/link";
import Image from "next/image";

interface CourseCardProps {
  name: string;
  bookName: string;
  courseFor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  name,
  bookName,
  courseFor,
}) => {
  const courseName = name.split(" ").join("").toLowerCase();
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-300 to-pink-300  shadow-md pb-3 rounded transform hover:-translate-y-2 transition-all ease-in-out duration-300">
      <div className="w-full mb-5 m-auto border-b-2 border-gray-500 flex justify-center items-center p-4">
        <Image src={`/images/${courseName}.svg`} width={200} height={200} alt="course image" />
      </div>
      <Link
        href={`/learn/${courseFor}/${bookName.toLowerCase()}/${courseName}`}
      >
        <a className="capitalize text-xl text-gray-600 hover:text-gray-700 md:text-2xl  text-center pb-5 transition-all duration-300">
          {name}
        </a>
      </Link>
    </div>
  );
};

export default CourseCard;
