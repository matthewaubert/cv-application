import { useState } from 'react';
import Panel from './Panel.jsx';

import '../styles/Editor.css';

export default function Editor({ data, setData }) {
  // keep track of active tab of editor
  const [activeIndex, setActiveIndex] = useState(0);

  const onClick = (i) => () =>
    activeIndex === i ? setActiveIndex(-1) : setActiveIndex(i);

  // panel titles
  const titles = ['basicInfo', 'education', 'experience'];

  return (
    <div className="editor">
      <h1>CV Application</h1>
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
