import { useState } from "react";
import Layout from "../components/Layout";
import CourData from "../data/Course.json";
import Book from "../components/book/Book";

interface Course {
  id: string;
  title: string;
  bookName: string[];
}

const Learn: React.FC = () => {
  const [courseData] = useState<Array<Course>>(CourData);
  return (
    <Layout title="Learn">
      {courseData.map((course) => (
        <section id={course.id}>
          <h1>{course.title}</h1>
          {course.bookName.map((book) => (
            <Book bookName={book} courseFor={course.title} />
          ))}
        </section>
      ))}
    </Layout>
  );
};

export default Learn;
