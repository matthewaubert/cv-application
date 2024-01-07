import { useState } from 'react';
import { exampleData } from '../example-data.js';
import Panel from './Panel.jsx';

import '../styles/Editor.css';

export default function Editor() {
  // keep track of active tab of editor
  const [activeIndex, setActiveIndex] = useState(1);

  // keep track of forms data
  const [data, setData] = useState(exampleData);
  // const [data, setData] = useState({
  //   basicInfo: {},
  //   education: [],
  //   experience: [],
  // });

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
