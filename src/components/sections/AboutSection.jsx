export function AboutSection(props) {
  return (
    <section
      className="about"
      {...props}
    >
      <img
        src="/images/me.png"
        alt="me"
      />
      <div className="text">
        <h2>About me</h2>

        <p>
          I was born on April 2, 2003. In 2020, I graduated from school with
          honors ("Altyn Belgi"). The same year, I took the UNT and enrolled in
          the International University of Information Technologies in Almaty,
          specializing in Network Security. In 2024, I successfully completed my
          studies at this institution. In my free time, I engage in
          volunteering. During the summer of 2022, I worked at Otbasy Bank.
          Currently, I am employed at CES company.
        </p>
      </div>
    </section>
  );
}
