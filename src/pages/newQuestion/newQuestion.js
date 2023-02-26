import Navbar from "../../components/navbar/navbar";
import QuestionForm from "../../components/questionForm/questionForm";
import styles from "./newQuestion.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <QuestionForm />
    </div>
  );
}

export default App;
