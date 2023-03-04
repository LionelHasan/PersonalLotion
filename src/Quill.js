import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import NoteTitle from "./NoteTitle";
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';


function QuillEditor(props) {
  const [data, setData] = useState('');

  const editorRef = useRef(null);
  function handleClick() {
    props.onData(data);
  }

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: "snow",
      });

      quill.on("text-change", () => {
        var delta = quill.getContents();
        const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
        const html = converter.convert();

        console.log(html);
        const editorContent = quill.getText();
        setData(html);
      });
    }
  }, []);
  props.onData(data);


  return <div ref={editorRef} />;
}

export default QuillEditor;
