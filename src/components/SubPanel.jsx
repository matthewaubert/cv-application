import { useState } from 'react';
import Form from './Form.jsx';
import { deepCopyData } from '../util.js';
import '../styles/SubPanel.css';

// React component to conditionally render:
//   buttons for each subsection and button to add subsection,
//   or Form component with buttons to edit data
export default function SubPanel({ type, data, setData }) {
  // keep track of whether Form component should be displayed
  const [formVisible, setFormVisible] = useState(false);
  // keep track of current Form id
  const [formId, setFormId] = useState('');

  // event handler for 'Add' button
  // to add new subsection obj w/ an id to data
  function handleAdd() {
    const newData = deepCopyData(data);
    const newId = crypto.randomUUID();
    newData[type].push({ id: newId });

    setData(newData);
    setFormId(newId);
    setFormVisible(true);
  }

  // event handler for 'Save' button
  const handleSave = () => setFormVisible(false);

  // event handler for 'Delete' button to delete subsection obj data
  function handleDelete() {
    if (confirm('Are you sure you want to delete this?')) {
      // get index of subsection w/ id in data
      const index = data[type]
        .map((subsection) => subsection.id)
        .indexOf(formId);

      // splice subsection from data
      const newData = deepCopyData(data);
      newData[type].splice(index, 1);
      setData(newData);

      setFormVisible(false);
    }
  }

  // event handler for buttons to open subsections
  function handleSubsectionButtonClick(e) {
    setFormId(e.target.id);
    setFormVisible(true);
  }

  // if formVisible, render Form component with buttons to edit data
  if (formVisible)
    return (
      <div className="sub-panel">
        <Form type={type} data={data} setData={setData} id={formId} />
        <div className="buttons">
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
          <button className="save" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    );

  // if !formVisible, render buttons for each subsection and button to add subsection
  return (
    <div className="sub-panel">
      {/* render button for each existing subsection */}
      {data[type].map((entry) => (
        <SubSectionButton
          key={entry.id}
          entry={entry}
          onClick={handleSubsectionButtonClick}
        />
      ))}
      {/* button to show Form component to add subsection */}
      <button className="add-item" onClick={handleAdd}>
        Add {type}
      </button>
    </div>
  );
}

// button for each subsection
function SubSectionButton({ entry, onClick }) {
  return (
    <button id={entry.id} className="expand-subsection" onClick={onClick}>
      {entry.name}
    </button>
  );
}
