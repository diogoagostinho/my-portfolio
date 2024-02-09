import NavigationButton from "../components/NavigationButton";
import SocialButton from "../components/SocialButton";
import "../styles/about.scss";

function About() {
  return (
    <>
      <div className="about">
        <div className="about__container">
          <div className="about__content">
            <div className="about-left">
              <div className="about__header">
                <div className="header-left">
                  <img src="diogoagostinho.jpg" />
                </div>
                <div className="header-right">
                  <h3>Diogo Agostinho</h3>
                  <h2>Self-taught developer</h2>
                  <p className="small">d.agostinho2002@gmail.com</p>
                </div>
              </div>
              <div className="about__catch">
                <p className="small">
                  “Hello! I’m Diogo Agostinho, and i’ve been teaching myself how
                  to code for over a year!”
                </p>
              </div>
              <div className="about__info">
                <p>
                  I'm a 21-year-old young man living in Portugal, currently
                  working, forever a student. Hoping to work freelance or on a
                  contract basis as a web developer.
                </p>
                <p>
                  My main interests are the gym 🏋️, cars 🚘, coffee ☕ and
                  traveling ✈️
                </p>
              </div>
              <div className="about__socials">
                <SocialButton
                  socialImage={"diogoagostinho.jpg"}
                  socialTitle={"GitHub"}
                  socialUser={"@diogoagostinho"}
                  socialLink={"https://github.com/diogoagostinho"}
                />
                <SocialButton
                  socialImage={"diogoagostinho.jpg"}
                  socialTitle={"DEV.to"}
                  socialUser={"@diogoagostinho"}
                  socialLink={"https://dev.to/diogoagostinho"}
                />
                <SocialButton
                  socialImage={"diogoagostinho.jpg"}
                  socialTitle={"LinkedIn"}
                  socialUser={"Diogo Agostinho"}
                  socialLink={
                    "https://www.linkedin.com/in/diogo-agostinho-b99a33224/"
                  }
                />
                <SocialButton
                  socialImage={"diogoagostinho.jpg"}
                  socialTitle={"X (Twitter)"}
                  socialUser={"@agostinho_dev"}
                  socialLink={"https://twitter.com/agostinho_dev"}
                />
              </div>
            </div>
            <div className="about-right">
              <NavigationButton
                title={"ABOUT ME"}
                desc={"Learn all about me!"}
                link={"/"}
              />
              <NavigationButton
                title={"WORK"}
                desc={"View my portfolio"}
                link={"work"}
              />
              <NavigationButton
                title={"RESUME"}
                desc={"My studies and certifications"}
                link={"resume"}
              />
              <NavigationButton
                title={"EXPERIENCE"}
                desc={"Everything I know"}
                link={"experience"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
