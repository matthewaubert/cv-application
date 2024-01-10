import { useState } from 'react';
import Panel from './Panel.jsx';
import { deepCopyData } from '../util.js';
import { newData, exampleData } from '../data.js';
import '../styles/Editor.css';

export default function Editor({ data, setData }) {
  // keep track of active tab of editor
  const [activeIndex, setActiveIndex] = useState(0);

  const onClick = (i) => () =>
    activeIndex === i ? setActiveIndex(-1) : setActiveIndex(i);

  // panel titles
  const titles = ['basicInfo', 'education', 'experience', 'skills'];

  return (
    <div className="editor">
      <h1>CV Application</h1>
      <MacroEditor setData={setData} />
      {titles.map((title, i) => (
        <Panel
          key={title}
          title={title}
          isActive={activeIndex === i}
          onClick={onClick(i)}
          data={data}
          setData={setData}
        />
      ))}
    </div>
  );
}

// panel w/ 'Reset CV' and 'Load Example' buttons
function MacroEditor({ setData }) {
  function handleReset() {
    const msg =
      'This will clear your current data. Are you sure you want to continue?';
    if (confirm(msg)) setData(deepCopyData(newData));
  }

  function handleLoad() {
    const msg =
      'This will replace your current data with the example data. Are you sure you want to continue?';
    if (confirm(msg)) setData(deepCopyData(exampleData));
  }

  return (
    <div className="macro-editor">
      <button onClick={handleReset}>Reset CV</button>
      <button onClick={handleLoad}>Load Example</button>
    </div>
  );
}
