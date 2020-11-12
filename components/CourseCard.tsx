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
    <div className="flex flex-col justify-center items-center bg-gray-700  shadow-md pb-3 rounded-md transform hover:-translate-y-2 transition-all ease-in-out duration-300">
      <div className="w-full mb-5 m-auto border-b-2 border-blue-200 flex justify-center items-center p-4">
        <Image src={`/images/${courseName}.svg`} width={200} height={200} />
      </div>
      <Link
        href={`/learn/${courseFor}/${bookName.toLowerCase()}/${courseName}`}
      >
        <a className="capitalize text-xl text-gray-400 hover:text-blue-400 md:text-2xl  text-center pb-5">
          {name}
        </a>
      </Link>
    </div>
  );
};

export default CourseCard;
