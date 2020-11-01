import { useState } from "react";
import Layout from "../../../components/Layout";
import { fetchQuestions, Difficulty, QuestionState } from "./API";
import Question from "./Question";

const TOTAL_QUESTION = 15;
const CATEGORY = 17; //19

export interface UserAnswer {
  question: string;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
}

const Quiz = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [quesNumber, setQuesNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<UserAnswer[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    try {
      const newQuestions = await fetchQuestions(
        TOTAL_QUESTION,
        Difficulty.EASY,
        CATEGORY
      );
      setQuestions(newQuestions);
    } catch (error) {
      console.log(error);
    }

    setScore(0);
    setUserAnswer([]);
    setQuesNumber(0);
    setLoading(false);
  };

  const checkAnswer = (evt: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = evt.currentTarget.value;
      const correctAns = questions[quesNumber].correct_answer === answer;
      if (correctAns) {
        setScore((previous_score) => previous_score + 1);
      }

      const userAns = {
        question: questions[quesNumber].question,
        answer: answer,
        isCorrect: correctAns,
        correctAnswer: questions[quesNumber].correct_answer,
      };

      setUserAnswer((previous) => [...previous, userAns]);
      setIsClicked(true);
    }
  };

  const nextQuestion = () => {
    setIsClicked(false);
    const nextQuestionNumber = quesNumber + 1;
    if (nextQuestionNumber === TOTAL_QUESTION) {
      setGameOver(true);
    } else {
      setQuesNumber(nextQuestionNumber);
    }
  };
  return (
    <Layout title="Pop Quiz">
      <section className="w-10/12 h-full p-4 m-auto my-4 bg-gray-100 rounded-sm md:w-2/4 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-center text-gray-800 uppercase">
            Pop Quiz
          </h1>
          {gameOver || userAnswer.length === TOTAL_QUESTION ? (
            <button
              onClick={startQuiz}
              className="text-purple-100 bg-purple-600 border-purple-200 btn focus:shadow-outline hover:bg-purple-400 hover:text-purple-700 transform hover:translate-y-1"
            >
              Start Quiz
            </button>
          ) : null}
          {!gameOver ? (
            <p className="p-4 my-4 font-bold tracking-widest text-blue-700 bg-blue-100 rounded-lg">
              Score: {score}
            </p>
          ) : null}
        </div>
        <div>
          {loading ? (
            <p className="tracking-widest text-gray-700 animate-pulse">
              Loading question...
            </p>
          ) : null}
          {!loading && !gameOver ? (
            <Question
              questionNumber={quesNumber + 1}
              totalQuestions={TOTAL_QUESTION}
              question={questions[quesNumber].question}
              answers={questions[quesNumber].answers}
              userAnswer={userAnswer[quesNumber]}
              correctAnswer={questions[quesNumber].correct_answer}
              giveAnswer={isClicked}
              handleCheckAnswer={checkAnswer}
            />
          ) : null}
          {!gameOver &&
          !loading &&
          userAnswer.length === quesNumber + 1 &&
          quesNumber !== TOTAL_QUESTION - 1 ? (
            <button
              className="text-indigo-100 bg-indigo-700 border-indigo-200 btn focus:shadow-outline hover:bg-indigo-400 hover:text-indigo-700 transform hover:translate-y-1"
              onClick={nextQuestion}
            >
              Next Question
            </button>
          ) : null}
        </div>
      </section>
    </Layout>
  );
};

export default Quiz;
