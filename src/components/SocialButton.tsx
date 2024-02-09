import { Link } from "react-router-dom";
import "../styles/socialbutton.scss";

function SocialButton(props: {
  socialImage: string;
  socialTitle: string;
  socialUser: string;
  socialLink: string;
  socialColor: string;
}) {
  return (
    <>
      <Link target="_blank" to={props.socialLink}>
        <div className={"social-button " + props.socialColor}>
          <div className="sb__content">
            <div className="sb-left">
              <img src={props.socialImage} />
            </div>
            <div className="sb-right">
              <p className="small">{props.socialTitle}</p>
              <p className="tiny">{props.socialUser}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SocialButton;
