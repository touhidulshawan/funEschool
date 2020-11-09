import Link from "next/link";

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
  return (
    <div>
      <Link
        href={`/learn/${courseFor}/${bookName.toLowerCase()}/${name
          .split(" ")
          .join("")
          .toLowerCase()}`}
      >
        <a>{name}</a>
      </Link>
    </div>
  );
};

export default CourseCard;
