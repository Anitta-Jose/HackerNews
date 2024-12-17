import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer" aria-label="footer">
      <hr className="footer-line" />
      <nav className="footer-links" aria-label="Footer Navigation">
        <a href="#guidelines">Guidelines</a>
        <span>|</span>
        <a href="#faq">FAQ</a>
        <span>|</span>
        <a href="#lists">Lists</a>
        <span>|</span>
        <a href="#api">API</a>
        <span>|</span>
        <a href="#security">Security</a>
        <span>|</span>
        <a href="#legal">Legal</a>
        <span>|</span>
        <a href="#apply">Apply to YC</a>
        <span>|</span>
        <a href="#contact">Contact</a>
      </nav>
    </footer>
  );
};
