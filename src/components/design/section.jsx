import { useEffect, useState } from 'react';

// { updatedText, updatedStyle }

export default function Section() {
  const [text, setText] = useState('Hello'); // default text
  const [style, setStyle] = useState({
    border: '2px solid gray',
    width: '120px',
    minWidth: '100px',
    minHeight: '100px',
  }); // default style

  // useEffect(() => {
  //   setText(updatedText);
  //   setStyle(updatedStyle);
  // }, [updatedText, updatedStyle]);

  return (
    <p className="handle" style={style}>
      {text}
    </p>
  );
}
