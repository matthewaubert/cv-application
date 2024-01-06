import { useState } from 'react';
import { extractFormValues } from '../util';
import '../styles/Form.css';

export default function Form({ type, data, setData }) {
  const handleFormChange = (e) => {
    const formValues = extractFormValues(e.target.form);
    setData({ ...data, [type]: formValues });
  };

  console.log(data);
  // console.log(crypto.randomUUID());

  switch (type) {
    case 'basicInfo':
      return <BasicInfoForm data={data} handleFormChange={handleFormChange} />;
    case 'education':
      return <EducationForm data={data} handleFormChange={handleFormChange} />;
    case 'experience':
      return <ExperienceForm data={data} handleFormChange={handleFormChange} />;
  }
}

function BasicInfoForm({ data, handleFormChange }) {
  return (
    <form onChange={handleFormChange}>
      <label>
        Name{' '}
        <input
          type="text"
          value={data.basicInfo.name || ''}
          placeholder="John Smith"
        />
      </label>
      <label>
        Website{' '}
        <input
          type="text"
          value={data.basicInfo.website || ''}
          placeholder="website.com"
        />
      </label>
      <label>
        Email{' '}
        <input
          type="email"
          value={data.basicInfo.email || ''}
          placeholder="example@email.com"
        />
      </label>
      <label>
        Phone number{' '}
        <input
          type="text"
          value={data.basicInfo.phone || ''}
          placeholder="123.456.7890"
        />
      </label>
      <label>
        Location{' '}
        <input
          type="text"
          value={data.basicInfo.location || ''}
          placeholder="New York, NY"
        />
      </label>
    </form>
  );
}

function EducationForm({ data, handleFormChange }) {
  return (
    <form onChange={handleFormChange}>
      <label>
        School <input type="text" placeholder="Example University" />
      </label>
      <label>
        Location <input type="text" placeholder="New York, NY" />
      </label>
      <label>
        Degree <input type="text" placeholder="B.S. in Computer Science" />
      </label>
      <label>
        Graduation month <input type="text" placeholder="May 2014" />
      </label>
    </form>
  );
}

function ExperienceForm({ data, handleFormChange }) {
  const [current, setCurrent] = useState(false);

  const switchOnChange = () => {
    setCurrent(!current);
  };

  return (
    <form onChange={handleFormChange}>
      <label>
        Company <input type="text" placeholder="Example Company" />
      </label>
      <label>
        Location <input type="text" placeholder="New York, NY" />
      </label>
      <label>
        Start date <input type="text" placeholder="May 2014" />
      </label>
      <label>
        End date{' '}
        <input type="text" placeholder="February 2018" disabled={current} />
      </label>
      <label className="switch">
        I currently work here
        <div className="switch">
          <input
            type="checkbox"
            id="system-toggle"
            checked={current}
            onChange={switchOnChange}
          />
          <div className="slider"></div>
        </div>
      </label>
    </form>
  );
}
