import Link from "next/link";

interface BookProps {
  bookName: string;
  courseFor: string;
}

const Book: React.FC<BookProps> = ({ bookName, courseFor }) => {
  return (
    <div className="ml-2 my-4">
      <Link href={`/courses/${courseFor}/${bookName.toLowerCase()}`}>
        <a className="text-lg tracking-wide text-yellow-400 hover:text-blue-500 transform transition-all ease-linear duration-300">
          {bookName}
        </a>
      </Link>
    </div>
  );
};

export default Book;
