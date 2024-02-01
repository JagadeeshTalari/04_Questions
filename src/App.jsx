import { Question } from './Question';
import { useState } from "react";
import data from "./data";
const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {/* Question Component */}
        {questions.map((question) => {
          const { id, title, info } = question;
          return (
            <Question   id={id} title={title} info={info}  />
          );
        })}
      </section>
    </main>
  );
};
export default App;
