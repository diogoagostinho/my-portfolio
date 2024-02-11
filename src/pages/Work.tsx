import { Fade, Slide } from "react-awesome-reveal";
import Footer from "../components/Footer";
import NavigationButton from "../components/NavigationButton";
import PortfolioItem from "../components/PortfolioItem";
import "../styles/work.scss";

function Work() {
  return (
    <>
      <Fade duration={300}>
        <div className="work">
          <div className="work__content">
            <div className="work-left">
              <div className="work__header">
                <h1>Portfolio</h1>
                <h2>Have a look at all my projects</h2>
              </div>
              <div className="work__section">
                <p className="year">
                  2024 <hr />
                </p>
                <div className="work__dividers">
                  <PortfolioItem
                    title={"Wallabank"}
                    desc={
                      "Landing page for wallabank, a global fintech wallet/bank platform"
                    }
                    image={"wallabank.png"}
                    link={"https://wallabank.vercel.app/"}
                    tags={["React", "TypeScript", "Next"]}
                  />
                  <PortfolioItem
                    title={"Nanocard"}
                    desc={"Landing page for a crypto wallet platform"}
                    image={"nanocard.png"}
                    link={"https://agstnh-nanocard.netlify.app/"}
                    tags={["React", "TypeScript", "Netlify"]}
                  />
                  <PortfolioItem
                    title={"Firebase Blog"}
                    desc={"A copy of Firebase Blog with vanilla JS"}
                    image={"firebase.png"}
                    link={"https://diogoagostinho.github.io/firebase-blog/"}
                    tags={["JavaScript", "jQuery"]}
                  />
                </div>
              </div>
              <div className="work__section">
                <p className="year">
                  2023 <hr />
                </p>
                <div className="work__dividers">
                  <PortfolioItem
                    title={"GitHub Universe"}
                    desc={"A copy of Github's Universe 2023 webpage"}
                    image={"githubuniverse.png"}
                    link={
                      "https://diogoagostinho.github.io/github-universe-23/"
                    }
                    tags={["JavaScript", "jQuery"]}
                  />
                  <PortfolioItem
                    title={"Game Library"}
                    desc={
                      "A single-page website displaying few videogames via JSON"
                    }
                    image={"gamelibrary.png"}
                    link={
                      "https://diogoagostinho.github.io/design-matters-lookalike/"
                    }
                    tags={["JavaScript", "jQuery"]}
                  />
                </div>
              </div>
            </div>
            <div className="work-right">
              <Slide direction="up" delay={50} duration={500} triggerOnce>
                <NavigationButton
                  title={"ABOUT ME"}
                  desc={"Learn all about me!"}
                  link={"/"}
                  active={false}
                />
              </Slide>
              <Slide direction="up" delay={100} duration={500} triggerOnce>
                <NavigationButton
                  title={"WORK"}
                  desc={"View my portfolio"}
                  link={"/work"}
                  active={true}
                />
              </Slide>
              <Slide direction="up" delay={150} duration={500} triggerOnce>
                <NavigationButton
                  title={"RESUME"}
                  desc={"My studies and certifications"}
                  link={"/resume"}
                  active={false}
                />
              </Slide>
              <Slide direction="up" delay={200} duration={500} triggerOnce>
                <NavigationButton
                  title={"EXPERIENCE"}
                  desc={"Everything I know"}
                  link={"/experience"}
                  active={false}
                />
              </Slide>
            </div>
          </div>

          <Footer />
        </div>
      </Fade>
    </>
  );
}
export default Work;
