import { useState } from "react";
import Layout from "../components/Layout";
import Book from "../components/book/Book";
import { InferGetStaticPropsType } from "next";

interface BookType {
  id: string;
  book: string;
}

interface Course {
  id: string;
  title: string;
  bookName: Array<BookType>;
}

const Learn = ({
  courseData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout title="Learn">
      <section className="max-w-xl mx-auto mt-3  md:mt-10 px-5 mb-5 grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        {courseData.map((course) => (
          <section key={course.id} className="my-8">
            <h1 className="text-3xl capitalize tracking-wide my-4 text-teal-400 ">
              {course.title}
            </h1>
            {course.bookName.map((book) => (
              <Book
                key={book.id}
                bookName={book.book}
                courseFor={course.title}
              />
            ))}
          </section>
        ))}
      </section>
    </Layout>
  );
};

export default Learn;

export const getStaticProps = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/touhidulShawan/d5532596aaa4b2c17c0c59976f03a9d6/raw/c692b61f802051ef6f34d46487d957d52f07dd29/Course"
  );
  const courseData: Course[] = await response.json();

  return {
    props: {
      courseData,
    },
  };
};
