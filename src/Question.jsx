import React, { useState } from "react";

export function Question({ id, title, info }) {
  const [read, setRead] = useState(false);
  return (
    <div key={id} className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setRead(!read)}>
          {read ? "-" : "+"}
        </button>
      </header>
      {read ? <p>{info}</p> : null}
    </div>
  );
}
