import { useState } from 'react';
import Form from './Form.jsx';

import '../styles/SubPanel.css';

export default function SubPanel({ type, data, setData }) {
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
      const index = data[type].map((subData) => subData.id).indexOf(formId);

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

function SubPanelButton({ entry, onClick }) {
  return (
    <button id={entry.id} className="expand-sub-panel" onClick={onClick}>
      {entry.name}
    </button>
  );
}
