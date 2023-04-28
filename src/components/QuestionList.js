import React, { useEffect, useState } from "react";

function QuestionList() {
  const [items, setItems] = useState([]);

  // using useEffect hook to render list on loading
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((items) => console.log(items));
  }, []);


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{}</ul>
    </section>
  );
}

export default QuestionList;
