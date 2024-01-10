import { useState } from 'react';
import Editor from './components/Editor.jsx';
import Display from './components/Display.jsx';
import PrintButton from './components/PrintButton.jsx';
import { deepCopyData } from './util.js';
import { exampleData } from './data.js';
import './App.css';

export default function App() {
  // keep track of forms data
  const [data, setData] = useState(deepCopyData(exampleData));

  return (
    <>
      <Editor data={data} setData={setData} />
      <Display data={data} />
      <PrintButton />
    </>
  );
}
