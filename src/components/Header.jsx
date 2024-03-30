export function Header({ navs, ...props }) {
  return (
    <header
      className="header"
      {...props}
    >
      <h3 className="title">Kantaeva Bakyt</h3>

      <nav className="navigations">
        {navs.map((nav) => (
          <a
            key={nav.label}
            href={nav.link}
          >
            {nav.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
