import SubPanel from './SubPanel.jsx';
import Form from './Form.jsx';
import { camelToTitleCase } from '../util.js';
import '../styles/Panel.css';

// React component for each Panel in Editor
export default function Panel({ title, isActive, onClick, data, setData }) {
  // if Panel title is 'basicInfo': render Form component;
  // else: render SubPanel component
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

// React component for header button to open and close Panel on click
function PanelButton({ title, isActive, onClick }) {
  return (
    <button className="expand-panel" onClick={onClick}>
      <h2>{camelToTitleCase(title)}</h2>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={isActive ? 'active' : 'inactive'}
        >
          <title>drop-down arrow</title>
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </span>
    </button>
  );
}
