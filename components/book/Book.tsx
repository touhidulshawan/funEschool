import Link from "next/link";

interface BookProps {
  bookName: string;
  courseFor: string;
}

const Book: React.FC<BookProps> = ({ bookName, courseFor }) => {
  return (
    <div>
      <Link href={`/courses/${courseFor}/${bookName}`}>
        <a>{bookName}</a>
      </Link>
    </div>
  );
};

export default Book;
