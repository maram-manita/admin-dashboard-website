import React from "react";
import Definition from "./Definition";
import TypeOf from "./TypeOf";
import Synonym from "./Synonym";

function Meaning({ meaning, gray }) {
  return (
    <>
      <TypeOf partOfSpeech={meaning.partOfSpeech} gray={gray} />
      <Definition definitions={meaning.definitions} gray={gray} />
      {meaning.synonyms.length !== 0 ? (
        <Synonym synonyms={meaning.synonyms} />
      ) : (
        ""
      )}
    </>
  );
}

export default Meaning;
