import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Hacker News 3.0</h2>
        <nav className="nav-menu" aria-label="Navigation elements">
          <ul>
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Past</a>
            </li>
            <li>
              <a href="#">Comments</a>
            </li>
            <li>
              <a href="#">Ask</a>
            </li>
            <li>
              <a href="#">Show</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
          </ul>
        </nav>
        <button className="login-button" aria-label="Login">
          Login
        </button>
      </div>
    </header>
  );
};
