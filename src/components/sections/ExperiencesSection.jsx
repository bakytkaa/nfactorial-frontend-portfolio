export function ExperiencesSection({ experiences, ...props }) {
  return (
    <section
      className="experiences"
      {...props}
    >
      <h2 className="title">Experiences</h2>

      <div className="items">
        {experiences.map((experience) => (
          <div
            className="experience-item"
            key={experience.text}
          >
            <p>{experience.years}</p>
            <p>{experience.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
