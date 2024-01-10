import { compareByDate, formatDate } from '../util.js';
import '../styles/Display.css';

// React component for CV display
export default function Display({ data }) {
  return (
    <main className="display-container">
      <div className="display">
        {/* basic info section */}
        <section className="basic-info">
          <h1>{data.basicInfo.name && data.basicInfo.name.toUpperCase()}</h1>
          <ul>
            {Object.keys(data.basicInfo).map(
              (field) =>
                field !== 'name' &&
                data.basicInfo[field] && (
                  <li key={field}>{data.basicInfo[field]}</li>
                ),
            )}
          </ul>
        </section>
        {/* education section */}
        {data.education.length > 0 && (
          <section className="education">
            <h2>EDUCATION</h2>
            {data.education.sort(compareByDate).map((edu) => (
              <div key={edu.id}>
                <h3>{edu.name}</h3>
                <ul>
                  <li>{edu.location}</li>
                  <li>{edu.degree}</li>
                  <li>{formatDate(edu.endDate)}</li>
                </ul>
              </div>
            ))}
          </section>
        )}
        {/* experience section */}
        {data.experience.length > 0 && (
          <section className="experience">
            <h2>EXPERIENCE</h2>
            {data.experience.sort(compareByDate).map((exp) => (
              <div key={exp.id}>
                <h3>{exp.name}</h3>
                <ul>
                  <li>{exp.location}</li>
                  {(exp.startDate || exp.endDate) && (
                    <li>
                      {formatDate(exp.startDate)} &ndash;{' '}
                      {formatDate(exp.endDate)}
                    </li>
                  )}
                  <li>{exp.description}</li>
                </ul>
              </div>
            ))}
          </section>
        )}
        {/* skills section */}
        {data.skills.length > 0 && (
          <section className="skills">
            <h2>SKILLS</h2>
            {data.skills.map((skill) => {
              const subSkills = skill.subSkills
                ? skill.subSkills.split(', ')
                : null;
              return (
                <div key={skill.id}>
                  <h3>{skill.name}</h3>
                  <ul>
                    {subSkills &&
                      subSkills.map((subSkill) => (
                        <li key={subSkill}>{subSkill}</li>
                      ))}
                  </ul>
                </div>
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
}
