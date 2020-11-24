import "../styles/Home.css";
import arteImage from "../images/Frame.svg";
import Menu from "./Menu";

function Home() {
  return (
    <>
      <Menu />
      <div id="Home">
        <div className="HomeTexto">
          <h1>{"Stay Productive & Work Remotely"}</h1>
          <p>The key to work-from-home success is to create an environment that allows you to focus on the tasks at hand. Whether you are working from home for the first time.</p>
          <a href="www.google.com">{"Sing Up"}</a>
        </div>
        <div className="HomeImage">
          <img src={arteImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
