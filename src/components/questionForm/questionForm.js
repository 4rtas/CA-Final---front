import React, { useState, useEffect } from "react";
import styles from "./questionForm.module.css";
import Input from "../input/input";
import Button from "../button/button";

const QuestionForm = () => {
  const [title, setTitle] = useState();
  const onClickHandler = async () => {
    const token = window.localStorage.token;

    if (token) {
      const questionDetails = {
        title: title,
      };
      await fetch("http://localhost:3002/question", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(questionDetails),
      }).then((res) => {
        return res.json();
      });
    } else {
      alert("Please login or sign up to ask a question!");
    }
  };

  useEffect(() => {
    onClickHandler();
  }, []);

  return (
    <div className={styles.main}>
      <h1>New question</h1>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter Your question here..."
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      ></textarea>
      <Button text="Submit" onClick={onClickHandler} />
    </div>
  );
};

export default QuestionForm;
