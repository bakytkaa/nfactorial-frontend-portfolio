export function ProjectsSection({ projects, ...props }) {
  return (
    <section
      className="projects"
      {...props}
    >
      <h2 className="title">My Projects</h2>

      <div className="items">
        {projects.map((project) => (
          <div
            className="project-item"
            key={project.title}
          >
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="images">
              {project.images.map((imageUrl) => (
                <img
                  key={imageUrl}
                  src={imageUrl}
                  alt={project.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
