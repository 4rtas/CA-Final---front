import Navbar from "../../components/navbar/navbar";
import AnswerBody from "../../components/answerBody/answerBody";
import styles from "./answer.module.css";

// function Answers() {
//   const { id } = useParams();
//   const [answers, setAnswers] = useState();
//   const fetchAnswers = async () => {
//     const result = await fetch("http://localhost:3002/answers/" + id);
//     const answers = await result.json().then((res) => {
//       return res.data;
//     });

//     setAnswers(answers);
//     console.log("questionas", answers);
//   };
//   useEffect(() => {
//     fetchAnswers();
//   }, []);
//   return (
//     <div className={styles.main}>
//       <Navbar />
//       <AnswerBody />
//     </div>
//   );
// }

// export default Answers;

function Answers() {
  return (
    <div className={styles.main}>
      <Navbar />
      <AnswerBody />
    </div>
  );
}

export default Answers;
