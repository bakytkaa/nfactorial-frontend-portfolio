export function HeroSection(props) {
  return (
    <section
      className="hero"
      {...props}
    >
      <div className="text">
        <h1>
          <span>
            <span className="hello">Hello,</span>
            <br />
            I’m <span>Frontend Developer</span> <br /> and This Is My Portfolio
          </span>
        </h1>

        <a
          href="/files/cv.pdf"
          target="_blank"
        >
          Check out my CV
        </a>
      </div>
      <img
        src="/images/main.png"
        alt="main"
      />
    </section>
  );
}
