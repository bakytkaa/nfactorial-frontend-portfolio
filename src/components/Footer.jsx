export function Footer({ contacts, ...props }) {
  return (
    <footer
      className="footer"
      {...props}
    >
      <p className="made">Made by Bakyt Kantayeva</p>

      <div className="contacts">
        <p>Contacts:</p>

        {contacts.map((item) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
          >
            <item.component
              size={24}
              color={"#fff"}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
