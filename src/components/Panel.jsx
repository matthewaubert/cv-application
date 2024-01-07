import { useState } from 'react';
import { camelToTitleCase } from '../util.js';
import Form from './Form.jsx';

import '../styles/Panel.css';

export default function Panel({ title, isActive, onClick, data, setData }) {
  const subPanel =
    title === 'basicInfo' ? (
      <Form type={title} data={data} setData={setData} />
    ) : (
      <SubPanel type={title} data={data} setData={setData} />
    );

  return (
    <div className="panel">
      <PanelButton title={title} isActive={isActive} onClick={onClick} />
      {isActive && subPanel}
    </div>
  );
}

function SubPanel({ type, data, setData }) {
  const [formVisible, setFormVisible] = useState(false);
  const [formId, setFormId] = useState('');

  const handleAdd = () => setFormVisible(true);
  const handleSave = () => setFormVisible(false);

  function handleSpButtonClick(e) {
    setFormId(e.target.id);
    setFormVisible(true);
  }

  if (formVisible)
    return (
      <div className="sub-panel">
        <Form type={type} data={data} setData={setData} id={formId} />
        <button onClick={handleSave}>Save</button>
      </div>
    );

  return (
    <div className="sub-panel">
      {/* show existing education/experience */}
      {data[type].map((entry) => (
        <button
          key={entry.id}
          id={entry.id}
          className="expand-sub-panel"
          onClick={handleSpButtonClick}
        >
          {entry.school || entry.company}
        </button>
      ))}
      {/* on click, show relevant form */}
      {/* <button onClick={handleAdd}>Add {type}</button> */}
    </div>
  );
}

function PanelButton({ title, isActive, onClick }) {
  return (
    <button className="expand-panel" onClick={onClick}>
      <h2>{camelToTitleCase(title)}</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={isActive ? 'active' : 'inactive'}
      >
        <title>chevron-down</title>
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
      </svg>
    </button>
  );
}
