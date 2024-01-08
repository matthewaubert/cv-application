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

  function handleAdd() {
    const newData = { ...data };
    const newId = crypto.randomUUID();
    newData[type].push({ id: newId });

    setData(newData);
    setFormId(newId);
    setFormVisible(true);
  }

  const handleSave = () => setFormVisible(false);
  function handleDelete() {
    if (window.confirm('Are you sure you want to delete this?')) {
      // get index of subData w/ id in data
      const index = data[type].map(subData => subData.id).indexOf(formId);

      // splice subData from data
      const newData = { ...data };
      newData[type].splice(index, 1);
      setData(newData);

      setFormVisible(false);
    }
  }

  function handleSubPanelButtonClick(e) {
    setFormId(e.target.id);
    setFormVisible(true);
  }

  if (formVisible)
    return (
      <div className="sub-panel">
        <Form type={type} data={data} setData={setData} id={formId} />
        <div className="buttons">
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    );

  return (
    <div className="sub-panel">
      {/* show existing education/experience */}
      {data[type].map((entry) => (
        <SubPanelButton
          key={entry.id}
          entry={entry}
          onClick={handleSubPanelButtonClick}
        />
      ))}
      {/* on click, show relevant form */}
      <button onClick={handleAdd}>Add {type}</button>
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

function SubPanelButton({ entry, onClick }) {
  return (
    <button id={entry.id} className="expand-sub-panel" onClick={onClick}>
      {entry.school || entry.company}
    </button>
  );
}
