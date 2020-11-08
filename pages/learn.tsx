import { useState } from "react";
import Layout from "../components/Layout";
import CourseData from "../data/Course.json";
import Book from "../components/book/Book";

interface Book {
  id: string;
  book: string;
}

interface Course {
  id: string;
  title: string;
  bookName: Array<Book>;
}

const Learn: React.FC = () => {
  const [courseData] = useState<Array<Course>>(CourseData);
  return (
    <Layout title="Learn">
      {courseData.map((course) => (
        <section key={course.id}>
          <h1>{course.title}</h1>
          {course.bookName.map((book) => (
            <Book key={book.id} bookName={book.book} courseFor={course.title} />
          ))}
        </section>
      ))}
    </Layout>
  );
};

export default Learn;
