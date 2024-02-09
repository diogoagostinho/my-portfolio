import Footer from "../components/Footer";
import NavigationButton from "../components/NavigationButton";
import "../styles/work.scss";

function Work() {
  return (
    <>
      <div className="work">
        <div className="work__content">
          <div className="work-left">
            <div className="work__header">
              <h1>Portfolio</h1>
              <h2>Have a look at all my projects</h2>
            </div>
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias doloribus ducimus porro quam officia aspernatur illum
              necessitatibus, amet, sequi deserunt quas voluptates saepe, odio
              tempore itaque voluptatum at. Quos, eveniet.
            </h1>
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias doloribus ducimus porro quam officia aspernatur illum
              necessitatibus, amet, sequi deserunt quas voluptates saepe, odio
              tempore itaque voluptatum at. Quos, eveniet.
            </h1>
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias doloribus ducimus porro quam officia aspernatur illum
              necessitatibus, amet, sequi deserunt quas voluptates saepe, odio
              tempore itaque voluptatum at. Quos, eveniet.
            </h1>
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias doloribus ducimus porro quam officia aspernatur illum
              necessitatibus, amet, sequi deserunt quas voluptates saepe, odio
              tempore itaque voluptatum at. Quos, eveniet.
            </h1>
            <div className="work__section"></div>
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
              link={"work"}
              active={true}
            />
            <NavigationButton
              title={"RESUME"}
              desc={"My studies and certifications"}
              link={"resume"}
              active={false}
            />
            <NavigationButton
              title={"EXPERIENCE"}
              desc={"Everything I know"}
              link={"experience"}
              active={false}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Work;
