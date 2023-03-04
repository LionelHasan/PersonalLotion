import React from 'react';
import { Markup } from 'interweave';
import { useOutletContext } from "react-router-dom";




function SavedNote(props) {
  const myString = JSON.stringify(props);
  const shortenedString = myString.substring(11, myString.length - 2);
  console.log(shortenedString);
  //const [someParameter, someFunction] = useOutletContext();
  return (
    
  <Markup content={shortenedString} /> // 
  );
}

export default SavedNote;