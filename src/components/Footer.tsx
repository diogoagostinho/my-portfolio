import { useState } from "react";
import "../styles/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  const [isOnBtn, setIsOnBtn] = useState(false);

  const handleEnterMouse = () => {
    setIsOnBtn(true);
  };
  const handleLeaveMouse = () => {
    setIsOnBtn(false);
  };

  return (
    <>
      <div className="footer">
        <div className="footer__content">
          <div className="footer-left">
            <div className="footer-left-text">
              <p className="footer-title">Interested? Contact me!</p>
              <img src="callme.png" />
            </div>
            <Link to="mailto:d.agostinho2002@gmail.com">
              <div className="footer-left-button">
                <div
                  onMouseEnter={handleEnterMouse}
                  onMouseLeave={handleLeaveMouse}
                  className="footer-button"
                >
                  Contact
                </div>
                <p className={isOnBtn ? "button-text isonbtn" : "button-text"}>
                  contact via email
                </p>
              </div>
            </Link>
          </div>
          <div className="footer-right">
            <a target="_blank" href="https://github.com/diogoagostinho">
              <p>GitHub</p>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/diogo-agostinho-b99a33224/"
            >
              <p>LinkedIn</p>
            </a>
            <a target="_blank" href="https://dev.to/diogoagostinho">
              <p>DEV.to</p>
            </a>
            <a target="_blank" href="https://twitter.com/agostinho_dev">
              <p>X (Twitter)</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
