import "../styles/Menu.css";
import logoImg from "../images/Medi..svg"

function Menu() {
  return (
    <div id="Menu">
      <nav className="menu">
        <ul>
          <li>
          <a href="www.google.com"><img src={logoImg} alt="Medi."/></a>
          </li>
          <li>
            <a href="www.google.com">{"Home"}</a>
          </li>
          <li>
            <a href="www.google.com">{"About"}</a>
          </li>
          <li>
            <a href="www.google.com">{"Blog"}</a>
          </li>
          <li>
            <a href="www.google.com">{"Contacts"}</a>
          </li>
          <li>
            <a href="www.google.com">{"Sing In"}</a>
          </li>
          <li>
            <a href="www.google.com">{"Sing Up"}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
