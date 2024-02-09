import { Link } from "react-router-dom";
import "../styles/navigationbutton.scss";

function NavigationButton(props: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <>
      <Link to={props.link}>
        <div className="nav-button">
          <div className="nb__content">
            <p className="large">{props.title}</p>
            <p className="small">{props.desc}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default NavigationButton;
