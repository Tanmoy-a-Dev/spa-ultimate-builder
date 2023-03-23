import { useState } from 'react';

export default function Section() {
  const [text, setText] = useState('Hello'); // default text
  const [style, setStyle] = useState({
    border: '2px solid gray',
    minWidth: '100px',
    minHeight: '100px',
  }); // default style
  return <section className="handle">Hello</section>;
}
