import { extractFormValues } from '../util.js';
import '../styles/Form.css';

export default function Form({ type, data, setData, id }) {
  function handleBasicFormChange(e) {
    const formValues = extractFormValues(e.target.form);
    setData({ ...data, [type]: formValues });
  }
  function handleComplexFormChange(e) {
    const formValues = extractFormValues(e.target.form);

    const index = data[type].findIndex((subData) => subData.id === id);
    const newData = { ...data };
    newData[type][index] = formValues;

    setData(newData);
  }

  console.log(data);

  switch (type) {
    case 'basicInfo':
      return (
        <BasicInfoForm data={data} handleFormChange={handleBasicFormChange} />
      );
    case 'education':
      return (
        <EducationForm
          id={id}
          data={data}
          handleFormChange={handleComplexFormChange}
        />
      );
    case 'experience':
      return (
        <ExperienceForm
          id={id}
          data={data}
          handleFormChange={handleComplexFormChange}
        />
      );
    case 'skills':
      return (
        <SkillsForm
          id={id}
          data={data}
          handleFormChange={handleComplexFormChange}
        />
      );
  }
}

function BasicInfoForm({ data, handleFormChange }) {
  return (
    <form onChange={handleFormChange}>
      <label>
        Name{' '}
        <input
          type="text"
          name="name"
          value={data.basicInfo.name || ''}
          placeholder="John Smith"
        />
      </label>
      <label>
        Email{' '}
        <input
          type="email"
          name="email"
          value={data.basicInfo.email || ''}
          placeholder="example@email.com"
        />
      </label>
      <label>
        Phone number{' '}
        <input
          type="text"
          name="phone"
          value={data.basicInfo.phone || ''}
          placeholder="123.456.7890"
        />
      </label>
      <label>
        Location{' '}
        <input
          type="text"
          name="location"
          value={data.basicInfo.location || ''}
          placeholder="New York, NY"
        />
      </label>
      <label>
        Website{' '}
        <input
          type="text"
          name="website"
          value={data.basicInfo.website || ''}
          placeholder="website.com"
        />
      </label>
    </form>
  );
}

function EducationForm({ id, data, handleFormChange }) {
  const eduData = data.education.find((edu) => edu.id === id);
  // console.log(eduData);

  return (
    <form id={id} onChange={handleFormChange} autoComplete="off">
      <label>
        School{' '}
        <input
          type="text"
          name="name"
          placeholder="Example University"
          value={eduData.name || ''}
        />
      </label>
      <label>
        Location{' '}
        <input
          type="text"
          name="location"
          placeholder="New York, NY"
          value={eduData.location || ''}
        />
      </label>
      <label>
        Degree{' '}
        <input
          type="text"
          name="degree"
          placeholder="B.S. in Computer Science"
          value={eduData.degree || ''}
        />
      </label>
      <label>
        Graduation month{' '}
        <input
          type="text"
          name="graduation"
          placeholder="May 2014"
          value={eduData.graduation || ''}
        />
      </label>
    </form>
  );
}

function ExperienceForm({ id, data, handleFormChange }) {
  const expData = data.experience.find((exp) => exp.id === id);

  return (
    <form id={id} onChange={handleFormChange} autoComplete="off">
      <label>
        Company{' '}
        <input
          type="text"
          name="name"
          placeholder="Example Company"
          value={expData.name || ''}
        />
      </label>
      <label>
        Location{' '}
        <input
          type="text"
          name="location"
          placeholder="New York, NY"
          value={expData.location || ''}
        />
      </label>
      <label>
        Start date{' '}
        <input
          type="text"
          name="startDate"
          placeholder="May 2014"
          value={expData.startDate || ''}
        />
      </label>
      <label>
        End date{' '}
        <input
          type="text"
          name="endDate"
          placeholder="February 2018"
          value={expData.endDate || ''}
        />
      </label>
      <label>
        Job description
        <textarea
          name="description"
          rows="6"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          value={expData.description || ''}
        />
      </label>
    </form>
  );
}

function SkillsForm({ id, data, handleFormChange }) {
  const skillsData = data.skills.find((skill) => skill.id === id);
  // console.log(skillsData);

  return (
    <form id={id} onChange={handleFormChange} autoComplete="off">
      <label>
        Skill Group Name{' '}
        <input
          type="text"
          name="name"
          placeholder="Programming"
          value={skillsData.name || ''}
        />
      </label>
      <label>
        Skills (separate each by comma and space){' '}
        <input
          type="text"
          name="subSkills"
          placeholder="JavaScript"
          value={skillsData.subSkills || ''}
        />
      </label>
    </form>
  );
}
