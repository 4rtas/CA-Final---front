import React from "react";
import styles from "./answersBody.module.css";
import AnswerHeader from "../../components/answerHeader/answerHeader";
import AnswersList from "../answersList/answersList";
import AnswerForm from "../answerForm/answerForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnswerBody() {
  const { id } = useParams();
  const [answers, setAnswers] = useState();
  const fetchAnswers = async () => {
    const result = await fetch("http://localhost:3002/answers/" + id);
    const answers = await result.json().then((res) => {
      return res.data;
    });

    setAnswers(answers);
  };
  useEffect(() => {
    fetchAnswers();
  }, []);
  return (
    <>
      {answers &&
        answers.map((answer) => {
          return (
            <div className={styles.main}>
              <AnswerHeader question={answer} />
              <AnswerForm question={answer} />
              <AnswersList allAnswers={answer}></AnswersList>
            </div>
          );
        })}
    </>
  );
}

export default AnswerBody;
