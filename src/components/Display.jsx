import '../styles/Display.css';

export default function Display({ data }) {
  return (
    <div className="display-container">
      <div className="display">
        {/* basic info */}
        <section className="basic-info">
          <h1>{data.basicInfo.name.toUpperCase()}</h1>
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
        {/* education */}
        {data.education.length > 0 && (
          <section className="education">
            <h2>EDUCATION</h2>
            {data.education.map((edu) => (
              <div key={edu.id}>
                <h3>{edu.name}</h3>
                <ul>
                  <li>{edu.location}</li>
                  <li>{edu.degree}</li>
                  <li>{edu.graduation}</li>
                </ul>
              </div>
            ))}
          </section>
        )}
        {/* experience */}
        {data.experience.length > 0 && (
          <section className="experience">
            <h2>EXPERIENCE</h2>
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <h3>{exp.name}</h3>
                <ul>
                  <li>{exp.location}</li>
                  <li>
                    {exp.startDate} - {exp.endDate}
                  </li>
                  <li>{exp.description}</li>
                </ul>
              </div>
            ))}
          </section>
        )}
        {/* skills */}
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
    </div>
  );
}
