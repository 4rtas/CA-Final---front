import React from "react";
import styles from "./questionsHeader.module.css";
import Title from "../title/title";
import Button from "../button/btn";
import { useNavigate } from "react-router-dom";

const QuestionsHeader = ({ title }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/question`);
  };
  return (
    <div className={styles.main}>
      <Title title={title} />
      <Button text="New question" onClick={() => onClickHandler()} />
    </div>
  );
};

export default QuestionsHeader;
