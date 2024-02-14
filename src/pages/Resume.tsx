import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";
import NavigationButton from "../components/NavigationButton";
import "../styles/resume.scss";
import { useEffect } from "react";
import SideMenu from "../components/SideMenu";

function Resume() {
  useEffect(() => {
    document.title = "Diogo Agostinho - Resume";
  });
  return (
    <>
      <Fade duration={300}>
        <div className="sidemenu">
          <SideMenu />
        </div>
        <div className="work">
          <div className="work__content">
            <div className="work-left">
              <div className="work__header">
                <h1>Resume</h1>
                <h2>
                  See where I've studied/worked and all of my certificates
                </h2>
              </div>
              <div className="work__section">
                <p className="resumestatus">
                  Studies and Education <hr />
                </p>
                <div className="work__dividers">
                  <div className="resume-block">
                    <h3>University of Algarve, UALG</h3>
                    <h2>2020 - 2022</h2>
                    <p>
                      I had 2 years of education in UALG, learning computing
                      systems and technologies, finished the university with a
                      Certificate of Professional Qualification Level 4, within
                      the studies I learned Python and JavaScript.
                    </p>
                  </div>
                  <div className="resume-block">
                    <h3>Pinheiro e Rosa High School, AEPROSA</h3>
                    <h2>2017 - 2020</h2>
                    <p>
                      On high school, I finished a superior technical course
                      (information systems and technologies), this was my first
                      interaction with any kind of technical work. Amongst all
                      the studies, I learned C, C#, PHP and JavaScript.
                    </p>
                  </div>
                </div>
              </div>
              <div className="work__section">
                <p className="resumestatus">
                  Work Experiences <hr />
                </p>
                <div className="work__dividers">
                  <div className="resume-block">
                    <h3>Xerox Analyst and Technician, XEKmate</h3>
                    <h2>2023 - Current</h2>
                    <p>
                      I’m currently working at XEKmate, a xerox systems
                      concessionaire. My job is to analyze the workplace of a
                      client and make sure it has enough room and resources to
                      install a MFP Xerox device, after the analysis, the
                      printer is installed in the client's office. The other
                      side of the job involves technical support (helpdesk)
                      through Anydesk and/or TeamViewer.
                    </p>
                  </div>
                  <div className="resume-block">
                    <h3>Computer Technician, PCQUATRO</h3>
                    <h2>2022 - 2023</h2>
                    <p>
                      I used to work for PCQUATRO, the job involved building PCs
                      for individuals and enterprises, along with repairing
                      similar systems (PCs, laptops, AIOs). I also worked with
                      networking architectures, passing and building ethernet
                      cables for clients. This job also gave me experience with
                      helpdesk, tech support and selling products to clients
                      within the physical shop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-right">
              <NavigationButton
                title={"ABOUT ME"}
                desc={"Learn all about me!"}
                link={"/"}
                active={false}
              />

              <NavigationButton
                title={"WORK"}
                desc={"View my portfolio"}
                link={"/work"}
                active={false}
              />

              <NavigationButton
                title={"RESUME"}
                desc={"My studies and certifications"}
                link={"/resume"}
                active={true}
              />

              <NavigationButton
                title={"EXPERIENCE"}
                desc={"Everything I know"}
                link={"/experience"}
                active={false}
              />
            </div>
          </div>
          <Footer />
        </div>
      </Fade>
    </>
  );
}
export default Resume;
